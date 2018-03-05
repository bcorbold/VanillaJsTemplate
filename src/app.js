// these are needed so webpack can bundle in styles
require('./style.scss');

import $ from 'jquery';

$(document).ready(() => {
  const boilerPlateTemplate = `<div class="welcome-wrapper">
                                  <h1>Hello World!</h1>
                                  <p>Welcome to the Vanilla JS Template!</p>
                               </div>`;

  $('body').append(boilerPlateTemplate);
});
