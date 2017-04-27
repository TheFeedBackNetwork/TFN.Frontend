require("babel-polyfill");
require("images/favicon.ico");
// Load CSS via Webpack to be able to require Bootstrap, Font Awesome, etc. from npm
// Expose Raven
window.Raven = require('raven-js');
require('styles/styles.scss');
require('styles/bootstrap-slider.min.css');

// JavaScript main file
require('../scripts/containers');
