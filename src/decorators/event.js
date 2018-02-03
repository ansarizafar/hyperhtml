import mitt from 'mitt'

let emitter = mitt()


export function Listen( name ) {
  
    return function( target, propertyKey, descriptor) {
      const originalMethod = descriptor.value;
  
      descriptor.value = function () {
       emitter.on(name, data => originalMethod.apply(this, data) )
             };
  
      return descriptor;
    }
  
  }

  export function Event(target, key) {
 
    //let value = target[key];
   
       const getter = function() {
        return emitter;
    };
   
    const setter = function(newVal) {
      
    };
   
    /*
    Reflect.deleteProperty[key];
    Reflect.defineProperty(target, key, {
        get: getter,
        set: setter
    });
    */


    
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