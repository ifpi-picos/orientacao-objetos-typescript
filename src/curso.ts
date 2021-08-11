import { Disciplina } from './disciplina'

export class Curso {
  private nome: string
  private disciplinas: Disciplina[]

  constructor (nome: string) {
    this.nome = nome
    this.disciplinas = []
  }

  getNome () {
    return this.nome
  }

  adicionaDisciplina (disciplina: Disciplina) {
    this.disciplinas.push(disciplina)
  }

  getDisciplinas () {
    return this.disciplinas
  }

  removeDisciplina () {}
}
