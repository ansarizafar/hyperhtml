import mitt from "mitt";

export let emitter = mitt();

export function Emitter(constructor) {
  return class extends constructor {
    constructor(args) {
      super(args);
      this.Emitter = emitter;
    }
  };
}

export function Listen(name) {
  return function(target, propertyKey, descriptor) {
    emitter.on(name, data => descriptor.value(data));

    return descriptor;
  };
}

/*
  export function Event(target, key) {
 
    //let value = target[key];
   
       const getter = function() {
        return emitter;
    };
   
    const setter = function(newVal) {
      
    };
   
    
    Reflect.deleteProperty[key];
    Reflect.defineProperty(target, key, {
        get: getter,
        set: setter
    });
    

    
    if (delete target[key]) {
      
      Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
      });
    
    }
    console.log(target.eEmitter)
  }
  */
