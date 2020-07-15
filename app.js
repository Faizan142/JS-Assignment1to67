// Name:Muhammad Faizan Khan
//Roll No: WM7588
//Chapter 1
//1
alert('Hello... I can run JS through web browser\'s console')
//2
window.alert("Error!Please enter a valid password.");
//3
alert("Welcome to JS land... \n Happy Coding!");
//4
alert("Welcome to JS land... \n Happy Coding!");
alert('Happy Coding!')

//5
alert('Hello... I can run JS through web browser\'s console')

//6
alert("Hello World in q6.html");
//7
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <script>
//          alert("Inside Head");
//     </script>
// </head>
// <script>
//      alert("Before your pages html");
// </script>
// <body>
//     <script>
//         alert("Inside your pages html");
//    </script>
// </body>
// <script>
//     alert("After your pages html");
// </script>
// </html>


//Chapter 2
   //Q1
   var username ="fnkhan142";
   alert(username);
   //Q2
   var myName = "Muhammad Faizan Khan";
   alert(myName);
   //Q3
   var message = "Hello World"
   alert(message);

   //4
   var name = 'Muhammad Faizan Khan'
   var age = '22 years old'
   var course = 'Web and Mobile App Development'
   alert(name, age, course)
   alert(age)
   alert(course)
    //5
    var pattern = "PIZZA\nPIZZ\nPIZ\nPI\nP";
    alert(pattern);
    //6
    var email = "My email address is example" + "@example.com";
    alert(email);

     //7
     var book = "I am trying to learn from the Book A smarter \n way to learn JavaScript";
     alert(book);
    
     //8
     var dispBrowser = "Yah! I can write HTML content through JavaScript";
     document.write(dispBrowser);

     //9
     var dispPattern= "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
     alert(dispPattern);

     //Chapter 3
       
    //1
       var age = 15;
       alert("I am " + age + " " + "years old")

      //2
      var visitor= 14;
      alert("You have visited the site" + " " + visitor + " " + " times");

       //3
       var birthYear = 1998;
       document.write('My birth year is ' + ''  + birthYear + '<br> Data type of my declared variable is number' );

       //4
       var vistorsName = "Faizan";
       var productTitle = "T-shirt";
       var quantity = 5;
       document.write(vistorsName + " " + "ordered" + " " + quantity + " " + "T-shirt" + "(s) " + " " + "on XYZ Clothing store");

       //Chapter 4
       // 1
    var a1,b1,c1;
        // 2
    var $_ab, _ba, _321, aca_xya, aba_123;
        // 3
    document.write('<h1>Rules for naming JS variables</h1><br><p>Variable names can only contain numbers, $ and _ . For example $my_1stVariable<br>Variables must begin with a letter, $ or _ . For example $name, _name or name<br>Variable names are case sensitive<br>Variable names should not be JS</p>')

    //Chapter 5
     //1
     var num1= 3;
     var num2 = 5;
     var num3 = num1 + num2;
     document.write("Sum of " + " " + num1 + " " + "and"  +  " " + num2 + " "+ " is " + " "+ num3);
 //2
 var num1= 3;
     var num2 = 5;
     var num3 = num1 - num2;
     document.write("Substract of " + " " + num1 + " " + "and"  +  " " + num2 + " "+ " is " + " "+ num3);
     var num1= 3;
     var num2 = 5;
     var num3 = num1 * num2;
     document.write("Multiple of " + " " + num1 + " " + "and"  +  " " + num2 + " "+ " is " + " "+ num3);


     var num1= 20;
     var num2 = 5;
     var num3 = num1 / num2;
     document.write("Division of " + " " + num1 + " " + "and"  +  " " + num2 + " "+ " is " + " "+ num3);

     var num1= 21;
     var num2 = 5;
     var num3 = num1 % num2;
     document.write("Mod of " + " " + num1 + " " + "and"  +  " " + num2 + " "+ " is " + " "+ num3);

     //3
     var num1;
     document.write("Value after variable declaration is:" + num1);
     var num1 = 5;
     document.write('<br>Initial Value : ' + num1);
     num1++;
     document.write('<br> Value after increment is: ' + num1);
     var num1 = num1 + 7;
     document.write('<br> Value after addition is: ' + num1);
     num1--;
     document.write('<br> Value after decrement is: ' + num1);
     var num1 = num1%3;
     document.write('<br> Remainder is: ' + num1);

     //4
     var oneMovie = 600;
     var numberOfTickets = 5;
     var totalCost = (oneMovie* numberOfTickets);
     document.write("Total cost to buy" + " " +  numberOfTickets + " " + "tickets  to a movie is" + " " + totalCost + "PKR")  

//5
document.write('Table of 4<br>')
for (let i = 1; i <= 10; i++) {
document.write('4x' + i + '=' + i * 4 + '<br>')
}

 //6
 var fehrenheit = 77;
 var convertedCelsius = (fehrenheit - 32) * 5 / 9;
 document.write(convertedCelsius + '°C is ' + fehrenheit + '°F<br>')

 var celsius = 21.11111111111111;
 var convertedFehrenheit = (celsius * 9 / 5) + 32;
 document.write(convertedFehrenheit + '°F is ' + celsius + '°C')

  //Q7
  var priceOfItem1 = 650;
  var priceOfItem2 = 100;
  var item1Q = 3;
  var item2Q = 7;
  var shippingCharges = 100;
  var totalCost = (priceOfItem1* item1Q) + (priceOfItem2*item2Q) +shippingCharges;
  document.write('<h1>Shopping Cart</h1><br>');
  document.write('Price of item 1 is '+ priceOfItem1 + '<br> Quantity of item 1 is ' + item1Q + '<br>Price of item 2 is'+ priceOfItem2 + '<br> Quantity of item 2 is ' + item2Q + '<br> Shipping Charges ' + shippingCharges + "<br><br>Total Cost of your order is " + totalCost);

  //8
  var totalMarks =  980;
  var marksObtained = 804;
  var totalPercent=(marksObtained/totalMarks*100);
  document.write('<h1>Marks Sheet</h1> <br>');
  document.write('Total Marks: ' + totalMarks + '<br>Marks Obtained: ' + marksObtained + '<br>Percentage: ' +totalPercent + '%'); 

 //9
 var singleCalc = (10 * 104.80) + (25 * 28);
 document.write('Total Currency in PKR:' + singleCalc);

 //10
 var exp = (5 * 10 /2);
 document.write('Mathematics Expressions : ' +exp);

  //11
  var currentYear = 2016;
  var birthYear = 1992;
  var age= 2016-1992;
  document.write('Current Year:' + currentYear + '<br>Birth Year:' + birthYear + '<br>Your age is: ' + age );

   //12
   var radiusOfCircle = 20;
   var circumOfCircle = (2* 3.142 * radiusOfCircle);
   var areaOfCircle = (3.142 * radiusOfCircle*radiusOfCircle);
   document.write('Radius of a circle:' + radiusOfCircle + '<br>The circumference is: ' + circumOfCircle + '<br>The area is: ' + areaOfCircle);

    //Q13
    var favouriteSnack = 'chocolate chip'
    var currentAge = 15;
    var maxAge =  65;
    var amountOfSnacks = 3;
    var calculator = (maxAge - currentAge) * 3;
    document.write('<h1>The Lifetime Supply Calculator</h1><br>');
    document.write('<br>Favourite Snack:' +favouriteSnack);
    document.write('<br>Current age:' + currentAge);
    document.write('<br>Estimated Maximum age:' + maxAge);
    document.write('<br>Amount of snacks per day:' + amountOfSnacks);
    document.write('<br>You will need ' + calculator + ' chocolate chip to last you until the ripe old age of  ' + maxAge);

