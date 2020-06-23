// //Question 1

// var fname = prompt("Enter your first name")
// var lname = prompt("Enter your last name")

// var fullName = fname+" "+lname

// alert("HELLO... "+fullName)

// //Question 2

// var phoneModel = prompt("What is your favourite mobile phone model?")
// var len =  phoneModel.length

// document.write("My favourite phone is : "+phoneModel + "<br>")
// document.write("Length of string : "+len + "<br>" + "<br>" + "<br>")

// //Question 3

// var name = "Pakistani"

// var indexNum = name.indexOf("n")

// document.write("String : Pakistani" + "<br>")
// document.write("Index of n : "+indexNum + "<br>" + "<br>"+ "<br>")

// //Question 4

// var name = "Hello World"

// var indexNum = name.lastIndexOf("l")

// document.write("String : Hello World" + "<br>")
// document.write("Last index of  l : "+indexNum + "<br>" + "<br>"+ "<br>")

// //Question 5

// var name1 = "Pakistani"

// var char = name1.charAt(3)

// document.write("String : Pakistani" + "<br>")
// document.write("Character at index 3 : "+ char + "<br>" + "<br>"+ "<br>")

// //Question 7

// var cityName = "Hyderabad"

// var replacement = cityName.replace("Hyder","Islam")

// document.write("City : Hyderabad" + "<br>")
// document.write("After replacement : "+ replacement + "<br>" + "<br>"+ "<br>")

// //Question 8

// var message = "Ali and Sami are best friends. They play cricket and football together."
// var replacedMessage = message.replace(/and/g,"&")

// document.write(message + "<br>")
// document.write("After replacement : " +replacedMessage+ "<br>"+ "<br>")

// //Question 9

// var num = "472"

// var changeType = Number(num)

// document.write("Value : "+num +"<br>")
// document.write("Type : String"+"<br>")

// document.write("Value : "+changeType +"<br>")
// document.write("Type : Number"+"<br>"+"<br>"+"<br>")

// //Question 10

// var userInput = prompt("Give your input please so we change it into upper case!")

// var changingCase = userInput.toUpperCase()

// alert("User Input : "+userInput+" Upper Case : "+changingCase)


// //Question 11

// var userInput1 = prompt("Give your input please so we change it into title case!")

// var firstChar = userInput1.charAt(0)
// var otherChar = userInput1.slice(1)

// var changingCase1 = firstChar.toUpperCase() 
// var changingCase2 = otherChar.toLowerCase()

// var concatenation = changingCase1+changingCase2

// alert("User input : "+userInput1+"  Title case : "+concatenation)

// Question 12

// var number = 35.36

// var numToString= number.toString()

// var findDot = numToString.indexOf(".")

// var slicing = numToString.slice(0,findDot)+numToString.slice(findDot+1)
// alert("Number : "+number +" Result : "+slicing)

// //Question 13

// var userName = prompt("Enter username please!")

// for(var i = 0;i<=userName.length;i++){
//     if(userName.slice(i,i+1)==="!"||userName.slice(i,i+1)==="."||userName.slice(i,i+1)==="@"||userName.slice(i,i+1)===","){
//         alert("Please enter a valid username!")
//     }   
// }

// //Question 14

// var items = ["cake", "apple pie", "cookie", "chips","patties"]

// var userSearch = prompt("Welcome to ABC bakery! What do you want to order sir/ma'am?")

// var changeCase = userSearch.toLowerCase()

// for(var i = 0;i<items.length;i++){
//     if(items[i]===changeCase){
       
//         alert(userSearch+" is available at index "+i + " in our bakery")
        
//     }
//      if(items[i]!=changeCase)
//         {alert("We are Sorry! " + userSearch +" is not available in our bakery")}
        
// } 

// //Question 15

// var password = prompt("Enter password please..")

// for(var i = 0;i<=10;i++){
//     for(var j = 0;j<password.length;j++){
//       if (password.slice(0,0+1)==i){
//      alert("Password cannot begin with a number. Please enter a valid password")
//      break;
//     }
// }
// }
//   if(password.length<6){
//      alert("Password must be atleast 6 character long. Please enter a valid password")
     
