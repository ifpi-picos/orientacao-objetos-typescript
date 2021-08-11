import { Disciplina } from '../src/disciplina'

describe('teste disciplina', () => {
  it('deve criar uma disciplina com o nome web', () => {
    const NOME_DISCIPLINA = 'Web'
    const disciplina = new Disciplina(NOME_DISCIPLINA)
    expect(disciplina.getNome()).toBe(NOME_DISCIPLINA)
  })
})
