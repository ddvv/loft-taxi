import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from "./../../../store/duck";
import { addressesSelector } from "./../../../store/selectors";
// import { Form, Field } from 'react-final-form';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

const mapStateToProps = state => {
  return {
    addresses: addressesSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAddresses: () => dispatch(actions.getAddress()),
    route: (value) => dispatch(actions.route(value)),
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

  render() {
    const { address1, address2 } = this.state;
    const { addresses } = this.props; 
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
  }
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteForm);