"use strict";
// // Como podemos melhorar o esse código usando TS?
var Profissao;
(function (Profissao) {
    Profissao["Padeiro"] = "Padeiro";
    Profissao["Atriz"] = "Atriz";
})(Profissao || (Profissao = {}));
const pessoa1 = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz
};
const pessoa2 = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissao.Padeiro
};
const pessoa3 = {
    nome: 'Laura',
    idade: 32,
    profissao: Profissao.Atriz
};
const pessoa4 = {
    nome: 'Carlos',
    idade: 19,
    profissao: Profissao.Padeiro
};
