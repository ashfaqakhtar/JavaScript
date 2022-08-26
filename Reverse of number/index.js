var num = parseInt(prompt("Enter Any Number: "))
var  rev = 0
while(num!=0){
    r = num%10
    rev = rev*10+r
    num=Math.floor(num/10)
}
document.write("Reverse of the number = ", rev)
