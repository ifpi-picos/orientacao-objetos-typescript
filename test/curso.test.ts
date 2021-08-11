import { Curso } from '../src/curso'
import { Disciplina } from '../src/disciplina'

describe('teste curso', () => {
  const NOME_CURSO_ADS = 'ADS'
  const NOME_DISCIPLINA_WEB = 'Web'
  const NOME_DISCIPLINA_ES = 'Enenharia de Software'
  it('deve criar um curso com o nome ADS', () => {
    const curso = new Curso(NOME_CURSO_ADS)
    expect(curso.getNome()).toBe(NOME_CURSO_ADS)
  })

  it('deve adicionar uma disciplina ao curso', () => {
    const curso = new Curso(NOME_CURSO_ADS)
    const web = new Disciplina(NOME_DISCIPLINA_WEB)
    curso.adicionaDisciplina(web)
    expect(curso.getDisciplinas().length).toBe(1)
    expect(curso.getDisciplinas()[0].getNome()).toBe(NOME_DISCIPLINA_WEB)
  })

  it('deve adicionar duas disciplina ao curso', () => {
    const curso = new Curso(NOME_CURSO_ADS)
    const web = new Disciplina(NOME_DISCIPLINA_WEB)
    const es = new Disciplina(NOME_DISCIPLINA_ES)
    curso.adicionaDisciplina(web)
    curso.adicionaDisciplina(es)
    expect(curso.getDisciplinas().length).toBe(2)
  })
})
