// these are needed so webpack can bundle in styles
require('./style.scss');

import $ from 'jquery';


$(document).ready(() => {
  const boilerPlateTemplate = `<h1>Hello World!</h1>`;


  $('body').append(boilerPlateTemplate);
});
