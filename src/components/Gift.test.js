import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';


import Gift from './Gift';

describe('Gift', () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = {
    gift: { id },
    removeGift: mockRemove
  };
  
  const gift = shallow(<Gift {...props} />);

  test('renders properly', () => {
    const tree = renderer.create(<Gift />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('initializes a person and present in `state`', () => {
    expect(gift.state()).toEqual({ person: '', present: '' });
  });

  describe('when typing into the person input', () => {
    const person = 'Uncle'
    beforeEach(() => {
      gift.find('.input-person').simulate('change', { target: { value: person } });
    })
    test('updates the person in `state`', () => {
      expect(gift.state().person).toBe(person);
    });
  });

  describe('when typinng into the present input', () => {
    const present = 'Golf Clubs';
    beforeEach(() => {
      gift.find('.input-present').simulate('change', { target: { value: present } });
    });
    test('updates the present in `state`', () => {
      expect(gift.state().present).toBe(present);
    });
  });

  describe('when clicking the `remove Gift` button', () => {
    beforeEach(() => {
      gift.find('.btn-remove').simulate('click');
    });
    test('calls the removeGift callback', () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  });
});