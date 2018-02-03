const { Component } = require("hyperhtml/umd");

import Header from "../components/header";
import {Store, Listen, Emitter, Router} from '../decorators'


@Store
@Emitter
@Router
export default class Home extends Component {
    
  constructor() {
    super();
      }

@Listen('login')
onLogin(data) {
  console.log(data)
}


  click(e) {
    e.preventDefault();
    this.Router.goto("/settings");
    //this.Emitter.emit('login', {status: 'Success'})
  
  }
updatetitle(e) {
  this.Store.title = e.target.value
  }
  
  connected() {

  }

  render() {
    return this.html`
      <div class="ui container" onconnected=${this.connected.bind(this)}>
      ${new Header()}
      
      <input class="ui input" value="${this.Store.title}" oninput="${this.updatetitle.bind(this)}">
              <button class="ui red circular button" onclick=${this.click.bind(
          this
        )}>     <i class="heart icon"></i>  Settings Page</button>

        
        </div>
      `;
  }
}