//     } 

// //  Question 16

// document.write("Converting string into array" + "<br>")
// var university = "University of Karachi"

// var stringToArray = university.split("")
// for(var i = 0;i<stringToArray.length;i++){
//   document.write(stringToArray[i]+"<br>")
// }

// //Question 17

// var inputOfUser = prompt("Enter your input please!")

// var lastCharacter = inputOfUser.slice(inputOfUser.length-1)
// alert("User input : "+inputOfUser +"  Last character of input : "+lastCharacter)

// Question 18

// var text = "The quick brown fox jumps over the lazy dog"
// var lower = text.toLowerCase()

// var ind1 = lower.indexOf("the")
// var ind2 = lower.lastIndexOf("the")

// var arr = []
// arr.push(ind1,ind2)
// var arrLength = arr.length
// document.write("Text : The quick brown fox jumps over the lazy dog"+"<br>")
// document.write("There are "+arrLength+" occurrence(s) of word the")

// Chapter 26-30(1)
//   Question 1
// num = prompt("Enter any positive number")
// document.write("Number: " + num + "<br>" )
// var s1 = Math.round(num);
// document.write("Round off value: " + s1 + "<br>")
// var s2 = Math.floor(num);
// document.write("Floor value: " + s2 + "<br>")
// var s3 = Math.ceil(num);
// document.write("Ceil value: " + s3 + "<br>")

// //   Question 2
// num = prompt("Enter any negative number")
// document.write("Number: " + num + "<br>" )
// var s4 = Math.round(num);
// document.write("Round off value: " + s4 + "<br>")
// var s5 = Math.floor(num);
// document.write("Floor value: " + s5 + "<br>")
// var s6 = Math.ceil(num);
// document.write("Ceil value: " + s6 + "<br>")

// Question 3
// num1 = prompt("Enter any number")
// var s7 = Math.abs(num1)
// document.write("Absolute value of  " + num1 + "  is " + s7)


// // Question 4
// var dice = Math.random() * 6
// var r_dice = Math.ceil(dice)
// document.write("Random Dice value is: " + r_dice)

// Question 5
// var ra = Math.random() * 99
// var r_ra = Math.ceil(ra)
// document.write("Random number between 1 and 100: " + r_ra)

// // Question 6

// var ht = Math.random() * 2
// var f_ht = Math.floor(ht)
// if (f_ht === 0){
//   document.write("Random Coins value  HEADS")
// }
// else{
//   document.write("Random Coins value  TAILS")
// }

// Question 7
// var weight = prompt("Enter your weight in kilograms")
// var c_weight = Number(weight)
// document.write("The weight of user is  " + c_weight)

// Question 8
// var vlue = 8
// var name = prompt("Enter your name")
// var inp = prompt("Enter any number between 1-10")
// if(inp == vlue){
//   document.write("Congratulations! " + name + "Your guess is right") 
// }else{
//   document.write("Try again!   " + name )
// }

// CHAPTER 31-34

// Question 1

// var currentDate = new Date()
// document.write("Current date and time:"+"<br>")
// document.write(currentDate+"<br>"+"<br>")

// //Question 2
// var monthsName = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"]

//  var findDate = new Date()
//  var month = findDate.getMonth()
//  var gettingMonthName=monthsName.slice(month,month+1)
//  document.write("Current month: "+gettingMonthName+"<br>"+"<br>"+"<br>")

// //Question 3

// var daysName = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"]

// var findDate = new Date()
// var day = findDate.getDay()
// var gettingDayName=daysName.slice(day,day+1)
// document.write("Today is "+gettingDayName+"<br>"+"<br>"+"<br>")

// //Question 4

// var daysName = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"]

// var findDate = new Date()
// var day = findDate.getDay()
// var gettingDayName=daysName[day]

// if(gettingDayName===daysName[0]||gettingDayName===daysName[6]){
//   document.write("It's Fun day"+"<br>"+"<br>"+"<br>")
// }

// //Question 5

