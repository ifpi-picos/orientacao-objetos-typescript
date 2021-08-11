export class Disciplina {
  private nome: string

  constructor (nome: string) {
    this.nome = nome
  }

  getNome () {
    return this.nome
  }
}
