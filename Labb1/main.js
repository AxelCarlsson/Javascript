const books = [
    { id: 100, title: "Skärmhjärnan", author: "Anders Hansen", price: 59 },
    { id: 101, title: "Klubben", author: "Matilda Voss", price: 59 },
    { id: 102, title: "Det sista livet", author: "Peter Nyström", price: 59 },
    { id: 103, title: "Skytten", author: "Jonas Moström", price: 59 },
    { id: 104, title: "Franska fotografen", author: "Natasha Lester", price: 59 },
    { id: 105, title: "Ödemark", author: "Stina Jackson", price: 59 },
]

const cart = new Map()

function nrOfBooksInCart() {

    let x = 0

    for (let [bookId, quantity] of cart) {
        x = x + quantity
    }

    // for (let item of cart) {
    //     x = x + item[1]
    // }

    return x

}
function select(selector) {
    return document.querySelector(selector)
}

function hide(selector) {
    select(selector).style.display = "none"
}

function show(selector) {
    select(selector).style.display = "block"
}

function hidePopup() {
    hide("#popup-itemadded")
    hide("#popup-cart")
}

function updateQuantity(bookId, strValue) {
    const quantity = parseInt(strValue)

    if (quantity >= 0) {
        cart.set(bookId, quantity)
    }

    showCart()
}

function showCart() {
    hide("#popup-itemadded")

    let list = ""
    let sum = `${nrOfBooksInCart() * 59}`

    for (let [bookId, quantity] of cart) {

        const book = books.find(b => b.id === bookId)

        list += `
        <article>
        <div></div>
        <p>${book.title}</p>
        <div>
        <input value="${quantity}" type="number" onchange="updateQuantity(${bookId}, this.value)">
        <span>${book.price} kr/p</span>
        </div>
        <span>${quantity * book.price} kr</span>
        </article>
        
        `
    }
    
    let freightInfo = ""
    let difference = 159 - parseInt(sum)
    if(parseInt(sum) > 159){
        freightInfo = "You have free freight!"
    } else{
        freightInfo =`Free freight over 159kr (${difference} kr kvar)`
    }

    let result = `
    <p>Your cart</p>
    <div class="list">
        ${list}
    </div>
    <div class="list-sum">
        <div>Sum (${nrOfBooksInCart()} ${bookOrBooks(nrOfBooksInCart())}):</div>
        <div>${sum} kr</div>
        <div>${freightInfo}</div>
    </div>
    <div class="buttons">
        <button onclick="hidePopup()">Close</button>
        <button>Checkout</button>
    </div>
    `
    select("#popup-cart").innerHTML = result

    show("#popup-cart")
}

function bookOrBooks(nr) {

    if (nr === 0 || nr > 1) {
        return "books"
    } else {
        return "book"
    }
}

function addToCart(id) {
    hidePopup()

    if (cart.has(id)) {
        const previousNrOfBooks = cart.get(id)
        cart.set(id, previousNrOfBooks + 1)

    } else {
        cart.set(id, 1)
    }

    const book = books.find(b => b.id === id)


    let s = `
    <p><b>${book.title}</b> added to the cart</p>
    <div class="buttons">
        <button onclick="showCart()">Show cart (${nrOfBooksInCart()} ${bookOrBooks(nrOfBooksInCart())})</button>
        <button onclick="hidePopup()">Close</button>
        <button>Checkout</button>
    </div>
    `

    select("#popup-itemadded").innerHTML = s
    show("#popup-itemadded")
}

function render() {

    let s = "";

    for (let book of books) {
        s += `
            <article>
                <div class="image">
                </div>
                <h2>${book.title}</h2>
                <p>${book.author}</p>
                <p>${book.price} kr</p>
                <button onclick=addToCart(${book.id})>Buy</button>
            </article>
        `
    }

    const fullRows = books.length % 4 === 0

    if (!fullRows) {
        const extraEmptyBooks = 4 - books.length % 4
        for (let i = 0; i < extraEmptyBooks; i++) {
            s += `
                <article style="visibility: hidden;">
                </article>
            `
        }

    }

    select("#booklist").innerHTML = s
}

render()