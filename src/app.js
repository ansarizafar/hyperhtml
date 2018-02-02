import mitt from 'mitt'

let app = {}

app.emitter = mitt()
app.store = {user: {name: 'Zafar Ansari'}, title: 'Amazing HyperHtml'}
window.app = app
export default app