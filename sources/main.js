var $ = require("jquery")
var cross = require('./cross-domain');
var readJson = require('./readFile');

// importacoes de pluguins
import css from '../styles/plugins/nanoscroller.css'
require('./plugins/jquery.nanoscroller.min.js');

import css from '../styles/main.css'
import css from '../styles/classBar.css'

document.body.onload = function() { readJson() }
$(".btn-get").click(function(){ cross() });

$(".toggle-option").click(function(){

    let sizeBar = $('.container-bar')[0].style.width

    if ( sizeBar == '50px' || sizeBar == '' ) {
        $('.container-bar').animate({width: '150px'});
    } else {
        $('.container-bar').animate({width: '50px'});
    }

    $('.col-logo').toggleClass('mini')

    $('.col-posi').fadeToggle('500')
    $('.col-name').fadeToggle('500')

});