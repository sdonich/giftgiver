import React from 'react';
import { Button } from 'react-bootstrap';

class App extends React.Component {
  state = {
    gifts: []
  }

  addGift = () => {
    const { gifts } = this.state;
    const ids = this.state.gifts.map(gift => gift.id);
    const max_id = ids.length > 0 ? Math.max(...ids) : 0;

    this.setState({ gifts: [...gifts, { id: max_id + 1 }] });
  }

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {
            this.state.gifts.map(gift => {
              return (
                <div key={gift.id}></div>
              );
            })
          }
        </div>
        <Button className="btn-add" onClick={this.addGift}>Add Gift</Button>
      </div>
    );
  }
}

export default App;

