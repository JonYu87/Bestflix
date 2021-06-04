import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }



  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  componentWillUnmount () {
    this.props.removeErrors();
  }


  render () {
    return (
      <div className="login-form-container">
          <button className="sign-up-button">{this.props.navLink}</button>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h1 className="form-type">{this.props.formType}</h1>
          <br/>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>
              <input type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br/>
            <label>
              <input type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
          <label>Place holder for demo user</label>
        </form>
      </div>
    );
  }
};

export default SessionForm;