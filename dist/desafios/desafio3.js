"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let saldoTotal = 0;
campoSaldo ? (campoSaldo.innerHTML = saldoTotal.toString()) : '';
function somarAoSaldo(soma) {
    if (campoSaldo)
        campoSaldo.innerHTML = (saldoTotal += soma).toString();
}
function limparSaldo() {
    campoSaldo ? (campoSaldo.innerHTML = (saldoTotal = 0).toString()) : '';
}
function limparCampoSoma() {
    if (soma)
        soma.value = '';
}
botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.addEventListener('click', function () {
    if (soma) {
        somarAoSaldo(Number(soma.value));
        limparCampoSoma();
    }
});
botaoLimpar === null || botaoLimpar === void 0 ? void 0 : botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
// /**
//     <h4>Valor a ser adicionado: <input id="soma"> </h4>
//     <button id="atualizar-saldo">Atualizar saldo</button>
//     <button id="limpar-saldo">Limpar seu saldo</button>
//     <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
//  */
