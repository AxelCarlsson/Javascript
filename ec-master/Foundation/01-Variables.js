
var1()
var2()
var3()
var4()
var5()
var6()
var7()
var8()
var9()
var10()
var11()
var12()


function var1() {
    /* Print "My name is XXXX" in the console */
    console.log("Var1 My name is Axel");
}

function var2() {
    /* 
    Create variable and set it to 35.
    Print the value of the number (using "console.log")
    */

    const number = 35 // bra.
    console.log("Var2 The value is ", number)


    // Ctrl K-C ==> kommentera

    // var number = 35    // använd aldrig

    // let number = 35   // bra


    // for (var x = 0; x < 5; x++) {
    //     console.log("x", x)
    // }

    // console.log("x", x)

}

function var3() {

    /*
        Create a variable "x" with the value 12
        Create a variable "y" with the value 6
        Create a variable "z" that sums the numbers
        Print the answer "Answer: 18"
    */

    const x = 12
    const y = 6
    let z = x + y
    console.log("Var3 Answer: " + z)
}

function var4() {

    /*
     Create a variable "x" with the value 77
     Create a variable "y" with the value 44
     Change the value of "x" to 55
     Create a variable "z" that sums the numbers
     Print the sum
    */

    let x = 77
    let y = 44
    x = 55
    let z = x + y
    console.log("Var4 Answer: " + z)
}


function var5() {

    /*
    Same as last exercise but let x be a constant (const)
    Which error message appears?
    */

//    const x = 77
//    let y = 44
//    x = 55
//    let z = x + y
//    console.log("Var4 Answer: " + z)
}

function var6() {
    /*
    Create a variable "number1" and set it to the string "77"
    Create a variable "number2" and set it to the string "50"
    Print number 1 + number 2 (should give 7750)
    */

    let number1 = "77"
    let number2 = "50"
    console.log("Var6 " + number1 + number2)
}

function var7() {
    /*
     Create a variable "number1" and set it to the string "77"
     Create a variable "number2" and set it to 50
     Use parseInt to convert "number1" to the number 77
     Print number 1 + number 2 (should give 127)
    */

    let number1 = "77";
    let number2 = 50;
    number1 = parseInt(number1);
    console.log(number1 + number2);
}

function var8() {
    /*
    Create variable number with the value 42.
    Print "My favorite number is 42"
    */

    let x = 42
    console.log("Var8 My favorite number is " + x)
}

function var9() {
    /* Use backtick (i.e. the character `) to solve the problem above */
    let x = 42
    console.log(`Var9 My favorite number is ${x}`)
}

function var10() {
    /*
        Create a variable "dinner" and set it to 'broccoli'
        Create a variable "Dinner" and set it to 'pasta'
        Print the value of "dinner"
    */

    let dinner = "broccoli"
    let Dinner = "pasta"
    console.log("Var10 " + dinner)
}

function var11() {
    /*
    Create a variable x with the value 12
    Create a variable y with the value true
    Create a variable z with the value 'Monday'
    Create a variable w without setting any value
    Print the type of these four variables using "typeof"
    */

    let x = 12
    let y = true
    let z = "Monday"
    let w
    console.log("Var11 " + typeof(x) + " " + typeof(y) + " " + typeof(z) + " " + typeof(w))
}

function var12() {
    /*
    Create a variable "x". Set the value to "parseInt ('fox')"
    Print x (should give "NaN")
    Use "isNaN" to check if x is a non-number. Set y to that value (y will get the value true)
    Print y
    */

    let x = parseInt(`fox`)
    console.log(x)
    let y = isNaN(x)
    console.log(y)
}

