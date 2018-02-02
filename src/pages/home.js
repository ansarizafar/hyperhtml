const { Component } = require("hyperhtml/umd");

import Header from "../components/header";

export default class Home extends Component {
  constructor(app) {
    super();
    this.app = app;
    this.app.emitter.on("login", user => this.render());
  }

  click(e) {
    e.preventDefault();
    this.app.router.goto("/settings");
  }

  render() {
    return this.html`
      <div class="ui container">
      ${new Header()}
      <h3 class="ui dividing header"> ${this.app.store.title}</h3>
        <button class="ui small twitter button" onclick=${this.click.bind(
          this
        )}>Settings Page</button>
        
        </div>
      `;
  }
}
