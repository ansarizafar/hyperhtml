"use strict";
//import { dataStore as Store } from "./store";
import { getToken, decodeToken } from "./auth";
import Settings from '../settings'

/*ready: function() {
      if(!window.fetch) {
      var e = document.createElement('script');
      e.src = '../../bower_components/fetch/fetch.js';
      document.head.appendChild(e);
      } 
    },*/
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText.substr(6));
  }
  return response;
}
function parseJSON(response) {
  return response.json();
}

function remoteCall(param) {
  let httpHeaders = new Headers();
  httpHeaders.append("Content-Type", "application/json");
  httpHeaders.append("Accept", "application/json");
  try {
    decodeToken();
    httpHeaders.append("Authorization", "Bearer " + getToken());
  } catch (e) {}

  return fetch(Settings.serverUrl + "api", {
    method: "POST",
    headers: httpHeaders,
    body: JSON.stringify(param)
  })
    .then(handleErrors)
    .then(parseJSON);
}

export function Server(constructor) {
  return class extends constructor {
    constructor(args) {
      super(args);
      this.rpc = remoteCall;
    }
  };
}