// var findDate = new Date()
// var date = findDate.getDate()

// if(date<="15"){
//   document.write("First fifteen days of the month")
// }else{
//   document.write("Last days of the month"+"<br>"+"<br>"+"<br>")

// }

// //Question 6

// var minutes;

// var findDate = new Date()
// var milliSeconds = findDate.getTime()

// minutes = milliSeconds/(1000*60*60)

// document.write("Current Date : "+findDate+"<br>")
// document.write("Elapsed milliseconds since January 1,1970 : "+milliSeconds+"<br>")
// document.write("Elapsed minutes since January 1,1970 : "+minutes+"<br>"+"<br>"+"<br>")



// //Question 7

// var findDate = new Date()
// var hours = findDate.getHours()

// if(hours<="12"){
//   document.write("Its AM"+"<br>"+"<br>"+"<br>")
// }else{
//   document.write("Its PM"+"<br>"+"<br>"+"<br>")

// }

// //Question 8

// var laterDate = new Date("31 Dec, 2020")

// document.write("Later Date : "+laterDate+"<br>"+"<br>"+"<br>")

// //Question 9

// var findDate = new Date()
// var pastDate = new Date("Apr 25, 2020")

// var milliSecondsOfTodayDate = findDate.getTime()
// var milliSecondsOfPastDate = pastDate.getTime()

// var difference = (milliSecondsOfTodayDate-milliSecondsOfPastDate)

// var getDays = difference/(1000*60*60*24)
// var roundOff = Math.floor(getDays)
// document.write(roundOff+" days have passed since 1st Ramadan 2020"+"<br>"+"<br>"+"<br>")


// //Question 10

// var findDate = new Date()
// var pastDate = new Date("Jan 1, 2020")

// var milliSecondsOfTodayDate = findDate.getTime()
// var milliSecondsOfPastDate = pastDate.getTime()

// var difference = (milliSecondsOfTodayDate-milliSecondsOfPastDate)

// var getSeconds = difference/(1000*60)
// var roundOff = Math.floor(getSeconds)
// document.write("On reference date "+findDate+" "+roundOff+" seconds had passed since beginning of 2020"+"<br>"+"<br>"+"<br>")

// //Question 11

// var currentDate = new Date()
// var gettingHours = currentDate.getHours()

// var reset = gettingHours-1

// var convert = currentDate.toString()
// var indNum = convert.indexOf(gettingHours)

// var slic = convert.slice(0,16)+reset+convert.slice(16+2)
// document.write("current date : "+ currentDate+"<br>")
// document.write("1 hour ago ,it was  "+ slic+"<br>"+"<br>"+"<br>")


// //Question 12

// var currentDate = new Date()
// var gettingYears = currentDate.getFullYear()

// var reset = gettingYears-100

// var conv = currentDate.toString()
// var indNum = conv.indexOf(gettingYears)

// var yearsBack = conv.slice(0,indNum)+reset+conv.slice(indNum+4)
// document.write("current date : "+ currentDate+"<br>")
// document.write("100 years back ,it was  "+ yearsBack+"<br>"+"<br>"+"<br>")


// //Question 13

// var age = prompt("Enter your age please!")

// var currentDate = new Date()
// var gettingYears = currentDate.getFullYear()

// var calculation = gettingYears-age
// alert("Your age is "+age+",  Your birth year is "+calculation)

// //Question 14

// var customerName = "ABC customer"
// var monthName = "June"
// var numOfUnits = 410
// var chargesPerUnit = 16
// var surCharges = 350

// var netPayable =  numOfUnits*chargesPerUnit.toFixed(2)
// var grossPayable = netPayable+surCharges.toFixed(2)

// document.write("K-ELECTRIC BILL"+"<br>")
// document.write("Customer Name : "+customerName+"<br>")
// document.write("Month : "+monthName+"<br>")
// document.write("Number Of Units : "+numOfUnits+"<br>")
// document.write("Charges Per Unit : "+chargesPerUnit+"<br>"+"<br>")

