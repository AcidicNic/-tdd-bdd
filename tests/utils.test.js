const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
    const hello = utils.sayHello()
    expect(hello).to.be.a("string")
    expect(hello).to.equal("Hello")
    expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================




// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
    utils.clearCart()
    done()
})

it("Should create a new (object) Item with name and price", function() {
    const item = utils.createItem("apple", 0.99)
    expect(item).to.be.a("object")
    expect(item).to.have.property("name", "apple")
    expect(item).to.have.property("price", 0.99)
    expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function() {
    const cart = utils.getShoppingCart()

    expect(cart).to.be.an("array")
    expect(cart).to.eql([])
})

it("Should add a new item to the shopping cart", function() {
    utils.addItemToCart(utils.createItem("puff bar", 15))
    let cart = utils.getShoppingCart()
    expect(cart).to.eql(
        [
            {"name": "puff bar", "price": 15, "quantity": 1}
        ]
    )

    utils.addItemToCart(utils.createItem("1g", 70))
    cart = utils.getShoppingCart()
    expect(cart).to.eql(
        [
            {"name": "puff bar", "price": 15, "quantity": 1},
            {"name": "1g", "price": 70, "quantity": 1}
        ]
    )

    utils.addItemToCart(utils.createItem("flowers", 5))
    cart = utils.getShoppingCart()
    expect(cart).to.eql(
        [
            {"name": "puff bar", "price": 15, "quantity": 1},
            {"name": "1g", "price": 70, "quantity": 1},
            {"name": "flowers", "price": 5, "quantity": 1}
        ]
    )
})

it("Should return the number of items in the cart", function() {
    let length = utils.getNumItemsInCart()
    expect(length).to.be.an("number")
    expect(length).to.equal(0)

    utils.addItemToCart(utils.createItem("puff bar", 15))
    length = utils.getNumItemsInCart()
    expect(length).to.equal(1)

    utils.addItemToCart(utils.createItem("1g", 70))
    length = utils.getNumItemsInCart()
    expect(length).to.equal(2)

    utils.addItemToCart(utils.createItem("flowers", 5))
    length = utils.getNumItemsInCart()
    expect(length).to.equal(3)
})

it("Should remove items from cart", function() {
    utils.addItemToCart(utils.createItem("puff bar", 15))
    utils.addItemToCart(utils.createItem("1g", 70))
    utils.addItemToCart(utils.createItem("flowers", 5))
    expect(utils.getShoppingCart()).to.eql([
        {"name": "puff bar", "price": 15, "quantity": 1},
        {"name": "1g", "price": 70, "quantity": 1},
        {"name": "flowers", "price": 5, "quantity": 1}
    ])
    expect(utils.getNumItemsInCart()).to.equal(3)

    utils.removeItemFromCart({"name": "puff bar", "price": 15, "quantity": 1})
    expect(utils.getShoppingCart()).to.eql([
        {"name": "1g", "price": 70, "quantity": 1},
        {"name": "flowers", "price": 5, "quantity": 1}
    ])
    expect(utils.getNumItemsInCart()).to.equal(2)

    utils.removeItemFromCart({"name": "flowers", "price": 5, "quantity": 1})
    expect(utils.getShoppingCart()).to.eql([
        {"name": "1g", "price": 70, "quantity": 1}
    ])
    expect(utils.getNumItemsInCart()).to.equal(1)

    utils.removeItemFromCart({"name": "1g", "price": 70, "quantity": 1})
    expect(utils.getShoppingCart()).to.eql([])
    expect(utils.getNumItemsInCart()).to.equal(0)
})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart", function() {
    expect(utils.getNumItemsInCart()).to.equal(0)

    let item = utils.createItem("1g", 70)
    utils.addItemToCart(item)
    expect(utils.getNumItemsInCart()).to.equal(1)

    item = utils.createItem("1g", 70)
    utils.addItemToCart(item)
    expect(utils.getNumItemsInCart()).to.equal(2)
})

it("Should validate that an empty cart has 0 items", function() {
    utils.addItemToCart({"name": "1g", "price": 70, "quantity": 0})
    expect(utils.getShoppingCart()).to.eql([])
    expect(utils.getNumItemsInCart()).to.equal(0)
})

it("Should return the total cost of all items in the cart", function() {
    utils.addItemToCart(utils.createItem("puff bar", 15))
    utils.addItemToCart(utils.createItem("1g", 70))
    utils.addItemToCart(utils.createItem("flowers", 5))

    expect(utils.totalCostInCart()).to.equal(90)

})
