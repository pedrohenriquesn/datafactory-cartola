var $ = require("jquery")
var cross = require('./cross-domain');
var readJson = require('./readFile');
var toggleBars = require('./sidebars');

// importacoes de pluguins
import css from '../styles/plugins/nanoscroller.css'
require('./plugins/jquery.nanoscroller.min.js');

import css from '../styles/main.css'
import css from '../styles/classBar.css'

document.body.onload = function() { readJson() }
$(".btn-get").click(function(){ cross() });
$(".toggle-option").click(function(){ toggleBars() });