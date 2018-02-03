const { Component } = require("hyperhtml/umd");
import Header from '../components/header'
import {Store, Router} from '../decorators'

@Store
@Router
export default class Settings extends Component {
    constructor(app) {
      super();
      this.app = app
    }
  
    click(e) {
      e.preventDefault();
      this.Router.goto("/");
    }
  
    render() {
      return this.html`
      <div class="ui container">
      ${new Header()}
      <h3 class="ui dividing header">Settings</h3>
      <h4>${this.Store.user.name}</h4>
      <button class="button is-success is-outlined" onclick=${this.click.bind(this)}>Home Page</button>
        </div>`
    }
  }