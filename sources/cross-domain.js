var $ = require("jquery")
var FileSave = require('file-saver')

module.exports = function () {
    buscaDados()
};

function buscaDados() {

    const tabela = []
    const jogos = []

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
                let nomeImg = nomeTime.toLowerCase().replace(' ', '')+'.svg'
                tabela.push({"clube": nomeTime, "posicao": posicaoTime, "imagem": nomeImg})
            }
            // Monta ARRAY referente aos confrontos da rodada
            let confrontos = $(page).find('.lista-de-jogos-conteudo .lista-de-jogos-item')
            for ( let i = 0 ; i < confrontos.length ; i++ ) {
                let informacoes = $(confrontos[i]).find('.placar-jogo-informacoes')[0].textContent
                let timeCasa = $(confrontos[i]).find('.placar-jogo-equipes-nome')[0].textContent
                let timeFora = $(confrontos[i]).find('.placar-jogo-equipes-nome')[1].textContent
                jogos.push({"dataAndLocal": informacoes, "timeCasa": timeCasa, "timeFora": timeFora})
            }
            
            writeFile(tabela, jogos)
        },
        error: function() {
            console.log('Fudeu deu erro!');
        },
    });
}

function writeFile(classificacao, confrontos) {
    arrayClassificacao = 'classificacao = '+ JSON.stringify(classificacao)
    arrayConfrontos = 'jogos = '+ JSON.stringify(confrontos)

    var blob = new Blob([arrayClassificacao], {type: "text/plain;charset=utf-8"})
    FileSave.saveAs(blob, 'classificacao.js')

    var blob = new Blob([arrayConfrontos], {type: "text/plain;charset=utf-8"})
    FileSave.saveAs(blob, 'confrontos.js')
}