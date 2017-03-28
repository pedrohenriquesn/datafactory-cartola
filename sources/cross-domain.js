var $ = require("jquery")

var tabela = []

module.exports = function (name, element) {
    $(".btn-get").click(function(){ buscaDados() });
};

function buscaDados() {
    $.ajax({
        type: "GET",
        url: "http://globoesporte.globo.com/futebol/brasileirao-serie-a/",
        success: function (data) {
            let page = document.createElement('DIV')
            page.innerHTML = data
            
            // Monta ARRAY referente a criacao da tabela
            let times = $(page).find('.tabela-times .tabela-body-linha')
            for ( let i = 0 ; i < times.length ; i++ ) { 
                let time = times[i]
                let nomeTime = $(time).find('.tabela-times-time-nome')[0].textContent
                let posicaoTime = $(time).find('.tabela-times-posicao')[0].textContent
                tabela.push({"clube": nomeTime, "posicao": posicaoTime})
            }

            // Monta ARRAY referente aos confrontos da rodada
            let confrontos = $(page).find('.lista-de-jogos-conteudo .lista-de-jogos-item')
        },
        error: function() { 
            console.log('Fudeu deu erro!');
        },
    });
}