// document.write("Net Amount Payable (within due date) : "+netPayable+"<br>")
// document.write("Late payment surcharge : "+surCharges+"<br>")
// document.write("Gross Amount Payable (after due date) : "+grossPayable+"<br>")

// Chapter 35-38

// Question 1

// function cur_date (){
//   document.write(new Date())
// }
// cur_date()

// Question 2

// function gret(first_name,last_name){
//    alert("Hello!" + first_name+last_name)
  

// }
// gret("AQsa","Taufiq")

// // Question 3
// function add(a,b){
//   var c = a + b
//   return c;
// }
// var d = add(5,10)
// alert(d)

// // Question 4
// function calc(n1,n2,opr){
//   if (opr === "+"){
//     return n1 + n2
//   }else if(opr === "-"){
//     return n1 - n2
//   }else if(opr === "*"){
//     return n1 * n2
//   }else if(opr === "/"){
//     return n1 / n2
//   }else{
//     return "Incorrect Operator!"
//   }
// }
// var res1 = calc(5,10,"+")
// var res2 = calc(5,10,"-")
// var res3 = calc(5,10,"*")
// var res4 = calc(5,10,"/")

// console.log(res1)
// console.log(res2)
// console.log(res3)
// console.log(res4)

// Question 5
// function square(a){
//   alert(a*a)

// }
// square(150)

// Question 6

// function factorial (){
//  var fac = prompt("Enter any number") 
// for (var i = fac -1; i >= 1 ; i--){
//  fac = fac * i
// }
// console.log(fac)
// }
// factorial()

// // Question 7
// function count(){
//  var start = prompt("Enter starting num")
//  var end = prompt("Enter ending num")
//  for(var i = start ; i <= end ; i++)
 
//  console.log(i)
// }
// count()

// // Question 8
// function nestesd(){
//     function hypo (){
//         var p = prompt("Enter perpenicular")
//         var b = prompt("Enter base")
//         return  (p*p) + (b*b)

//     }
//     var c = hypo() 
//     console.log(c * c)
    
// }
// nestesd()

// // Question 9

// function area_triangle(width, height){
//     console.log(width * height)
// }
// area_triangle(5,4)

// or
// function area_triangle(){
//     var width = prompt("Enter width")
//     var height = prompt("Enter height")
//     console.log(width * height)
// }

// area_triangle()


// Question 11

// function exampleString (a="bilal"){

 
  
//   var firstChar = a.charAt(0)
//   var otherChar = a.slice(1)

//   var changingCase1 = firstChar.toUpperCase() 
//   var changingCase2 = otherChar.toLowerCase()

//   var concatenation = changingCase1+changingCase2

//    alert("Example String : "+a+"  EXPECTED OUTPUT : "+concatenation)
// }
// exampleString();

// //Question 12

// function findLongestWord(b = "Web Development Tutorial"){

//      var abc = b.split(" ")
//     var findLen1 = abc[0].length
//     var findLen2 = abc[1].length
//     var findLen3 = abc[2].length

//     if(findLen1>findLen2&&findLen1>findLen3){
//         alert("EXAMPLE STRING : "+b + "  EXPECTED OUTPUT : "+abc[0])
//     }
//     else if(findLen2>findLen1&&findLen2>findLen3){
//         alert("EXAMPLE STRING : "+b + "  EXPECTED OUTPUT : "+abc[1])
//     }else if(findLen3>findLen2&&findLen3>findLen1){
//         alert("EXAMPLE STRING : "+b + "  EXPECTED OUTPUT : "+abc[2])
//     }

//  }

// findLongestWord()

// Question 13
// var arr2 = [];
// function countSpecifiedLetter(x, y){
//     var arr2 = [];
//     for(var i = 0;i<x.length;i++){
//        if(x.slice(i,i+2)===y){
//         arr2.push(y)}
           
//     }
//     alert(arr2.length)
// }

// countSpecifiedLetter("aqsa" , "a")



// Question 14
// var r;
// function  calcCircumference(radius){
//     return r = (2 * radius * 3.142)
// }

// calcCircumference(5)

// function area(){
//     console.log(3.142 * (r * r))
// }
// area(3)













