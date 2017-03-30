var $ = require("jquery")

module.exports = function () {
    readClassificacaoJson()
};

function readClassificacaoJson() {
    $.ajax({
        type: "GET",
        url: "../dataSources/classificacao.js",
        success: function (data) {
            obj = JSON.parse(data.replace('classificacao = ', ''))
            for ( let i = 0 ; i < obj.length ; i++ ) {
                let imagem = 'imagens/escudos/'+obj[i].imagem
                
                // $('.container-bar').append(
                $('.nano-content').append(
                                    '<div class="row-bar">'+
                                        '<div class="col-posi" style="display:none">'+obj[i].posicao+'</div>'+
                                        '<div class="col-name" style="display:none">'+obj[i].clube+'</div>'+
                                        '<div class="col-logo mini"><img src="'+imagem+'" class="img-responsive"></div>'+
                                    '</div>')
            }
        },
        error: function() {
            console.log('Fudeu deu erro!');
        },
    });

}

