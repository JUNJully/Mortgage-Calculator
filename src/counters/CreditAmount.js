import {goodNum} from '../service/ServiceFunctions.js'
function creditAmountCounter () {
    const valueBuild = document.getElementById('valueBuilding').value
    const firstPay = document.getElementById('firstPayment').value
    const creditAmount = document.getElementById('creditAmount')// сумма кредита

    let count = valueBuild - firstPay
    return  count <= 0 ? creditAmount.textContent = 0 : creditAmount.textContent = goodNum(count)
}

export default creditAmountCounter