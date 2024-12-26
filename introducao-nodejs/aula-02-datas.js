const { DateTime, Interval } = require(`luxon`)

const agora = DateTime.now()
console.log(agora.month)

console.log(new Date().toLocaleString())
console.log(new Date().getMonth())

const dataDoAniversario = DateTime.fromFormat(`05/10/2004`, `dd/MM/yyyy`)
console.log(dataDoAniversario)

const idade = Interval.fromDateTimes(dataDoAniversario, agora).length(`year`)
console.log(Math.floor(idade))