//Chapter 6-9
 //1
 var a= 10;
 document.write('Result:<br>');
 document.write('The value of a is:' + a  + '<br>');
 document.write('.................................<br><br>');
 document.write('The value of  ++a is: ' + ++a + '<br>');
 document.write('Now the value of  a is: ' + a + '<br><br>');
 document.write('The value of  a++ is: ' + a++ + '<br>');
 document.write('Now the value of  a is: ' + a + '<br><br>');
 document.write('The value of  --a is: ' + --a + '<br>');
 document.write('Now the value of  a is: ' + a + '<br><br>');
 document.write('The value of  a-- is: ' + a-- + '<br>');
 document.write('Now the value of  a is: ' + a + '<br><br>');

  //2
  var a = 2;
  var b = 1;

  document.write('a: ' + a + '<br>')
  document.write('b: ' + b + '<br>')
  var result = --a - --b + ++b + b--;
  document.write('result: ' + result + '<br>')
  document.write('--a value is 1<br>')
  document.write('--a - --b value is 1<br>')
  document.write('--a - --b + ++b value is 2<br>')
  document.write('--a - --b + ++b + b-- value is 3<br>')

  //3
  var name =prompt('What is your name?');
  document.write('Your name is:' + name);

        //5
        var numberForTable = prompt('Enter number for table')

        if (Number(numberForTable)) {
            for (let i = 1; i <= 10; i++) {
                document.write(numberForTable + 'x' + i + '=' + numberForTable * i + '<br>');
        }
    } else {
        for (let i = 1; i <= 10; i++) {
            document.write(5 + 'x' + i + '=' + 5 * i + '<br>');
        }
    }

//6
var subject1 = 'English';
var subject2 = 'Urdu';
var subject3 = 'Math';
var tM = 100;
var tMSub = 100 * 3;
var obtainedMarks1 = prompt('Enter Obtained Mask');
var obtainedMarks2 = prompt('Enter Obtained Mask');
var obtainedMarks3 = prompt('Enter Obtained Mask');
var tOM = Number(obtainedMarks1) + Number(obtainedMarks2) + Number(obtainedMarks3);
var percent1 = Math.trunc((obtainedMarks1 / tM) * 100);
var percent2 = Math.trunc((obtainedMarks2 / tM) * 100);
var percent3 = Math.trunc((obtainedMarks3 / tM) * 100);  
var totalPercent = (percent1 + percent2 + percent3) / 3;

document.write('<table>')
document.write('<tr><th>Subjects</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>')
document.write('<tr><td>' + subject1 + '</td><td>' + tM + '</td><td>' + obtainedMarks1 + '</td><td>' + percent1 + '%</td></tr>')
document.write('<tr><td>' + subject2 + '</td><td>' + tM + '</td><td>' + obtainedMarks2 + '</td><td>' + percent2 + '%</td></tr>')
document.write('<tr><td>' + subject3 + '</td><td>' + tM + '</td><td>' + obtainedMarks3 + '</td><td>' + percent3 + '%</td></tr>')
document.write('<tr><th colspan="2">' + tMSub + '</th><th>' + tOM + '</th><th>' + totalPercent + '%</th></tr>')
document.write('</table>')


//Chapter 9-11
//1
var city = prompt('Enter city name');
if(city == 'Karachi'){
    document.write('Welcome to the city of lights');
}
  //2
  var gender = prompt('Enter your gender');
  if(gender == 'male'){
      document.write('Good Morning Sir');
  }
 else if(gender == 'female'){
      document.write(' Good Morning Ma’am');
  }
 //3
 var signalColor = prompt('Enter signal color');
 if(signalColor == 'Red'){
     document.write('Must Stop');
 }
 else if(signalColor == 'Yellow'){
     document.write('Ready to move');
 }
 else if(signalColor == 'Green'){
     document.write('Move now');
 }
 //4
 var fuelCar = prompt('Enter fuel in litres : ');
 if(fuelCar < 0.25){
     document.write('Please refill the fuel in your car');
 }

// 5
// a.given condition
// for variable a is true
// b.given condition
// for variable b is true
// c.condition 2 is true, condition 4 is true
// d.The cost equals
// e.True
// f.car is smaller than cat

 //6
 var subject1 = prompt('Enter 1st subject marks')
 var subject2 = prompt('Enter 2nd subject marks')
 var subject3 = prompt('Enter 3rd subject marks')
  var tM = 300;
  var tOM = Number(subject1) + Number(subject2) + Number(subject3);
  var percent = Math.trunc((tOM / tM) * 100);

  document.write('<h1>Marks Sheet</h1><br>')
  document.write('Total Marks: ' + tM + '<br>')
  document.write('Marks obtained: ' + tOM + '<br>')
  document.write('Percentage: ' + percent + '%<br>')

  if (percent >= 80) {
      document.write('Grade: A-one<br>')
      document.write('Remarks: Excellent')
  } else if (percent >= 70) {
      document.write('Grade: A<br>')
      document.write('Remarks: Good')
  } else if (percent >= 60) {
      document.write('Grade: B<br>')
      document.write('Remarks: You need to improve')
  } else if (percent < 60) {
      document.write('Grade: Fail<br>')
      document.write('Remarks: Sorry')
  }
   //7
   var secretNumber = 5;
   var guess = prompt('Guess the number')

   if (secretNumber === Number(guess)) {
       document.write('Bingo! Correct answer')
   } else if (++secretNumber === Number((guess))) {
       document.write('Close enough to the correct answer')
   }

    //8
    var number = prompt('Enter a number');
    if(Number(number) % 3 == 0){
        document.write('number is divisible by 3');
    }

     //9
     var number = prompt('Enter a number');
     if(Number(number) % 2 == 0){
        document.write('even');
    }
    else{
        document.write('odd');
    }
   //10
   var Temp = prompt('Enter temperature')

   if (Number(Temp) > 40) {
       document.write('It is too hot outside')
   } else if (Number(Temp) > 30) {
       document.write('The Weather today is Normal')
   } else if (Number(Temp) > 20) {
       document.write('Today’s Weather is cool')
   } else if (Number(Temp) > 10) {
       document.write('OMG! Today’s weather is so Cool')
   }

 //11
 var firstNum = prompt('Enter First Number')
 var secondNum = prompt('Enter Second Number')
 var operators = prompt('Enter operator')

 if (operators =='+') {
 var calc = firstNum + secondNum;
 document.write('Addition: ' + calc)
 } else if (operators == '-') {
 var calc = firstNum - secondNum;
 document.write('Subtraction: ' + calc)
 } else if (operators == '*') {
 var calc = firstNum * secondNum;
 document.write('Multilpy: ' + calc)
 } else if (operators == '/') {
 var calc = firstNum / secondNum;
 document.write('Divide: ' + calc)
 } else if (operators == '%') {
 var calc = firstNum % secondNum;
 document.write('Remainder: ' + calc)
 }
