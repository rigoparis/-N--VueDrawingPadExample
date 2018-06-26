import Vue from 'nativescript-vue';

import HelloWorld from './components/HelloWorld';


import './styles.scss';

Vue.registerElement(
  "DrawingPad",
  () => require("nativescript-drawingpad").DrawingPad //eslint-disable-line
);

// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

new Vue({

  render: h => h(HelloWorld),


}).$start();
