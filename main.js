"use strict";

var alunos = [{
  nome: 'Leonardo',
  nota: 8
}, {
  nome: 'Pedro',
  nota: 10
}, {
  nome: 'Jean',
  nota: 4
}, {
  nome: 'Marcos',
  nota: 5
}, {
  nome: 'Maria',
  nota: 6
}, {
  nome: 'Rayane',
  nota: 7
}];
function alunosAprovados(arrayDeAlunos) {
  return arrayDeAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var alunosAprovadosArray = alunosAprovados(alunos);
console.log('Alunos aprovados:', alunosAprovadosArray);