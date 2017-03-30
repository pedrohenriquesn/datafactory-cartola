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
            }
        },
        error: function() {
            console.log('Fudeu deu erro!');
        },
    });

}