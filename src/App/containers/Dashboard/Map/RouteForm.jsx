import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from "./../../../store/duck";
import { Form, Field } from 'react-final-form';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const componentSelect = ({ input, meta, label }) => {
  return (
    <>
      <Select
        // value={age}
        // onChange={handleChange}
        displayEmpty
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </>
  )
};

const componentInput = ({ input, meta, label }) => {
  return (
    <>
      <p>{label}</p>
      <input {...input}/>
      {meta.error && meta.visited && !meta.active && (
        <pre style={{ color: "red" }}>{meta.error}</pre>
      )}
    </>
  )
};

const onSubmit = () => {
  console.log('Submit');
}

const validate = values => {
  // const errors = {};
  // if(!values.address1) {
  //   errors.address1 = "Введите данные.";
  // }
  // return errors;
}

const mapStateToProps = state => {
  return {
    // cardData: isCardSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // card: value => dispatch(actions.card(value)),
    // getCard: () => dispatch(actions.getCard())
  }
};

class RouteForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      address1: [],
      address2: [],
    };
  }

  render() {
    const { address1, address2 } = this.props; 
    return ( 
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={( handleSubmit ) => (
          <form onSubmit={handleSubmit}>
            <Field 
              name="address1" 
              label="Откуда" 
              component="select"
            >
              <option value="#ff0000">❤️ Red</option>
              <option value="#00ff00">💚 Green</option>
              <option value="#0000ff">💙 Blue</option>
            </Field>
            <Field 
              name="address2" 
              label="Куда" 
              component={componentInput} 
            />
          </form>
        )}
      />
    );
  }
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteForm);