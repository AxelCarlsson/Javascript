loop1()
loop2()
loop3()
loop4()
loop5()
loop6()
loop7()

function loop1() {

    /*
        Use a for-loop to print all numbers between 5 and 18
    */
   console.log("loop1")
    for (let x = 6; x < 18; x++){
        console.log("Ett tal: " + x)
    }
}

function loop2() {

    /*
        Use a for-loop to print all numbers between 0 and 9
    */
   console.log("loop2")

    for (let x = 1; x<9; x++){
        console.log("Ett tal: " + x)
    }


    
}

function loop3() {
    console.log("loop3")

    /*
        Use a for-loop to print:
            "Number 4!" 
            "Number 5!" 
            "Number 6!" 
            "Number 7!" 
            "Number 8!" 
    */

   for (let x = 4; x<9; x++){
    console.log("Number " + x + "!")
}
}

function loop4() {
    console.log("loop4")

    /*
        Solve the previous task but use a while loop
    */
    let x = 4
    while(x < 9){
        console.log("Number " + x + "!")
        x++;
    }
}

function loop5() {
    console.log("loop5")

    /*
        Create an array "importantYears" with the years 1492, 1789, 1859, 1929
        Use "for of" to print all years
    */

    let importantYears = [1492, 1789, 1869, 1929]

    for(let x of importantYears){
        console.log(x)
    }
}

function loop6() {
    console.log("loop6")

    /*
        Create an array "importantYears" with the years 1492, 1789, 1859, 1929
        Use "for of" to print all the years with a number on the left:
        1) 1492
        2) 1789
        3) 1859
        4) 1929
    */
    let y = 1
    let importantYears = [1492, 1789, 1869, 1929]

    for(let x of importantYears){
        console.log(y + ") " + x)
        y++;
    }
    
    /*
     Extra: solve the task with ".forEach"
     */

}

function loop7() {
    console.log("loop7")

    /*
        Same as last exercise but interrupt the loop if the year is higher than 1800. So should give:
        1) 1492
        2) 1789    
    */
    let y = 1
    let importantYears = [1492, 1789, 1869, 1929]
    
        for(let x of importantYears){
            if(x > 1800){
                break;
            }
            console.log(y + ") " + x)
            y++;
        }

}