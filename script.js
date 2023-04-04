const numbers = document.querySelectorAll(".number")

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})


let prevNumber =" "
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) =>{
    if (currentNumber === '0'){
        currentNumber = number
    } else {
        currentNumber += number
    }
   
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator)=>{
    operator.addEventListener("click", (event) =>{
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) =>{
    if (calculationOperator === ''){
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener("click",()=>{
    calculate()
    updateScreen(currentNumber)
})

const calculate = () =>{
    let result = ''
    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = prevNumber - currentNumber
            break
        case "*":
            result = prevNumber * currentNumber
            break
        case "/":
            result = prevNumber / currentNumber
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = '0'
}

const clearBtn = document.querySelector(".all-clear")

clearBtn.addEventListener("click",()=>{
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () =>{
    prevNumber =" "
    calculationOperator = ''
    currentNumber = '0'
}

const decimal = document.querySelector(".decimal")

decimal.addEventListener('click',(event)=>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) =>{
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}

const deleteBtn = document.querySelector(".delete")

deleteBtn.addEventListener('click',()=>{
deleteNumber()
updateScreen(currentNumber)
})

const deleteNumber = () =>{
currentNumber = currentNumber.slice(0, -1)
if (currentNumber === ''){
currentNumber = '0'
}
}

const plusMinus = document.querySelector(".plus-minus")

plusMinus.addEventListener('click',()=>{
toggleSign()
updateScreen(currentNumber)
})

const toggleSign = () =>{
currentNumber = parseFloat(currentNumber) * -1
}

const percentage = document.querySelector(".percentage")

percentage.addEventListener('click',()=>{
    calculatePercentage()
    updateScreen(currentNumber)
})

const calculatePercentage = () =>{
currentNumber = parseFloat(currentNumber) / 100
}

const squareBtn = document.querySelector(".square")

squareBtn.addEventListener('click',()=>{
   calculateSquare()
   updateScreen(currentNumber)
})

const calculateSquare = () =>{
    currentNumber = parseFloat(currentNumber) ** 2
}

const sqrtBtn = document.querySelector(".sqrt")

sqrtBtn.addEventListener('click',()=>{
    calculateSqrt()
    updateScreen(currentNumber)
})

const calculateSqrt = () =>{
    currentNumber = Math.sqrt(parseFloat(currentNumber))
}