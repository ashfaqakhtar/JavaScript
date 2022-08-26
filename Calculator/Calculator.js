var a = Number(prompt("Enter the First Number"))
var b = Number(prompt("Enter the Second Number"))
var ch = prompt("Press + for Addition \nPress - for substraction\nPress * for Multiplication\npress / for Division\nPress % for remainder\nPress ** for Power\nEnter your choice ")
switch (ch) {
    case '+':
        document.write(`${a} + ${b} = ${a + b}`)
        break
    case '-':
        document.write(`${a} - ${b} = ${a - b}`)
        break
    case '*':
        document.write(`${a} * ${b} = ${a * b}`)
        break
    case '/':
        document.write(`${a} / ${b} = ${a / b}`)
        break
    case '%':
        document.write(`${a} % ${b} = ${a % b}`)
        break
    case '**':
        document.write(`${a} * ${b} = ${a * b}`)
        break
    default:
        document.write("Invailid Choice")

}
