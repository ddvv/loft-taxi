import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from "./../../../store/duck";
import { addressesSelector, routeSelector, isCardSelector } from "./../../../store/selectors";
// import { Form, Field } from 'react-final-form';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

const mapStateToProps = state => {
  return {
    addresses: addressesSelector(state),
    routeData: routeSelector(state),
    isCard: isCardSelector(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAddresses: () => dispatch(actions.getAddress()),
    route: (value) => dispatch(actions.route(value)),
    deleteRoute: () => dispatch(actions.routeDelete()),
  }
};

class RouteForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      address1: '',
      address2: '',
    };
  }

  componentDidMount() {
    const { getAddresses } = this.props;
    getAddresses();
  }

  handleChange = e => {
    this.setState({ 
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { address1, address2 } = this.state;
    const { route } = this.props;

    if(address1 && address2 && address1 !== address2 ) {
      route(this.state);
    }
  };

  handleNewRoute = e => {
    const { deleteRoute } = this.props;
    deleteRoute();
  };

  render() {
    const { address1, address2 } = this.state;
    const { addresses, routeData, isCard } = this.props;
    
    if(!isCard) {
      return (
        <Button>
          <NavLink to="/dashboard/profile">Добавить платежные данные</NavLink>
        </Button>        
      )
    }
    if(routeData.length === 0) {
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <FormControl >
              <InputLabel>Откуда</InputLabel>
              <Select
                name="address1"
                value={address1}
                onChange={this.handleChange}
              >
                {addresses.map((address, item) => {
                  return (<MenuItem value={address} key={item}>{address}</MenuItem>)
                })}
              </Select>
            </FormControl>
          </div>
          <div>
            <FormControl >
              <InputLabel>Куда</InputLabel>
              <Select
                name="address2"
                value={address2}
                onChange={this.handleChange}
              >
                {addresses.map((address, item) => {
                  return (<MenuItem value={address} key={item}>{address}</MenuItem>)
                })}
              </Select> 
            </FormControl>
          </div>
          <div>
            <Button type="submit">Построить маршрут</Button>
          </div>
        </form>
      );
    } else {
      return(
        <Button onClick={this.handleNewRoute}>Сделать новый заказ</Button>
      )      
    }    
  }
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteForm);