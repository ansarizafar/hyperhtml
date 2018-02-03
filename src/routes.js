import {router} from "./decorators"
import Home from "./pages/home";
const { hyper } = require("hyperhtml/umd");

export default router
  
  router
  .add("/", {
    enter: function(route, previousRoute) {
      hyper(document.body)`${new Home()}`;
      window.scrollTo(route.scrollX, route.scrollY);
    }
  })
  .add("/settings", {
    enter: function(route, previousRoute) {
      import('./pages/settings').then(({ default: Settings }) => {
        hyper(document.body)`${new Settings()}`;
        window.scrollTo(route.scrollX, route.scrollY);
      })
      
    }
  })
  


