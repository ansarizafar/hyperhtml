
const { Component } = require("hyperhtml/umd");
import {Store} from '../decorators'

@Store
export default class Header extends Component {
    constructor() {
      super();
      }
    
    render() {
      return this.html`
      <h3 class="title">
      ${this.Store.title}
    </h3>`
           }
  }