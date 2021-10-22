import {InputRangeValue,InputSelectValue} from "./InputData"
import './Hypothec.css'
import getChart from "./counters/GetChart"
import closeChart from "./service/CloseChart";

const inputRange = document.querySelector('[name="inputRange"]')// управление всеми input type='range'
inputRange.addEventListener('input',InputRangeValue)

const inputSelect = document.getElementById('select') // управление input type='select'
inputSelect.addEventListener('input',InputSelectValue)

const chartOutput = document.querySelector('.chartOutput')// блок скрытой информации над графиком
chartOutput.hidden = true

const chartButton = document.querySelector('.chart') // кнопка "График платежей"
chartButton.addEventListener('click',getChart)

const closeButton = document.querySelector('.close')// кнопка "закрыть" график - вернуть основной калькулятор
closeButton.addEventListener('click',closeChart)
