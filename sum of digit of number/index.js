var num = parseInt(prompt("Enter the number : "))
var sum = 0
while(num!=0){
    let r = num%10
    sum = sum + r
    num = Math.floor(num/10)
}
document.write("Sum of the digit = ", sum)