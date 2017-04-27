require("babel-polyfill");
require("images/favicon.ico");
// Expose Raven
window.Raven = require('raven-js');



// Load CSS via Webpack to be able to require Bootstrap, Font Awesome, etc. from npm
require('styles/styles.scss');

// JavaScript main file
require('../scripts/containers');
