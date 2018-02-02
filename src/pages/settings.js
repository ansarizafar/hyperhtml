const { Component } = require("hyperhtml/umd");
import Header from '../components/header'
export default class Settings extends Component {
    constructor(app) {
      super();
      this.app = app
    }
  
    click(e) {
      e.preventDefault();
      this.app.router.goto("/");
    }
  
    render() {
      return this.html`
      <div class="ui container">
      ${new Header()}
      <h3 class="ui dividing header">Settings</h3>
        <button class="ui small button twitter" onclick=${this.click.bind(this)}>Home Page</button>
        </div>`
    }
  }