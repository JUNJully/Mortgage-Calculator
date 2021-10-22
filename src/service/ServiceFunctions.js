// преобразование из строки в число
export function toNum(a){
    return +a.split(' ').join('')
}

//стилизация прогресс - линии в input-range
export function gradientRange(obj) {
    let grad = (obj.max - obj.min) / 100
    let n = Math.floor(obj.value/grad)
    return obj.style.background = `linear-gradient(to right,#a1dffb ${n}%,rgba(20, 12, 9, 0.15) ${n}%)`
}

// добавление пробелов в числа для лучшей читабельности
export function goodNum(num) {
  return num.toString().split('').reverse().map((item,i)=> i % 3 == 0 && i!==0 ? item+' ':item).reverse().join('');
}