//Chapter 12-13
  //1
  var checkCh = prompt('Enter character')
  if (checkCh.charCodeAt(0) >= 65 && checkCh.charCodeAt(0) <= 90) {
      document.write('UpperCase Letter')
  } else if (checkCh.charCodeAt(0) >= 97 || checkCh.charCodeAt(0) <= 122) {
      document.write('LowerCase Letter')
}

//2
var firstNum = prompt('Enter 1st number')
var secondNum = prompt('Enter 2nd number')

if (Number(firstNum) > Number(secondNum)) {
    document.write('First Number is greater than second number')
} else if (Number(firstNum) < Number(secondNum)) {
    document.write('Second Number is greater than first number')
} else if (Number(firstNum) == Number(secondNum)) {
    document.write('First Number is equal to second number')
}

  //3
  var num1 = prompt('Enter a number')

  if (Number(num1) == 0) {
      document.write('Zero')
  } else if (Number(num1) > 0) {
      document.write('Positive')
  } else if (Number(num1) < 0) {
      document.write('Negative')
  }

    //4
    var character = prompt('Enter a character')

    if (character.charCodeAt(0) == 65 || character.charCodeAt(0) == 69 || character.charCodeAt(0) == 73 || character.charCodeAt(0) == 79 || character.charCodeAt(0) == 85 || character.charCodeAt(0) == 97 || character.charCodeAt(0) == 101 || character.charCodeAt(0) == 105 || character.charCodeAt(0) == 111 || character.charCodeAt(0) == 117) {
        document.write('True')
    } else {
        document.write('False')
    }
 //5
 var correctPass ='faizan';
 var askPass = prompt('Enter a Password');
 if(correctPass == askPass){
     document.write('Correct! The password you entered matches the original password');
 }
 else if(askPass === ''){
     document.write('Please enter your password');
 }
 else {
     document.write('Incorrect password');
 }
//6
    var hour = 13;
    if (hour < 18) {
        greeting = "Good day";
    }else{
        greeting = "Good evening";
}

//7
        var timing = prompt('Enter Time(24 Hours Format)')

        if (timing == '0100') {
            document.write('1 AM')
        } else if (timing == '0200') {
            document.write('2 AM')
        } else if (timing == '0300') {
            document.write('3 AM')
        } else if (timing == '0400') {
            document.write('4 AM')
        } else if (timing == '0500') {
            document.write('5 AM')
        } else if (timing == '0600') {
            document.write('6 AM')
        } else if (timing == '0700') {
            document.write('7 AM')
        } else if (timing == '0800') {
            document.write('8 AM')
        } else if (timing == '0900') {
            document.write('9 AM')
        } else if (timing == '1000') {
            document.write('10 AM')
        } else if (timing == '1100') {
            document.write('11 AM')
        } else if (timing == '1200') {
            document.write('12 PM')
        } else if (timing == '1300') {
            document.write('1 PM')
        } else if (timing == '1400') {
            document.write('2 PM')
        } else if (timing == '1500') {
            document.write('3 PM')
        } else if (timing == '1600') {
            document.write('4 PM')
        } else if (timing == '1700') {
            document.write('5 PM')
        } else if (timing == '1800') {
            document.write('6 PM')
        } else if (timing == '1900') {
            document.write('7 PM')
        } else if (timing == '2000') {
            document.write('8 PM')
        } else if (timing == '2100') {
            document.write('9 PM')
        } else if (timing == '2200') {
            document.write('10 PM')
        } else if (timing == '2300') {
            document.write('11 PM')
        } else if (timing == '0000') {
            document.write('12 AM')
        }
//Chapter 14-16
  //1
  var e = [];
  //2
  var f = new Array(); 
  //3
  var g = ["a","b" ,"c"];
  //4
  var h =[11,22,12,22];
  //5
  var i = [true,true,false];
  //6
  var j = ['faizan',true ,12]

  // 7
  var k = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];

  document.write('<h1>Qualification</h1><h1>')
  for (let i = 0; i < k.length; i++) {
      document.write((i + 1) + ') ' + k[i] + '<br>')
  }
  document.write('</h1>')

     //8
     var nameOfStudent = ['Michael', 'John', 'Tony'];
     var marksObtained = [320, 230, 480];
     totalM = 500;

     document.write('<h3>')
     for (let i = 0; i < nameOfStudent.length; i++) {
         document.write('Score of ' + nameOfStudent[i] + ' is ' + marksObtained[i] + '. Percentage: ' + Math.trunc((marksObtained[i] / totalM) * 100) + '%<br>')

     }
     document.write('</h3>')

   //9
   var nameOfColor = [];
   document.write(nameOfColor + '<br>')
   
   var userOfColor = prompt('Enter color Name')
   nameOfColor.unshift(userOfColor)
   document.write(nameOfColor + '<br>')

   var userOfColor = prompt('Enter color Name')
   nameOfColor.push(userOfColor)
   document.write(nameOfColor + '<br>')

   var userOfColor = prompt('Enter color Name')
   nameOfColor.unshift(userOfColor)
   document.write(nameOfColor + '<br>')

   var userOfColor = prompt('Enter color Name')
   nameOfColor.unshift(userOfColor)
   document.write(nameOfColor + '<br>')

   nameOfColor.shift()
   document.write(nameOfColor + '<br>')

   nameOfColor.pop()
   document.write(nameOfColor + '<br>')

   var userOfColor = prompt('Enter Color Name')
   var indexNumber = prompt('Enter index Number')
   nameOfColor.splice(Number(indexNumber), 0, userOfColor)
   document.write(nameOfColor + '<br>')

   var deleteFromStart = prompt('Start delete color')
   var deleteFromEnd = prompt('End delete color')
   nameOfColor.splice(Number(deleteFromStart), Number(deleteFromEnd))
   document.write(nameOfColor + '<br>')

      //10
      var a = [320, 230, 480, 120]
      document.write('Scores Of Student:' + a)
      a.sort()    
      document.write('<br>Ordered Scores Of Student:' + a)

  //11
  var citiesOfPak = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
  var selectedCitiesOfPak = citiesOfPak.slice(2, 4);
  document.write('Cities list:<br>' + citiesOfPak)
  document.write('<br><br>Selected cities list:<br>' + selectedCitiesOfPak)

   //12
   var array1 = ['This', 'is', 'my', 'cat'];
   document.write('<h1>Array:<br>' + array1 + '</h1>')
   document.write('<h1>String:<br>' + array1.join(' ') + '</h1>')

 //13
 var devicesOfComp = ['keyboard', 'mouse', 'printer', 'monitor'];

 document.write('<h3>Devies:<br>' +devicesOfComp + '<br>')
 for (let i = 0; i < 4; i++) {
     document.write('<br>Out:<br>' + devicesOfComp.shift())
 }
 document.write('</h3>')

 //14
 var devicesOfComp = ['keyboard', 'mouse', 'printer', 'monitor'];

 document.write('<h3>Devies:<br>' + devicesOfComp + '<br>')
 devicesOfComp.reverse();
 for (let i = 0; i < 4; i++) {
     document.write('<br>Out:<br>' + devicesOfComp.shift());
 }
