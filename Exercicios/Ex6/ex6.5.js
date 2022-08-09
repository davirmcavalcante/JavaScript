/*
 1) Crie uma função que recebe uma data por parâmetro e retorna a data na formatação "DD/MM/AAAA". Exemplo: 03/07/2021; Não utilize a date-fns.
*/

const present = new Date()

const formatTimeUnit = unit => String(unit).length === 1 ? `0${unit}` : unit

const formatDate = date => {
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    return `${formatTimeUnit(day)}/${formatTimeUnit(month)}/${year}`
}
console.log(formatDate(present))

/*
2) Crie uma função que recebe uma data por parâmetro e retorna o horário e a data na formatação: 
"03:07 - domingo, 7 de junho de 2020"; Não utilize a date-fns.
*/

const weekDays = [
    'domingo', 
    'segunda-feira', 
    'terça-feira', 
    'quarta-feira', 
    'quinta-feira', 
    'sexta-feira', 
    'sábado'
    ]
    const monthNames = [
    'janeiro', 
    'fevereiro', 
    'março', 
    'abril', 
    'maio', 
    'junho', 
    'julho', 
    'agosto', 
    'setembro', 
    'outubro', 
    'novembro', 
    'dezembro'
]

const formatDateInfo = date => {
    const hours = formatTimeUnit(date.getHours())
    const minutes = formatTimeUnit(date.getMinutes())
    const weekDay = weekDays[date.getDay()]
    const monthDay = date.getDate()
    const month = monthNames[date.getMonth()]
    const year  = date.getFullYear()
    
    return `${hours}:${minutes} - ${weekDay}, ${monthDay} de ${month} de ${year}`
}
console.log(formatDateInfo(present))