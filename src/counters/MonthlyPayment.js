import {goodNum, toNum} from '../service/ServiceFunctions.js'

export function MonthlyPayment(){
    let K = toNum(document.getElementById('creditAmount').textContent) // сумма кредита
    const monthlyPayment = document.getElementById('monthlyPayment') // месячный платеж
    let x = Math.floor(K * kMonthlyPayment())
    return monthlyPayment.textContent = goodNum(x)
}
 function kMonthlyPayment() {
    let P = document.getElementById('select').value/12/100 // процентная ставка
    let M = document.getElementById('creditTerm').value*12 // срок кредита в месяцах
    let A = P * Math.pow((1+P),M)/(Math.pow((1+P),M)-1)// коэффициент аннуитета
    return A
}