document.write('</h3>')

 //15
 var manufacturersOfPhone = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];

 document.write('<select>')
 for (let i = 0; i < manufacturersOfPhone.length; i++) {
     document.write('<option>' + manufacturersOfPhone[i] + '</option>')
 }
 document.write('</select>')

//Chapters 17-20
  //1
  var array1 = [[],[]]
  //2
  var array2 = [
[0, 1, 2, 3],
[1, 0, 1, 2],
[2, 1, 0, 1]
  ]
document.write('<h1>')
for (let i = 0; i < 4; i++) {
  for (let j = 0; j <= 3; j++) {
      document.write(array2[i][j] + ' ')
  }
document.write('<br>')
  }
document.write('</h1>')

  //3
  document.write('<h1>')
  for (let i = 0; i < 10; i++) {
      document.write((i + 1) + '<br>')
  }
  document.write('</h1>')

  //4
  var tableForM = prompt('Enter a number to show its multiplication table')
  var tableLengthForM = prompt('Enter length multiplication table')

  document.write('Multiplication table of ' + tableForM + '<br>')
  document.write('Length ' + tableLengthForM + '<br><br>')
  for (let i = 1; i <= tableLengthForM; i++) {
      document.write(tableForM + ' x ' + i + ' = ' + tableForM * i + '<br>')
  }

   //5
   var fruitsInArray = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
   document.write('<h1>')
   for (let i = 0; i < fruitsInArray.length; i++) {
       document.write(fruitsInArray[i] + '<br>')
   }
   document.write('</h1>')

   document.write('<h1>')
   for (let i = 0; i < fruitsInArray.length; i++) {
       document.write('Element at index ' + i + ' is ' + fruitsInArray[i] + '<br>')   
   }
   document.write('</h1>')

     //6
     document.write('<h1>Counting: ')
     counter = 15
 for (let i = 0; i < counter; i++) {
     
     document.write((i + 1) + ', ')
 }
 
 document.write('</h1>')

 document.write('<h1>Reverse Counting: ')
 let i;
 counter = 10
 for (i = counter; i > 0; i--) {
     if (i == 0) {
     break
 }
 document.write(i + ', ')
 }
 document.write('</h1>')

 document.write('<h1>Even: ')
 counter = 22
 for (let i = 0; i < counter - 1; i++) {
     if (i % 2 == 0) {
         document.write(i + ', ')
 }
}
 document.write('</h1>')

 document.write('<h1>Odd: ')
 counter = 21
 for (let i = 0; i < counter - 1; i++) {
     if (i % 2 != 0) {
         document.write(i + ', ')
 }
}
 document.write('</h1>')

 document.write('<h1>Series: ')
 counter = 10
 for (let i = 0; i <= counter; i++) {
     if (i != 0) {
     document.write((i*2) + 'k, ')
     }
 }
 document.write('</h1>')

  //7
  var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
  var searchByUser = prompt('Welcome to ABC Bakery. What do you want to order sir/ma\'am')

  if (A.indexOf(searchByUser) == -1) {
      document.write('We are sorry.' + searchByUser + ' is <b>not available</b> in our bakery')
  } else {
      document.write(searchByUser + ' is <b>available</b> at index ' + A.indexOf(searchByUser) + ' in our bakery')
}

     //8
     var A = [24, 53, 78, 91, 12];
     var largestNumber = 0;
 for (let i = 0; i < A.length; i++) {
     if (A[i] > largestNumber) {
         largestNumber = A[i]
 }
}
 document.write('<h1>Array items:' + A + '<br>')
 document.write('The largest number is ' + largestNumber + '</h1>')
 
    //9
    var A = [24, 53, 78, 91, 12];
    var smallestNumber = A[0];
for (let i = 0; i < A.length; i++) {
    if (A[i] < smallestNumber) {
        smallestNumber = A[i]
    }
}
document.write('<h1>Array items:' + A + '<br>')
document.write('The smallest number is ' + smallestNumber + '</h1>')

//10
    
    for (let i = 1; i <= 100; i++) {
        if (i % 5 == 0)
            document.write(i + ', ')
        }

//Chapter 21-25
//1
var firstNameIs= prompt("Enter Your First Name");
var lastNameIs = prompt("Enter Your Last Name");
var fullName = firstNameIs + " " + lastNameIs;
document.write(fullName);

//2
var mobileM = prompt("Enter favorite mobile phone model");
var lengthOfMobileMl = mobileM.length;
document.write("My Favourite phone  is : " + mobileM + "</br> ")
document.write("Length of string: " + lengthOfMobileMl);

//3
var wordForFind= "Pakistani";
var findCharacterWord = wordForFind.indexOf("n");
document.write("String : " + wordForFind + "<br>");
document.write("Index of 'n': " + findCharacterWord)

//4
var wordForFind = "Hello World";
var findCharacterL = wordForFind.lastIndexOf("l");
document.write("String: " + wordForFind + "<br>");
document.write("Index of 'l': " + findCharacterL);

//5
var wordPK = "Pakistan";
var findIndexAT = wordPK.charAt(3);
document.write("String: " + wordPK + "<br>");
document.write("Character at Index '3': " + findIndexAT);

//6
var yourFName = prompt("Enter First Name");
var yourLName = prompt("Enter Last Name");
var fullName = yourFName.concat(" ", yourLName);
document.write(fullName)

//7
      var cityWantR = "Hyderabad"
      var cityWantToReplace = cityWantR.slice(0, 5).replace("Hyder", "Islam");
      var CityEndP = cityWantR.slice(5)
      document.write("City: " + cityWantR + "<br>");
      document.write("After Replacement: " + cityWantToReplace + CityEndP);

//8
var messageFR = "Ali and Sami are best friends. They play cricket and football together.";
var RPM = messageFR.replace(/and/g, "&");
document.write(RPM);

      //9
var numberForMeasure = "472";
document.write("Value: " + numberForMeasure + "<br>");
document.write("Type: " + typeof(numberForMeasure) + "<br>")
document.write("Value: " + numberForMeasure + "<br>");
document.write("Type: " + typeof(parseInt(numberForMeasure)))


//10
var thingsFU = "peanuts"
var toUpperCase = thingsFU.toUpperCase();
document.write("User Input: " + thingsFU + "<br>");
document.write("Upper case: " + toUpperCase)

//11
var thingsFU = "javascript";
var capitalFirst = thingsFU.slice(0, 1).toUpperCase();
var otherLetter = thingsFU.slice(1);
document.write("User Input : " +thingsFU + " <br>")
document.write("Title Case: "  + capitalFirst + otherLetter)


//12
var num = 35.36;
var removeDotting = num.toString().replace(".", "");
document.write("Number: " + num + "<br>")
document.write("Result: " + removeDotting);


    // 13
    var userNameFor = prompt("Enter username");

    for (let i = 0; i < userNameFor.length; i++) {
        if (userNameFor.charCodeAt(i) == 33 || userNameFor.charCodeAt(i) == 44 || userNameFor.charCodeAt(i) == 46 || userNameFor.charCodeAt(i) == 64) {
            alert("Please enter a valid username");
        }
    }
    
    //14
    var itemsForFind = ["cake", "apple pie", "cookie", "chips", "patties"];
    var checkFind = prompt("Enter item to check");
    var checkSmallLetter = checkFind.toLowerCase();
    
    if (itemsForFind.indexOf(checkSmallLetter) != -1) {
        document.write(checkSmallLetter + " is " + "<b>available</b>" + " at index " + itemsForFind.indexOf(checkSmallLetter) + " in our bakery");
    } else {
        document.write("We are sorry. " + checkSmallLetter + " is " + "<b>not available</b> " + " in our bakery");
    }

            //15
