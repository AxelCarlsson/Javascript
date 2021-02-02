arr1()
arr2()
arr3()
arr4()
arr5()
arr6()
arr7()
arr8()


function arr1() {

    /*
        I---------I---------I---------I
        0         1         2         3
    
        Create an array of "cities" with the cities Stockholm, Gothenburg and New York
        Print the first, second, and third elements of the array
        What happens if you try to access the fourth element (which does not exist)?
    */
   
    let x = ["Stockholm", "Gothenburg", "New York"];
    console.log("Arr1");
    console.log(x[0]);
    console.log(x[1]);
    console.log(x[2]);
    console.log(x[3]); // Undefined

    

}

function arr2() {

    /*
        Create an array of "cities" with the cities Stockholm, Gothenburg and New York
        Add another city "Krakow" using "push"
        Print the fourth element in "cities" ("Krakow")
    */

    console.log("Arr2");
    let x = ["Stockholm", "Gothenburg", "New York"]
    x.push("Krakow")
    console.log(x[3])
}


function arr3() {
    /*
        Create an array of "cities" with the cities of Stockholm, Gothenburg and New York
        Add another city "Krakow" using "push"
        Add another city "Berlin" using "push"
        Print the number of cities in the array
        Pick the second and fourth cities in the list. Print "My favorite cities are Gothenburg and Krakow"
    */

   console.log("Arr3");

   let x = ["Stockholm", "Gothenburg", "New York"]
   x.push("Krakow")
   x.push("Berlin")
   console.log("There are " + x.length + " cities in the array")
   console.log("My favorite cities are " + x[1] + " and " + x[3])

}

function arr4() {

    /*
        Create an array of "cities" with the cities of Stockholm, Gothenburg and New York
        Use "pop" to pick out the last city and place in a variable "poppedCity"
        Print the length of the list (2)
        Print the popped city (New York)
        Use cities.length to pick the last item in the list (Gothenburg)
    */

    console.log("Arr4");

    let x = ["Stockholm", "Gothenburg", "New York"]
    let poppedcity = x.pop()
    console.log(x.length)
    console.log(poppedcity)
    console.log(x[x.length - 1])


}

function arr5() {

    /*
        Create an array of "numbers" with the numbers 5,66,777,12
        Print the number of numbers in the list (4)
        Print the third number in the list (777)
    */

   console.log("Arr5");

   let x = [5, 66, 777, 12]
   console.log(x.length)
   console.log(x[2])
}

function arr6() {

    /*
        Create an array of "numbers" with the numbers 5,66,777,12
        Sort the numbers by typing: numbers.sort();
        Sort the numbers by typing: numbers.sort((a, b) => a-b);
        Print the value of "numbers"
        Compare the two results
    */

    console.log("Arr6");
    let x = [5, 66, 777, 12]
    x.sort();
    console.log(x)
    x.sort((a, b) => a - b);
    console.log(x)
}

function arr7() {

    /*
        Sort the list backwards
    */

   console.log("Arr7");
   let x = [5, 66, 777, 12]
   x.sort();
   x.reverse();
   console.log(x)


}

function arr8() {

    /*
        Create an array of "numbers" with the numbers 5,66,777,12
        Reverse the order using "reverse"
        Print the array ([12, 777, 66, 5])
    */

    console.log("Arr8");
    let x = [5, 66, 777, 12]
    x.reverse()
    console.log(x)

}