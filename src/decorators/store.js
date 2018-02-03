import mitt from 'mitt'

let emitter = mitt()

let handlers = {
    set: function(target, prop, value) {
        target[prop] = value
     emitter.emit('update', {name: prop, value: value})
        return true
    }
}

let dataStore = new Proxy({user: {name: 'Zafar Ansari'}, title: 'Amazing HyperHtml'}, handlers);

export function Store(constructor) {

    return class extends constructor {
    constructor(args) {
      super(args);
      this.Store = dataStore
      this.emitter = emitter
      emitter.on("update", data => constructor.prototype.render.apply(this, arguments) );      
    }

    /*ngOnDestroy() {
        console.log('Cleaning....')
        // Auto Clean things and call the original method
        constructor.prototype.ngOnDestroy.apply(this, arguments);
        } */
  };
}
