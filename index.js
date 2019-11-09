// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
var name_up = name.toUpperCase();
console.log(name_up);


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
function titleCase(str) {
 var splitStr = str.toLowerCase().split(' ');
 for (var i = 0; i < splitStr.length; i++) {
   if (splitStr.length[i] < splitStr.length) {
     splitStr[i].charAt(0).toUpperCase();     
   }
      str = splitStr.join(' '); 
 }
return str;
}

titleCase(sentence);


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
console.log(money.substring(1));
