import {toNum,goodNum} from './ServiceFunctions.js'
export function chartData() {
    //процентная ставка
    const chartInterestRate = document.getElementById('chartInterestRate')
    const interestRate = document.getElementById('interestRate')
    chartInterestRate.textContent = interestRate.textContent

    //сумма кредита
    const chartCreditAmount = document.getElementById('chartCreditAmount')
    const creditAmount = document.getElementById('creditAmount')
    chartCreditAmount.textContent = creditAmount.textContent

    //срок платежа
    const chartTerm = document.getElementById('chartCreditTerm')
    const creditTerm = document.getElementById('Term')
    chartTerm.textContent = creditTerm.textContent

    //переплата
    const chartOverPay = document.getElementById('chartOverPay')
    const loanAmount = document.getElementById('loanAmount')
    chartOverPay.textContent = goodNum(toNum(loanAmount.textContent) - toNum(creditAmount.textContent))
}