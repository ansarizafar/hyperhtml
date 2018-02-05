'use strict';

import jwtDecode from 'jwt-decode'

export const Roles = {
  public: 0,
  admin: 1,
  manager: 2, // Regional Manager
  courier: 3,
  supplier: 7,
  customer: 8
}

export function getToken() {
    return window.localStorage.token;
}


export function setToken(token) {
    window.localStorage.token = token;
}

export function removeToken() {
    window.localStorage.clear();
}

export function decodeToken() {
try {
    return jwtDecode(getToken())    
} catch(e) {
throw e
}
}

export function Auth(constructor) {
    return class extends constructor {
      constructor(args) {
        super(args);
        this.Auth.roles = Roles
        this.Auth.getToken = getToken;
        this.Auth.setToken = setToken;
        this.Auth.removeToken = removeToken;
        this.Auth.decodeToken = decodeToken;
      }
    };
  }

  