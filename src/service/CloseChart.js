function closeChart() {
    const chartOutput = document.querySelector('.chartOutput')// блок скрытой информации над графиком
    chartOutput.hidden = true

    const table = document.querySelector('table')
    table.remove()

    const calculator = document.querySelector('.calculator')
    calculator.hidden = false
}

export default closeChart