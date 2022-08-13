var num1 = +prompt( ' Brinchi sonni kiriting')
var num2 = +prompt( ' Ikinchi sonni kiriting')
var num3 = +prompt( ' Uchinchi sonni kiriting')

if (num1 > num2 && num1 < num3 ){
    alert( num1 + ' Orta Son')
}else if (num1 < num2 && num1 > num3){
    
}else if(num2 > num1 && num2 < num3){
    alert(num2 + ' Orta Son')
}else if(num2 < num1 && num2 > num3){

}else if(num3 > num2 && num3 < num1){
    alert( num3 + ' Orta Son')
}else if(num3 < num2 && num3 > num1){
    
}else{
    alert(' Siz notogri kiritingiz')
}