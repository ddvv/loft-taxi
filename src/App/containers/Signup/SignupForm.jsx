import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from "../../store/duck";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    signUp: value => dispatch(actions.signUp(value))
  }
};

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      name: '',
      surname: '',
      password: '',
    };
  }

  handleChange = e => {
    this.setState({ 
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { 
      email, 
      name,
      surname,
      password 
    } = this.state;
    const { signUp } = this.props;
    if(email && name && surname && password) {
      signUp(this.state);
    }
  };

  render() { 
    return ( 
      <form onSubmit={this.handleSubmit}>
        {/* <p>Уже зарегистрированы? <a href="/">Войти</a></p> */}
        <div>
          <label>
            Адрес электронной почты <br/>
            <input 
              name="email" 
              type="email" 
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Имя <br/>
            <input 
              name="name" 
              type="text" 
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Фамилия <br/>
            <input 
              name="surname" 
              type="text" 
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Пароль <br/>
            <input 
              name="password" 
              type="password"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <br/>
          <input 
            type="submit" 
            value="Зарегистрироваться" 
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
)(SignupForm);