var passwordForCheck = prompt("Enter a password");

if (passwordForCheck.charCodeAt(0) >= 48 && passwordForCheck.charCodeAt(0) <= 57) {
    document.write("Password not start number <br>")
}

if (passwordForCheck.length < 6) {
    document.write("It must at least 6 characters long")
}

//16
  var universityForRow = "University of Karachi";
  var arrayForSplit = universityForRow.split('')

for (let i = 0; i < arrayForSplit.length; i++) {
document.write(arrayForSplit[i] + "<br>")
}
// 17
var countryForFind = "Pakistan";
var lastIndexForFind = countryForFind.charAt(countryForFind.length - 1)
document.write("User Input: " + countryForFind + "<br>")
document.write("Last character of input: " + lastIndexForFind)

// 18
var sentence = "the quick brown fox jumps over the lazy dog";
var counting = sentence.match(/the/g || []).length;
document.write("Text : " + sentence + " <br>")
document.write("There are " + counting + " occurrence(s) of word 'the'")


//chapter 26-30

     //1
     var positiveNumber = 3.145214;
    document.write("number: " + positiveNumber + "<br>")
    document.write("round off value: " + Math.round(positiveNumber) + "<br>")
    document.write("floor value: " + Math.floor(positiveNumber) + "<br>")
    document.write("ceil value: " + Math.ceil(positiveNumber) + "<br>")

    //2
    var negativeNumber = -2.376;
    document.write("number: " + negativeNumber + "<br>")
    document.write("round off value: " + Math.round(negativeNumber) + "<br>")
    document.write("floor value: " + Math.floor(negativeNumber) + "<br>")
    document.write("ceil value: " + Math.ceil(negativeNumber) + "<br>")
//3
document.write("The absolute value of -4 is " + Math.abs(-4))
// 4
document.write("random dice value: " + Math.floor(Math.random() * 7))

//5
var tossing = Math.floor(Math.random() * 3);

document.write(tossing + "<br>")
if (tossing == 1) {
    document.write("random coin value: Heads")
} else if (tossing == 2) {
    document.write("random coin value: Tails")
}

//6
document.write("random number between 1 to 100: " + Math.floor((Math.random() * 100) + 1))

//7
var number = prompt("Enter your weight in kilogram")
var convertInt = parseFloat(number);
document.write("The weight of user is " + convertInt + " kilograms")

  // 8
  var secretN = Math.floor((Math.random() * 10) + 1)
  var checking = prompt("Enter secret number")

  if (secretN == checking) {
      document.write("congratulate the user")
  } else {
      document.write("Try again! Number is " + secretN)
  }
 //chapters 31-34
     //1
     var datePresent = new Date();
    document.write(datePresent)

      //2
      var currentDate = new Date();
      var monthsAll = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      document.write("Current month: " + monthsAll[currentDate.getMonth()])

        //3

        var dateCurrent = new Date();
        var daysCurrent = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        alert("Today is " + daysCurrent[dateCurrent.getDay()].slice(0, 3))
   //4
   var datingNow = new Date();
   if (datingNow.getDay() == 0 || datingNow.getDay() == 6) {
       document.write("It’s Fun day")
   }

   //5
   var dateMethod = new Date();
   if (dateMethod.getDay() < 16) {
       document.write("First fifteen days of the month")
   } else {
       document.write("Last days of the month")
   }
// 6
var dateToday = new Date();
document.write("Current Date: " + dateToday + "<br>")
document.write("Elapsed milliseconds since January 1, 1970: " + dateToday.getTime() + "<br>")
document.write("Elapsed minutes since January 1, 1970: " + dateToday.getTime() / 60000)

// 7
var dateToday = new Date();
if (dateToday.getHours() >= 0 && dateToday.getHours() < 12) {
    document.write("Its AM")
} else {
    document.write("Its PM")
}

// 8
var laterDate = new Date("31/June/2020");
document.write(laterDate)


   // 9
   var startingDate = new Date("June 18, 2015");
   var currentDating = new Date();
   var totalDaysIn = currentDating - startingDate;
   document.write(Math.round(totalDaysIn / 1000 / 60 / 60 / 24) + " days have past since 1st Ramadan, 2015")


 
   // 10
var endingDate = new Date("December 5, 2015");
var startingDate = new Date("January 1, 2015");
var totalSecondsIn = endingDate - startingDate;
document.write("On reference date " + endingDate + "<br>")
document.write(totalSecondsIn / 1000 / 60 + " seconds had passed since beginning of 2015")

// 11
var currentDateOfDay = new Date();
var hoursAhead= new Date(currentDateOfDay.getTime() + 60 * 60 * 1000)
document.write("current date: " + currentDateOfDay + "<br>")
document.write("1 hour ago, it was : " + hoursAhead + "<br>")

// 12
var currentDateOfDay = new Date();
document.write("current date: " + currentDateOfDay + "<br>")
currentDateOfDay.setFullYear(currentDateOfDay.getFullYear() - 100);
document.write("100 years back it was : " + currentDateOfDay + "<br>")


// 13
var age = prompt("Enter your age")
var DateCurrent = new Date();
dateCurrent.setFullYear(dateCurrent.getFullYear() - parseInt(age))
document.write("Your Age: " + age + "<br>")


// 14
var numberOfUnitsPerMonth = 410;
var chargePerUnitInMonth = 16;
var netAmounting = numberOfUnitsPerMonth * chargePerUnitInMonth;
var latePaymenting = netAmounting + 350

document.write("<h1>K-Electric Bill</h1><br>")
document.write("Customer Name: <b>ABC Customer</b><br>")
document.write("Month: <b>Feburary</b><br>")
document.write("Number of units: <b>" + numberOfUnitsPerMonth + "</b><br>")
document.write("Charges per unit: <b>" + chargePerUnitInMonth + "</b><br><br>")
document.write("Net Amount Payable (with Due Date): <b>" + netAmounting + "</b><br>")
document.write("Late payment surcharge: <b>" + 350 + "</b><br>")
document.write("Gross Amount Payable (after Due Date): <b>" + latePaymenting + "</b><br>")


 //chapter 35-38
    //1
    function currentDateOfDay() {
        var currentDateOfDay = new Date();
        return currentDateOfDay;
    }
    
    document.write(currentDateOfDay())


   // 2
function fullNameOfUser(firstName, lastName) {
    var fullNameOfUser = firstName + " " + lastName
    return fullNameOfUser;
}

document.write("Hi " + " " + fullNameOfUser("Muhammad", "Faizan"))


// 3
function sumOfNumbers(number1, number2) {
    var totalOfNumbers = parseInt(number1) + parseInt(number2);
    return totalOfNumbers
}

number1 = prompt("Enter first number")
number2 = prompt("Enter second number")
document.write(sumOfNumbers(number1, number2))

