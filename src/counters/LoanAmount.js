import {MonthlyPayment} from "./MonthlyPayment.js"
import {toNum,goodNum} from "../service/ServiceFunctions";


function LoanAmount(){
    const M = toNum(document.getElementById('Term').textContent)*12 // срок кредитования в месяцах
    const loanAmount = document.getElementById('loanAmount') //сумма займа
    let x = M * toNum(MonthlyPayment())
    return loanAmount.textContent = goodNum(x)
}

export default LoanAmount