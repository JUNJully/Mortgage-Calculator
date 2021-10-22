import creditAmountCounter from "./counters/CreditAmount"
import LoanAmount from "./counters/LoanAmount"
import {MonthlyPayment} from "./counters/MonthlyPayment.js"
import {goodNum, gradientRange} from './service/ServiceFunctions.js'
import Income from './counters/Income'

 export function InputRangeValue(event){
    let value = document.getElementById(event.target.name)
    value.textContent = goodNum(event.target.value)
     gradientRange(event.target) // функция стилизации прогресс-линии
     creditAmountCounter()
     LoanAmount()
     MonthlyPayment()
     Income()
}
 export function InputSelectValue(event) {
     const persentRate = document.getElementById('interestRate') // процентная ставка на главной странице
     const chartRate = document.getElementById('chartInterestRate') // процентная ставка на графике платежей
     persentRate.textContent = event.target.value
     chartRate.textContent = event.target.value
     LoanAmount()
     MonthlyPayment()
     Income()
 }
