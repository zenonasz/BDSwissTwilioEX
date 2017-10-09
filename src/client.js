import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipient: '',
	  checkboxState: false
    };
  }
  changeInput(event) {
    this.setState({recipient: event.target.value});
  }
  
   toggle(event) {
    this.setState({
      checkboxState: !this.state.checkboxState
    });
    }
  sendSms() {
    fetch('/sendsms', {
      method: 'POST',
      headers: {
        Accept: 'application/JSON',
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify({"recipient": this.state.recipient})
    });
  }
  render() {
    return (
      <div>
        <p>Send your promo code to: </p>
      <input onChange={this.changeInput.bind(this)} value={this.state.recipient}  placeholder="+3579XXXXXXX"/>
        <button disabled={!this.state.checkboxState} onClick={this
          .sendSms
          .bind(this)}>Send message</button>
        <p> I accept the Terms and Condition
			<input type="checkbox" onClick={this.toggle.bind(this)} />
		</p>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, document.getElementById('root'));