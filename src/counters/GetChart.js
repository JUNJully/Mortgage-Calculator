
import {goodNum, toNum} from '../service/ServiceFunctions.js'
import {chartData} from "../service/chartData"

// создание графика платежей в виде таблицы
function getChart() {

    const chartOutput = document.querySelector('.chartOutput')// блок скрытой информации
    chartOutput.hidden = false

    const calculator = document.querySelector('.calculator')// блок видимой информации
    calculator.hidden = true

    const namesOfMonth = {
        0:'Январь', 1:'Февраль', 2:'Март', 3:'Апрель', 4:'Май', 5:'Июнь', 6:'Июль', 7:'Август', 8:'Сентябрь', 9:'Октябрь', 10:'Ноябрь', 11:'Декабрь'
    }

    let month = document.getElementById('Term').textContent * 12 // количество месяцев
    let monthPay = document.getElementById('monthlyPayment').textContent // ежемесячный платеж
    let P = document.getElementById('select').value/100/12// процентная ставка
    let credit = toNum(document.getElementById('loanAmount').textContent)// сумма займа
    let date = new Date()
    let d = new Date()

    let table = '<table><tr><th>месяц</th><th>платеж</th><th>проценты</th><th>основной долг</th><th>остаток долга</th></tr>' +
        '<tr class="year"><td>'+date.getFullYear()+'</td></tr>'
    for (let i = 0; i < month; i++)
    {
        date = new Date(date.getFullYear(),date.getMonth()+1)
        credit -= toNum(monthPay)
        let persent = credit * P * 30 / 365
        if (date.getFullYear() > d.getFullYear()) {
            table += '<tr class="year"><td>'+date.getFullYear()+'</td></tr>'
            d = new Date(date)
        }
        table += '<tr><td>' +
            namesOfMonth[date.getMonth()]+'</td>' +
           '<td>'+ monthPay + '</td>'+
            '<td>'+ goodNum(Math.floor(persent)) + '</td>'+
            '<td>'+ goodNum(Math.floor(toNum(monthPay)-persent))+ '</td>'+
            '<td>'+ goodNum(credit) + '</td>'+
            '</tr>'

    }
    table += '</table>'
    let node = document.createElement('table')
    node.innerHTML = table
    chartOutput.after(node)
    chartData()
}

export default getChart

