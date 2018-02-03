import mitt from 'mitt'

let app = {}

app.emitter = mitt()
window.app = app
export default app