import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';


import Gift from './Gift';

describe('Gift', () => {
  const gift = shallow(<Gift />);

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
});