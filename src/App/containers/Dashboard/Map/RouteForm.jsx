import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from "./../../../store/duck";
import { 
  addressesSelector, 
  routeSelector, 
  isCardSelector, 
} from "./../../../store/selectors";
import {
  Card,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@material-ui/core";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { theme } from './../Shared/theme';

const routeTheme = createMuiTheme({
  route_card: {
    position: "absolute",
  },
});

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
        <ThemeProvider theme={theme}>
          <Card>
            <CardContent>
              <Button>
                <NavLink to="/dashboard/profile">Добавить платежные данные</NavLink>
              </Button>  
            </CardContent>
          </Card>
        </ThemeProvider>   
      )
    }
    if(routeData.length === 0) {
      return (
        <ThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <Card>
              <CardContent>
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
              </CardContent>
            </Card>
          </ThemeProvider>
        </ThemeProvider>
      );
    } else {
      return(
        <ThemeProvider theme={theme}>
          <Card>
            <CardContent>
              <Button onClick={this.handleNewRoute}>Сделать новый заказ</Button> 
            </CardContent>
          </Card>
        </ThemeProvider>
      )      
    }    
  }
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteForm);