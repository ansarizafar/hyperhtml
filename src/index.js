import 'bulma/css/bulma.css'

import router from './routes'

router.start({
    fallback: "/" // if the current URL matches no route, use this one
  });

  