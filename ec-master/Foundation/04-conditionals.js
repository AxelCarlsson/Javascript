cond1()
cond2()
cond3()
cond4()
cond5()
cond6()
cond7()
cond8()

function cond1() {
    console.log("cond1")

    /*
        Create a variable shoeMaria and set it to 36
        Create a variable shoeAli and set it to 42
        Write an if statement that checks if they have the same shoe size (print different texts)
    */

    let shoeMaria = 36
    let shoeAli = 42

    if (shoeAli === shoeMaria) {
        console.log("De har samma storlek")
    } else {
        console.log("De har olika storlekar")
    }

}

function cond2() {
    console.log("cond2")

    /*
        Create a variable shoeMaria
        Create a variable shoeAli

        Depending on which shoe size is the largest print

        "Ali has bigger feet than Maria"
        "Maria has bigger feet than Ali"
    */

   let shoeMaria = 36
   let shoeAli = 42

   if(shoeMaria > shoeAli){
       console.log("Maria has bigger feet than Ali")
   } else {
    console.log("Ali has bigger feet than Maria")
   }
}

function cond3() {
    console.log("cond3")

    /*
        Same as last time, but also check if they have the same shoe size

        "Ali has bigger feet than Maria"
        "Maria has bigger feet than Ali"
        "They have the same shoe size"
    */

    let shoeMaria = 36
    let shoeAli = 42

    if(shoeMaria > shoeAli){
        console.log("Maria has bigger feet than Ali")
    } else if(shoeAli > shoeMaria) {
        console.log("Ali has bigger feet than Maria")
    }else if(shoeMaria === shoeAli) {
        console.log("They have the same shoesize")

    }
}

function cond4() {
    console.log("cond4")

    /*
        Create three variables: shoeMaria, shoeAli, bigFoot

        Write an if statement that checks if bigFoot has a larger shoe size than both Ali and Maria
    */

    let shoeMaria = 36
    let shoeAli = 42
    let bigFoot = 100

    if(bigFoot > shoeAli && bigFoot > shoeMaria){
        console.log("Bigfoot has the biggest feet")
    } 
}

function cond5() {
    console.log("cond5")

    /*

        Write an if statements that checks if any of Ali, Maria or BigFoot has a shoe size that is larger than 50

         Extra:
         1) solve this task by creating your own method "someHigh" which takes several parameters. Then use it like this:

             if (someHigh (50, bigFoot, shoeAli, shoeMaria))
                 console.log ("One of them has really big feet");

         2) solve this task with ".some"

        
    */

    
   let shoeMaria = 36
   let shoeAli = 42
   let bigFoot = 100

   if(shoeMaria > 50){
    console.log("Maria has big feet")
   } else if (shoeAli > 50){
    console.log("Ali has big feet")
   } else if (bigFoot > 50){
    console.log("Bigfoot has the biggest feet")

   }
}


function cond6() {
    console.log("cond6")

    /*
        Create a variable "favoriteVegetable" and set it to "turnip"
        Use a switch statement to check the value of "favoriteVegetable" and respond in different ways
        For example, if the value of "favoriteVegetable" is "turnip" write "Suitable for falafel"
    */

    let favoriteVegetable = "turnip"

    switch(favoriteVegetable) {
        case "turnip":
            console.log("Suitable for falafel")
            break;
        case "cucumber":
            console.log("Yummy")
            break;
        case "tomato":
            console.log("Yuck, tomato")
            break;         
    }
}


function cond7() {
    console.log("cond7")

    /*
        Compare == and === in an if statement
        Test if 3 == "3" is true
        Test if 3 === "3" is true    
    */

    if (3 === "3"){
        console.log("3 does === '3'")
    } else if (3 == "3"){
        console.log("3 does == '3'")
    }
}

function cond8() {
    console.log("cond8")

    /*
        Create a variable a and set it to 13 * 13
        Create a variable b and set it to 169
        Use "ternary operator" to check if they are the same. Put the answer (the string "equal" or "different") in a variable "result"
        Print result
    */

    let a = 13 * 13
    let b = 169

    let result1 = a === b
    let result2 = a == b


    console.log(result1)
    console.log(result2)

}