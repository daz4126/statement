import {html, svg, render} from 'html';

function Statement({state,element,template}={}) {
  render(element,template(state));
  const handler = {
    set(obj,key,value) {
      if (typeof obj[key] === 'object' && !obj[key]._isProxy) {
        obj[key] = new Proxy(obj[key],handler);
      }
      obj[key] = typeof value === "function" ? value(state) : value;
      render(element,template(state));
      return Reflect.set(...arguments);
    }    
  };
  const statement = new Proxy(state,handler);
  Object.entries(statement).forEach(([key,value]) => {
    if(typeof value === "object") {
      statement[key] = new Proxy(statement[key],handler);
    }
  });
  return statement;
}

export {html, svg, Statement}