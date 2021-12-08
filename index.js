(function(){
  'use strict';

  window.addEventListener('message', function(event) {
    if (event.origin !== 'https://sasaplus1-prototype.github.io') {
      return;
    }

    let data = {};

    try {
      data = JSON.parse(event.data);
    } catch(e) {
      console.error(e);
    }

    switch (data.type) {
      case 'load': {
        console.log('iframe load');
        break;
      }
      case 'DOMContentLoaded': {
        console.log('iframe DOMContentLoaded');
        break;
      }
      case 'pageshow': {
        console.log('iframe pageshow');
        break;
      }
    }
  }, false);

  var iframe = document.createElement('iframe');

  iframe.addEventListener('load', function() {
    window.top.postMessage(JSON.stringify({
      type: 'load',
      value: 'hello'
    }), 'https://sasaplus1-prototype.github.io');
  }, false);

  iframe.srcdoc = '<!DOCTYPE html>';

  /*
  iframe.contentDocument.addEventListener('DOMContentLoaded', function() {
    window.top.postMessage(JSON.stringify({
      type: 'DOMContentLoaded',
      value: 'hello'
    }), 'https://sasaplus1-prototype.github.io');
  }, false);

  iframe.contentWindow.addEventListener('pageshow', function() {
    window.top.postMessage(JSON.stringify({
      type: 'pageshow',
      value: 'hello'
    }), 'https://sasaplus1-prototype.github.io');
  }, false);
  */

  // iframe.contentWindow.addEventListener('message', function(event) {
  //   if (event.origin !== 'https://sasaplus1-prototype.github.io') {
  //     return;
  //   }

  //   let data = {};

  //   try {
  //     data = JSON.parse(event.data);
  //   } catch(e) {
  //     console.error(e);
  //   }

  //   event.source.postMessage(JSON.stringify(data), event.origin);
  // }, false);

  document.body.appendChild(iframe);

}());
