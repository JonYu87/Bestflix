import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
    this.addDemoUser = this.addDemoUser.bind(this);
    
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

  demoUser (e) {
    e.preventDefault();
    const demoUser = {
      email: "Peter_Porker@bestavenger.com",
      password: "1233456"
    }
    this.props.processForm(demoUser).then(() => this.props.history.push('/'))
  }

  addDemoUser () {
    if (this.props.formType === 'Sign In') {
      return (
        <div className="demo-user">
          <h3>New to Bestflix?</h3>
          <button onClick={this.demoUser}>Demo</button>
        </div>
      )
    }
  };


  render () {
    return (
      <div className="login-form-container">
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
        <span className="demo-login">{this.addDemoUser()}</span>
        </form>
      </div>
    );
  }
};

export default SessionForm;