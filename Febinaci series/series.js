var a = 0
var b = 1
 var sum = 0

 var num = parseInt(prompt("Enter the last range of the fbonacci series"))
 document.write(a, " ", b, " ")
 sum = a + b 
var count = 0
 while(sum <=num){
    document.write(sum, " ")
    a = b 
    b = sum
    sum = a +b
    count++
 }
 document.write("<br> Loop Execute = ", count, "Times")