const primo = document.getElementById('primo')
const parimpar = document.getElementById('parimpar')
const fatorial = document.getElementById('fatorial')
const quadrado = document.getElementById('quadrado')
const bhaskara = document.getElementById('bhaskara')
const areacirculo = document.getElementById('areacirculo')
const hipotenusa = document.getElementById('hipotenusa')
const vmedia = document.getElementById('vmedia')

const menu = document.getElementById('menu')
const titulo = document.getElementById('titulo')

const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')
const resultButt = document.getElementById('resultButt')
const result = document.getElementById('result')
const resultText = document.getElementById('resultText')

titulo.onclick = () => {
    primo.style.display = 'none'
    parimpar.style.display = 'none'
    fatorial.style.display = 'none'
    quadrado.style.display = 'none'
    areacirculo.style.display = 'none'
    bhaskara.style.display = 'none'
    hipotenusa.style.display = 'none'
    vmedia.style.display = 'none'
    result.style.display = 'none'
    resultText.innerText = ''

    input1.placeholder = ''
    input2.placeholder = ''
    input3.placeholder = ''

    menu.style.display = 'block'
}

/**
 * @param {HTMLElement} tohide
 * @param {HTMLElement} toshow
 */
function visibilitar(tohide, toshow) {
    tohide.style.display = 'none'
    toshow.style.display = 'block'

    toshow.appendChild(resultButt)
    resultButt.style.display = 'block'
    toshow.appendChild(result)
    result.style.display = 'block'
    resultText.innerText = ''
}

function primar() {
    visibilitar(menu, primo)
    primo.appendChild(input1)
    input1.style.display = 'block'

    resultButt.onclick = () => {
        let val = Number(input1.value)
        if (val) {
            for (let i = 2; i < val; i++) {
                if (val % i == 0) return resultText.innerText = 'Não é primo!'
            }
            resultText.innerText = 'É primo!'
        } else {
            resultText.innerText = 'Valor inválido!'
        }
        result.style
    }
}

function parImparar() {
    visibilitar(menu, parimpar)
    parimpar.appendChild(input1)
    input1.style.display = 'block'

    resultButt.onclick = () => {
        let val = Number(input1.value)
        if (val) {
            if (val % 2 == 0) resultText.innerText = 'É par!'
            else resultText.innerText = 'É impar!'
        } else {
            resultText.innerText = 'Valor inválido!'
        }
    }
}

function fatorialar() {
    visibilitar(menu, fatorial)
    fatorial.appendChild(input1)
    input1.style.display = 'block'

    resultButt.onclick = () => {
        let val = Number(input1.value)
        if (val) {
            resultText.innerText = factorial(val)
        } else {
            resultText.innerText = 'Valor inválido!'
        }
    }

    /**
     * @param {number} num
     * @returns {number}
     */
    function factorial(num) {
        if (num == 0) return 1
        else return num * factorial(num - 1)
    }
}

function quadradar() {
    visibilitar(menu, quadrado)
    quadrado.appendChild(input1)
    input1.style.display = 'inline-block'
    quadrado.appendChild(input2)
    input2.style.display = 'inline-block'

    resultButt.onclick = () => {
        let val = Number(input1.value), val2 = Number(input2.value)
        resultText.innerText = ''
        resultText.style.position = 'static'

        if (val && val2) {
            for (let i = val; i <= val2; i++) {
                resultText.innerText += ` ${i * i} | `
            }
        } else {
            resultText.innerText = 'Valor inválido!'
        }
    }
}

function bhaskarar() {
    visibilitar(menu, bhaskara)
    bhaskara.appendChild(input1)
    input1.style.display = 'inline-block'
    input1.placeholder = 'a:'
    bhaskara.appendChild(input2)
    input2.style.display = 'inline-block'
    input2.placeholder = 'b:'
    bhaskara.appendChild(input3)
    input3.style.display = 'inline-block'
    input3.placeholder = 'c:'

    resultButt.onclick = () => {
        let a = Number(input1.value)
        let b = Number(input2.value)
        let c = Number(input3.value)

        let delta = (b * b) - (4 * a * c)
        if (a) {
            if (delta >= 0) {
                let x1 = (-b + Math.sqrt(delta)) / (a * 2)
                let x2 = (-b - Math.sqrt(delta)) / (a * 2)

                resultText.innerText = `x¹ = ${x1} | x² = ${x2}`
            } else {
                resultText.innerText = `Delta é negativo, então a equação não possui raizes reais`
            }
        }
        else {
            resultText.innerText = 'Valor inválido!'
        }
    }
}

function areaCircular() {
    visibilitar(menu, areacirculo)
    areacirculo.appendChild(input1)
    input1.style.display = 'block'
    input1.placeholder = 'raio:'

    resultButt.onclick = () => {
        let raio = Number(input1.value)
        if (raio > 0) {
            let area = Math.PI * (raio * raio)

            resultText.innerText = `A: ${area}`
        } else {
            resultText.innerText = `O raio deve ser positivo`
        }
    }
}
function hipotenusar() {
    visibilitar(menu, hipotenusa)
    hipotenusa.appendChild(input1)
    input1.style.display = 'inline-block'
    input1.placeholder = 'cateto a:'
    hipotenusa.appendChild(input2)
    input2.style.display = 'inline-block'
    input2.placeholder = 'cateto b:'

    resultButt.onclick = () => {
        let b = Number(input1.value)
        let c = Number(input2.value)

        if (b && c) {
            resultText.innerText = `a = ${Math.sqrt((b * b) + (c * c))}`
        }
        else {
            resultText.innerText = 'Valor inválido!'
        }
    }
}
function vmediar() {
    visibilitar(menu, vmedia)
    vmedia.appendChild(input1)
    input1.style.display = 'inline-block'
    input1.placeholder = 'distância: '
    vmedia.appendChild(input2)
    input2.style.display = 'inline-block'
    input2.placeholder = 'tempo: '

    resultButt.onclick = () => {
        if (input1.value && input2.value) {
            resultText.innerText = `Vm = ${Number(input1.value) / Number(input2.value)}`
        }
    }

}
document.addEventListener('keydown', e => {
    if (e.key == 'Enter') resultButt.click()
})