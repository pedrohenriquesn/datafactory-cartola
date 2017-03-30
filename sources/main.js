var $ = require("jquery")
var cross = require('./cross-domain');
var readJson = require('./readFile');

import css from '../styles/main.css'

document.body.onload = function() { readJson() }
$(".btn-get").click(function(){ cross() });

$(".container-bar").click(function(){
    // $(this).toggleClass("bar-min", 1000);
    $(this).animate({width: '50px'});
});




