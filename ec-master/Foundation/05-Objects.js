obj1()
obj2()
obj3()
obj4()

function obj1() {
    console.log("obj1")
    /*
        Create an object "person" with information about Johan Rheborg: first name, last name, year of birth
        Print the first name
        Print his full name
    */


    let person = {
        firstName: "Johan",
        lastName: "Rheborg",
        birthYear: 1963
    }

    console.log(person.firstName)
    console.log(person.firstName + " " + person.lastName)
}

function obj2() {
    console.log("obj2")

    /*
        Continue building on "person"
        Add a couple of characters to the object "person" (Percy Nilegård, Farbror Barbro ...)
        Add address details (street, city, country)

        Print info about Johan based on the object "person":
             Johan was born in 1963
             Johan lives on the street Kammakargatan 38 apartment 1401
             Johan has played 3 roles, including Percy Nilegård
    */

   let person = {
    firstName: "Johan",
    lastName: "Rheborg",
    birthYear: 1963,
    street: "Kammakargatan 38",
    city: "Gothenburg",
    country: "Sweden",
    characters: {
        pn: "Percy Nilegård",
        fb: "Farbror BarbroS"
    }
}
console.log(person.firstName + " was born in " + person.birthYear)
console.log(person.firstName + " lives on the street " + person.street)
console.log(person.firstName + " has played 3 roles " + person.characters.pn)

}


function obj3() {
    console.log("obj3")

    /*
        Create an array of "paintings" with three paintings (three elements)
        For each painting there is info: name, artist and the year it was painted
        Print the number of paintings: "There are 3 paintings in the array"
        Print info about the third painting: "Pablo Picasso painted Guernica in 1937"
        Loop through all the paintings with "for of" and print out all the info in tabular form
        Tip: use "padEnd" to print the table neatly
    */

    let paintings= [
        {
            painting: "Saturn devouring his son",
            artist: "Francisco de Goya",
            year: 1820,
        },
        {
            painting: "Mona Lisa",
            artist: "Leonardo da Vinci",
            year: 1503
        },
        {
            painting: "Guernica",
            artist: "Pablo Picasso",
            year: 1937
        }
    ];
    console.log("There are " + paintings.length + " painting in the array")
    console.log(paintings[2].artist + " painted " + paintings[2].painting + " in " + paintings[2].year)
    
    for(let x of paintings){
        console.log(x)
    }
}

function obj4() {
    console.log("obj4")

    /*
        Create an object "Skriet" (by Edvard Munch 1893). Add it to "paintings" using "push".
        Print its year using the variable "paintings" (ie 1893)
        Use "pop" several times to remove the last three paintings
        Print the number of paintings in the array
    */

    let paintings= [
        {
            painting: "Saturn devouring his son",
            artist: "Francisco de Goya",
            year: 1820,
        },
        {
            painting: "Mona Lisa",
            artist: "Leonardo da Vinci",
            year: 1503
        },
        {
            painting: "Guernica",
            artist: "Pablo Picasso",
            year: 1937
        }
    ];

    let newPainting = {
        painting: "Skriet",
        artist: "Edvard Munch",
        year: 1893
    }

    paintings.push(newPainting);
    console.log(paintings[3].year)

    paintings.pop()
    paintings.pop()
    paintings.pop()

    console.log(paintings.length)
}
