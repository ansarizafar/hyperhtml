import './styles/semantic.css'
//import './styles/tailwind.css'

import router from './routes'

router.start({
    fallback: "/" // if the current URL matches no route, use this one
  });