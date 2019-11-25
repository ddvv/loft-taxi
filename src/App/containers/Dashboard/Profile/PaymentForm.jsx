import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from "./../../../store/duck";
import { isCardSelector } from './../../../store/selectors';

const mapStateToProps = state => {
  return {
    cardData: isCardSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    card: value => dispatch(actions.card(value)),
    getCard: () => dispatch(actions.getCard())
  }
};

class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cardNumber: '',
      expiryDate: '',
      cardName: '',
      cvc: '',
    };
  }

  handleChange = e => {
    this.setState({ 
      [e.target.name]: e.target.value
    });
  };
  
  handleSubmit = e => {
    e.preventDefault();
    const { cardNumber, expiryDate, cardName, cvc } = this.state;
    const { card } = this.props;

    if(cardNumber && expiryDate && cardName && cvc) {
      card(this.state);
    }
  };

  render() { 
    // let { cardNumber, expiryDate, cardName, cvc } = this.props.cardData;
    return ( 
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Номер карты <br/>
            <input 
              name="cardNumber" 
              type="number"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Срок действия <br/>
            <input 
              name="expiryDate" 
              type="month"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Имя владельца <br/>
            <input 
              name="cardName" 
              type="text" 
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            CVC <br/>
            <input 
              name="cvc" 
              type="number"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <br/>
          <input 
            type="submit" 
            value="Сохранить" 
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}
 
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(PaymentForm);