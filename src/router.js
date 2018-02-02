import router from "roadtrip";
import Home from './pages/home'
const { hyper } = require("hyperhtml/umd");


export default function(app) {
  app.router = router
router
  .add("/", {
    enter: function(route, previousRoute) {
      hyper(document.body)`${new Home(app)}`;
      window.scrollTo(route.scrollX, route.scrollY);
    }
  })
  .add("/settings", {
    enter: function(route, previousRoute) {
      import('./pages/settings').then(({ default: Settings }) => {
        hyper(document.body)`${new Settings(app)}`;
        window.scrollTo(route.scrollX, route.scrollY);
      })
      
    }
  })
  .start({
    fallback: "/" // if the current URL matches no route, use this one
  });

}