// 4
function calculator(number1, number2, operator) {
    var resultOfSum;

    if (operator == "+") {
        resultOfSum = parseInt(number1) + parseInt(number2);
        return resultOfSum;
    } else if (operator == "-") {
        resultOfSum = parseInt(number1) - parseInt(number2);
        return resultOfSum;
    } else if (operator == "*") {
        resultOfSum = parseInt(number1) * parseInt(number2);
        return resultOfSum;
    } else if (operator == "/") {
        resultOfSum = parseInt(number1) / parseInt(number2);
        return resultOfSum;
    }
}

document.write(calculator(4, 5, "+") + "<br>")
document.write(calculator(22, 5, "-") + "<br>")
document.write(calculator(22, 5, "*") + "<br>")
document.write(calculator(633, 5, "/") + "<br>")  


// 5
function squares(number) {
    return parseInt(number) * parseInt(number);
}

document.write(squares(4))


// 6
function factorial(number) {
    if ((parseInt(number) === 0)) {
        return 1;
    } else {
        return parseInt(number) * factorial(parseInt(number) - 1);
    }
}

document.write(factorial(3))

 // 7
 function counting(firstNum, secondNum) {
    var answer = 0;

    for (var i = firstNum; i <= secondNum; i++) {
        answer += i;
    }

    return answer;
}

document.write(counting(1, 10))

// 8
function calculateSquare(number) {
    return parseInt(number) * parseInt(number);
}

function calculateHypotenus(base, per) {
    var hyp1;
    var base1 = calculateSquare(base);
    var per1 = calculateSquare(per);
    return hyp1 = Math.sqrt(base1 + per1);
}
document.write(calculateHypotenus(5, 4))

// 9
 //i
 function rectangleShape1(height, width) {
    return parseInt(height) * parseInt(width);
}
document.write(rectangleShape1(2, 4) + " <br>")
//ii
function rectangleShape2(height = 3, width = 3) {
    return parseInt(height) * parseInt(width);
}

document.write(rectangleShape2())

//10
function palindrome(sentence) {
    var lengthOfSentence = sentence.length;
    var midPoint = Math.floor(lengthOfSentence / 2);

    for (var i = 0; i < midPoint; i++) {
        if (sentence[i] !== sentence[lengthOfSentence - 1 - i]) {
            return false;
        }
    }
    return true;
}

document.write(palindrome("madam"))

//10
function palindrome(sentence) {
    var lengthOfSentence = sentence.length;
    var midPoint = Math.floor(lengthOfSentence / 2);

    for (var i = 0; i < midPoint; i++) {
        if (sentence[i] !== sentence[lengthOfSentence - 1 - i]) {
            return false;
        }
    }
    return true;
}

document.write(palindrome("madam"))

// 11
function CapitalLetterFirst(sentence) {
    return sentence.toLowerCase().split(' ').map(function(capitalLetter) {
        return capitalLetter.replace(capitalLetter[0], capitalLetter[0].toUpperCase());
    }).join(' ');
}

document.write(CapitalLetterFirst("the quick brown fox"));

// 12
function getLongWord(sentence) {
    var s = sentence.split(" ");
    var longestW = 0;
    var wordExchange;
    for (var i = 0; i < s.length - 1; i++) {
        if (longestW < s[i].length) {
            longestW = s[i].length;
            wordExchange = s[i];
        }
    }
    return wordExchange;
}

document.write(getLongWord("Web Development Tutorial"))


 
// 13
function countGet(wordList, letterForFind) {
    var letterCounting = 0;
    for (var i = 0; i < wordList.length; i++) {
        if (wordList.charAt(i) == letterForFind) {
            letterCounting += 1;
        }
    }
    return letterCounting;
}

document.write(countGet('JSResourceS.com', 'o'));


// 14
function calcCircumference(radiusForFind) {
    return 2 * Math.PI * parseInt(radiusForFind);
}

function calcArea(radiusForFind) {
    return Math.PI * parseInt(radiusForFind) * parseInt(radiusForFind);
}

document.write("The circumference is " + calcCircumference(3) + "<br>")
document.write("The area is " + calcArea(3))



//chapters 38-42

//1
function calculatingCustomPower(a,b){
    document.write(a + '^' + b +  ' = ' + Math.pow(a,b));
}
calculatingCustomPower(2,3)

//2

var yearForLeapYear = prompt("Enter an Year");

 function checkForLeapYear() {
 if ((parseInt(yearForLeapYear) % 4 === 0 && parseInt(yearForLeapYear) % 100 !== 0) || parseInt(yearForLeapYear) % 400 === 0) {
     document.write(yearForLeapYear + ' ' + 'Is a Leap Year');
} else {
 document.write(yearForLeapYear + ' ' + 'Not a Leap Year');
}
}
checkForLeapYear();

//3
function s(a,b,c){
    return (a+b+c)/2;
}
function  area(a,b,c){
    var S = s(a,b,c)
    return S *(S-a)*(S-b)*(S-c) 

}
document.write(area(2,1,2))

//4

     function marksReceived() {
        var arrayOfMarks = [40, 50, 100];
        var totalMarksGet = 0;
        for (let i = 0; i < arrayOfMarks.length; i++) {
            totalMarksGet += arrayOfMarks[i]
        }
    
        return totalMarksGet;
    }
    
    function averageMarks() {
        return 'Average Marks:' + Math.round(marksReceived() / 3);
    }
    
    function percentageOfMarks() {
        return 'Percentage Of Marks: ' + Math.round((marksReceived() / 300) * 100) + '%';
    }
    
    function mainFunction() {
        document.write(averageMarks() + '<br>');
        document.write(percentageOfMarks());
    }
    
    mainFunction()

//5
var sentence = 'FAIZAN';

function findIndexInSentence(index) {
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] == index) {
            document.write(i)
            break;
    }
}
}

findIndexInSentence('I')

//6
function deleteVowelsInSentence(sentence) {
    var removeVowels = '';

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] != 'A' && sentence[i] != 'E' && sentence[i] != 'I' && sentence[i] != 'O' && sentence[i] != 'U' && sentence[i] != 'a' && sentence[i] != 'e' && sentence[i] != 'i' && sentence[i] != 'o' && sentence[i] != 'u') {
            removeVowels += sentence[i]

        }
    }
    document.write(removeVowels);
}

deleteVowelsInSentence('My Name is Khan');


//7
function findOccurrencesInALine() {
    var sentence = "Pleases read this application and give me gratuity";
    var charactersInSentence = sentence.toLowerCase();
    var countOfVowels = 0;

    for (let i = 0; i < charactersInSentence.length; i++) {
        var firstCharacter = charactersInSentence[i];
        var secondCharacter = charactersInSentence[i + 1];

        if (vowelsChecking(firstCharacter) && vowelsChecking(secondCharacter)) {
            countOfVowels++
            document.write(firstCharacter + secondCharacter + ' ')
        }
    }
    document.write('<br> Count Of Vowels in a Line: ' + countOfVowels)
    return count;
}

function vowelsChecking(firstCharacter) {
    switch (firstCharacter) {
        case 'a':
            return true;
        case 'e':
            return true;
        case 'i':
            return true;
        case 'o':
            return true;
        case 'u':
            return true;
        default:
            return false;
    }
}

findOccurrencesInALine();

