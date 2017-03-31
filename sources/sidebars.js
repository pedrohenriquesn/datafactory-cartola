var $ = require("jquery")

module.exports = function () {
    toggleBarClassificacao()
};

function toggleBarClassificacao() {
    let sizeBar = $('.container-bar')[0].style.width
    if ( sizeBar == '50px' || sizeBar == '' ) {
        $('.container-bar').animate({width: '200px'});
        $('.container-bar').toggleClass('bar-max')
        $('.icon-sidebar').toggle()
    } else {
        $('.container-bar').animate({width: '50px'});
        $('.container-bar').toggleClass('bar-max')
        $('.icon-sidebar').toggle()
    }
    $('.col-logo').toggleClass('mini')
    $('.col-posi').fadeToggle('500')
    $('.col-name').fadeToggle('500')
}
