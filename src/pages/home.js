const { Component } = require("hyperhtml/umd");

import Header from "../components/header";
import {Store, Listen} from '../decorators'

@Store
export default class Home extends Component {
  
  
  constructor(app) {
    super();
    this.app = app;
    this.app.emitter.on("login", user => this.render());
    
  }

@Listen('login')
onLogin(data) {
  console.log(data)
}


  click(e) {
    e.preventDefault();
    //this.app.router.goto("/settings");
    this.emitter.emit('login', {status: 'Success'})
  
  }
updatetitle(e) {
  this.Store.title = e.target.value
  }
  
  render() {
    return this.html`
      <div class="ui container" >
      ${new Header()}
      
      <input value="${this.Store.title}" oninput="${this.updatetitle.bind(this)}">
              <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" onclick=${this.click.bind(
          this
        )}>Settings Page</button>
        
        </div>
      `;
  }
}