//8
var distanceInKm = prompt('Enter Distance Between Two Cities');

function inMeters() {
    return parseInt(distanceInKm) * 1000;
}

function inFeet() {
    return parseInt(distanceInKm) * 3280.8;
}

function inInches() {
    return parseInt(distanceInKm) * 39370;
}

function inCentimeters() {
    return parseInt(distanceInKm) * 100000;
}

document.write('In  Meters: ' + inMeters() + ' m');
document.write('<br>In Foot: ' + inFeet() + ' ft');
document.write('<br>In Inches: ' + inInches() + ' in');
document.write('<br>In Centimeters: ' + inCentimeters() + ' cm');


// 9
var timeWorkedIn = prompt("Enter Time of Employee Worked in hours")
var overTimeFees, overTimePayAmount = 0;

if (timeWorkedIn > 40) {
    overTimeFees = timeWorkedIn - 40;
    overTimePayAmount = overTimePayAmount + (12 * overTimeFees);
}

document.write('Total over time of employee ' + overTimePayAmount);


//10
var withdrawerAmount = prompt('Enter Amount')

var hundredNotes = parseInt(withdrawerAmount) / 100;
var fiftyNotes = (parseInt(withdrawerAmount) % 100) / 50;
var tensNotes = ((parseInt(withdrawerAmount) % 100) % 50) / 10;

document.write('You will have' + ' ' + parseInt(hundredNotes) + ' hundred notes ' + parseInt(fiftyNotes) + ' fifty notes ' + parseInt(tensNotes) + ' tens notes');



//Chapters 43-48
//1
//<a href="#" onclick="alertBox()">Click Here</a>    

function alertBox() {
    alert('Hi, How are you...')
}

//2
//<img onclick="alertToUser()" width="200px" src="https://images.priceoye.pk/huawei-y6p-pakistan-priceoye-yjhiz.png" alt="">
//<img onclick="alertToUser()" width="200px" src="https://images.priceoye.pk/tecno-spark-5-air-pakistan-priceoye-y4avd.jpg" alt="">
//<img onclick="alertToUser()" width="200px" src="https://images.priceoye.pk/tecno-pouvoir-4-pakistan-priceoye-7cpzq.jpg" alt="">
//<img onclick="alertToUser()" width="200px" src="https://images.priceoye.pk/huawei-honor-9x-lite-pakistan-priceoye-fi50n.jpg" alt="">



function alertToUser() {
    alert('Thank you for purchasing a phone from us')
}

//3

/* <table border="1px">
    <tr>
        <th>Index</th>
        <th>Name</th>
        <th>Class</th>
        <th>Delete</th>
    </tr>
    <tr>
        <td>0</td>
        <td>Faizan</td>
        <td>4</td>
        <td><button onclick="deleteRowOfStudent(this)">Delete</button></td>
    </tr>
    <tr>
        <td>1</td>
        <td>Hamza</td>
        <td>5</td>
        <td><button onclick="deleteRowOfStudent(this)">Delete</button></td>
    </tr>
    <tr>
        <td>2</td>
        <td>Affan</td>
        <td>7</td>
        <td><button onclick="deleteRowOfStudent(this)">Delete</button></td>
    </tr>
    <tr>
        <td>3</td>
        <td>Suhaib</td>
        <td>9</td>
        <td><button onclick="deleteRowOfStudent(this)">Delete</button></td>
    </tr>
</table> */ 
      
function deleteRowOfStudent(button){
var deleteRow = button. parentNode.parentNode;
deleteRow.parentNode.removeChild(deleteRow);
        } 
  

//4
//<img onmouseout="BeforeChange()" onmouseover="AfterChange()" width="200px" src="https://images.priceoye.pk/samsung-galaxy-a21s-pakistan-priceoye-8uo9z.jpg" alt="">

    function AfterChange() {
        document.getElementsByTagName('img')[0].src = 'https://images.priceoye.pk/samsung-galaxy-s20-ultra-pakistan-priceoye-f8xd4.jpg';
    }
    
    function BeforeChange() {
        document.getElementsByTagName('img')[0].src = 'https://images.priceoye.pk/samsung-galaxy-a21s-pakistan-priceoye-8uo9z.jpg';
    }

//5

//<label>0</label>
//<button onclick="increaseNumber()">Increase</button>
//<button onclick="decreaseNumber()">Decrease</button>

var counter = 0;
    
function increaseNumber() {
    counter++;
    document.getElementsByTagName('label')[0].innerText = counter;
}

function decreaseNumber() {
    counter--;
    document.getElementsByTagName('label')[0].innerText = counter;
}    

//chapters 49-52
//1
/* <form action="" method="post">
<label for="">First Name: </label>
<input type="text"><br>

<label for="">Last Name: </label>
<input type="text"><br>

<label for="">Phone Number: </label>
<input type="number"><br>


<label for="">E-Mail: </label>
<input type="email"><br>

<input onclick="showData()" type="button" value="Submit">
</form> */

function showData() {
 var fname = document.getElementsByTagName('input')[0].value
 var lname = document.getElementsByTagName('input')[1].value
 var phoneNumber = document.getElementsByTagName('input')[2].value
 var email = document.getElementsByTagName('input')[3].value
 document.write('first Name: ' + fname + '<br>');
 document.write('Last Name:  ' + lname + '<br>');
 document.write('Phone Number:' + phoneNumber + '<br>');
 document.write('Email : ' + email)
}


//2

//<p>A paragraph is a series of related sentences developing a central idea, called the topic. <a onclick="readMoreInParagraph()" href="#">Read more</a></p>
  
    function readMoreInParagraph() {
        var sentence = ' Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.';
        document.getElementsByTagName('a')[0].innerHTML = '';
        document.getElementsByTagName('p')[0].innerText += sentence;
    }

//3
// <form action="" method="post">
// <label for="">ID: </label>
// <input type="text"><br>

// <label for="">Name Of Student: </label>
// <input type="text"><br>

// <input onclick="showDataOfStudent()" type="button" value="Submit">
// </form>

// <form style="display: none;" action="" method="post">
// <label for="">ID: </label>
// <input type="text"><br>

// <label for="">Name Of Student: </label>
// <input type="text"><br>

// <input onclick="editRow1Std()" type="button" value="Edit">
// </form>


function showDataOfStudent() {
   var idOfStd = document.getElementsByTagName('input')[0].value
   var nameOfStd = document.getElementsByTagName('input')[1].value

   var tableStd = document.createElement('table')
   var tableRowStd = document.createElement('tr')
   var tableDiv1Std = document.createElement('td')
   var tableDiv2Std = document.createElement('td')
   var editButtonStd = document.createElement('button')
   var deleteButtonStd = document.createElement('button')

   var idTextStd = document.createTextNode(idOfStd)
   var nameTextStd = document.createTextNode(nameOfStd)

   document.body.appendChild(tableStd)
   document.getElementsByTagName('table')[0].appendChild(tableRowStd)

   tableDiv1Std.appendChild(idTextStd)
   tableDiv2Std.appendChild(nameTextStd)

   var rowStd = tableStd.insertRow(0);
   var cell1Std = rowStd.insertCell(0);
   var cell2Std = rowStd.insertCell(1);
   var cell3Std = rowStd.insertCell(2);
   var cell4Std = rowStd.insertCell(3);

   cell1Std.appendChild(tableDiv1Std)
   cell2Std.appendChild(tableDiv2Std)
   cell3Std.appendChild(editButtonStd)
   cell4Std.appendChild(deleteButtonStd)

   tableStd.setAttribute('border', '1px')
   deleteButtonStd.setAttribute('onClick', 'deleteRowStd(this)')
   editButtonStd.setAttribute('onClick', 'editRowStd()')
   editButtonStd.setAttribute('id', 'edit')
   deleteButtonStd.setAttribute('id', 'delete')
   document.getElementById('edit').innerText = 'Edit'
document.getElementById('delete').innerText = 'Delete'
}

