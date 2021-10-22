import {MonthlyPayment} from "./MonthlyPayment.js"
import {goodNum,toNum} from "../service/ServiceFunctions";

function Income() {
   const requiredIncome = document.getElementById('requiaredIncome')
   let x = Math.floor(toNum(MonthlyPayment())*0.4 + toNum(MonthlyPayment()))
   return requiredIncome.textContent = goodNum(x)
}

export default Income