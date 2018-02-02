const { Component } = require("hyperhtml/umd");

export default class Header extends Component {
    constructor() {
      super();
      }
    
    render() {
      return this.html`
      <h3 class="ui block header">
      Main Header
    </h3>`
           }
  }