function deleteRowStd(button) {
   var rowDelete = button.parentNode.parentNode
   rowDelete.parentNode.removeChild(rowDelete)
}

function editRowStd() {
   document.getElementsByTagName('form')[1].style.display = 'block'

   var td1Std = document.getElementsByTagName('td')[1].innerText
   var td2Std = document.getElementsByTagName('td')[3].innerText

   document.getElementsByTagName('input')[3].value = td1Std
   document.getElementsByTagName('input')[4].value = td2Std

}

function editRow1Std() {
   var idOfStd = document.getElementsByTagName('input')[3].value
   var nameOfStd = document.getElementsByTagName('input')[4].value

   document.getElementsByTagName('td')[1].innerText = idOfStd
   document.getElementsByTagName('td')[3].innerText = nameOfStd

   document.getElementsByTagName('form')[1].style.display = 'none'
}
//chapters 52-57

//1

/* <div style="display: flex; overflow-x: scroll;"></div>
 <!-- Work Of Model -->
 <div id="modal" class="modal">
     <button onclick="zoomIn()">Zoom In (+)</button>
     <button onclick="zoomOut()">Zoom Out (-)</button>
     <p>Faizan</p>
     <span class="close" id="modal-close" onclick="onClosedImagModal()">&times;</span>
    <img class="modal-content" id="modal-img">
 </div> */
    
    var pathOfImages = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.png",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.png",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",
    "images/11.jpg",
    "images/12.jpg",
    "images/13.jpg",
    "images/14.png",
    "images/15.jpg"
]

var beautifulPlacesText = [
    'Salar de Uyuni, Bolivia <br> The world’s largest salt flat, it creates a mirror effect after the rain.',
    'Cinque Terre, Rio Maggiore, Italy <br>The “5 Lands” of colored homes perched on a cliff by the sea.',
    'Blue Lagoon, Iceland <br> Natural thermal hot springs.',
    'Maldives <br> This archipelago is the ultimate tropical island paradise.',
    'Glass Beach, California, USA <br> A beach buried in colorful sea glass.',
    'Santorini, Greece - <br> Iconic blue and white buildings on a cliff by the sea.',
    'Neuschwanstein Castle, Germany <br> The gorgeous former castle of the king.',
    'Aogashima Volcano, Japan <br> A small village living in a volcanic island.',
    'Venice, Italy <br> The city of colorful winding corridors and canals, and good food.',
    'Havasu Falls, Grand Canyon, Arizona, USA <br> In Grand Canyon National Park is this majestic waterfall.',
    'Swiss Alps, Switzerland <br> The epic and majestic mountain range.',
    'Iceland <br> A vast winter and a perfect place to watch the aurora.',
    'Positano, Almalfi Coast, Italy <br> Storybook town on a cliff by the sea.',
    'Rio de Janeiro, Brazil <br> The iconic statue overlooking the city',
    'Aansu lake, Pakistan <br> The name "Ansoo" comes from its tear-like shape (the Urdu word Ansoo means teardrop). The lake also resembles a human eye with a central ice island resembling the iris and a ridge resembling an eyebrow, which becomes even more prominent when ice melts on the "eyebrow" during the summer.'
]

for (let i = 0; i < pathOfImages.length; i++) {
    var imgFile = document.createElement("img");
    imgFile.src = pathOfImages[i];
    imgFile.width = '50'
    imgFile.height = '50'
    imgFile.setAttribute('onclick', 'imageOpen(this.src, this.alt)')
    imgFile.alt = beautifulPlacesText[i]
    document.getElementsByTagName('div')[0].appendChild(imgFile);
}

function imageOpen(srcFirst, altFirst) {
    var modal = document.getElementById('modal');
    modal.classList.add('modal-open')
    modal.classList.remove('modal-close')
    modal.style.display = 'block'
    document.getElementById('modal-img').src = srcFirst
    document.getElementById('modal-img').alt = altFirst
    document.getElementsByTagName('p')[0].innerHTML = altFirst
}

function onClosedImagModal() {
    var modal = document.getElementById('modal');
    modal.classList.add('modal-close')
    modal.classList.remove('modal-open')
    setTimeout(() => { modal.style.display = "none"; }, 550)

}

var font_SizeText = 10;

function zoomIn() {
    font_SizeText += 10;
    document.getElementsByTagName('p')[0].style.fontSize = font_SizeText + 'px';
}

function zoomOut() {
    font_SizeText -= 10;
    document.getElementsByTagName('p')[0].style.fontSize = font_SizeText + 'px';
}

//chapters58-67

//1
/* <div> <h1> DOM </h1><div id="form-content" class="content"> <label for="first-name">First Name</label> <input type="text" id="first-name"/> <label for="last-name">Last Name</label> <input type="text" id="last-name"/> <label for="email">Email</label> <input type="text" id="email"/> </div><div id="main-content" class="content"> <p class="render"> First Name : Alex</p><p class="render" id="lastName">Last Name: Bank</p><p class="render"> Email : alexbank@example.com</p><p class="render"> Country : Pakistan </p><p class="render"> contact : +92 300 1234567</p></div></div> */


var mainContentDiv = document.getElementById('main-content').childNodes
for (i = 0; i < mainContentDiv.length; i++) {
document.write(mainContentDiv[i].nodeName + "<br>")
}
var renderClassp = document.getElementsByClassName('render')
for (let i = 0; i < renderClassp.length; i++) {
document.write(renderClassp[i].innerHTML)
}

document.getElementById('first-name').value = "Faizan"
document.getElementById('last-name').value = "Khan  "
document.getElementById('email').value = "fnkhan142@gmail.com"


//2
var nodeTypeOfElement = document.getElementById('main-content')
document.write(nodeTypeOfElement.nodeType)

var nodeTypeLastName = document.getElementById('last-name')
document.write(nodeTypeLastName.nodeType)

var nodeTypeChild = document.getElementById('last-name').childNodes
document.write(nodeTypeChild.nodeType)

var lastName = document.getElementById('last-name').childNodes
document.write(lastName.textContent = "Khan")

var getChildNodes = document.getElementById('main-content')
document.write(getChildNodes.firstChild.nodeName)
document.write(getChildNodes.lastChild.nodeName)

var getSiblingNodes = document.getElementById('lastName')
document.write(getSiblingNodes.nextSibling.nodeName)
document.write(getSiblingNodes.previousSibling.nodeName)

var getParentNodeAndTypeOfNode = document.getElementById('email')
document.write(getParentNodeAndTypeOfNode.parentNode.nodeName)
document.write(getParentNodeAndTypeOfNode.nodeType)

