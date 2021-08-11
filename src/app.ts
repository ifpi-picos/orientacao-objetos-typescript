import { Curso } from './curso'
import { Disciplina } from './disciplina'

const web = new Disciplina('Programação para Web')
const es = new Disciplina('Engenharia de Software I')
const ads = new Curso('ADS')
ads.adicionaDisciplina(web)
ads.adicionaDisciplina(es)

console.log('Curso: ', ads.getNome())
console.log('Disciplinas: ', ads.getDisciplinas())
