// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
    return "Hello"
}

// returns the area of a rectangle
const area = (w, h) => {
    return h * w
}

// returns the perimeter of a rectangle
const perimeter = (w, h) => {
    return 2 * (h + w)
}

// returns the area of a circle
const circleArea = r => {
    return Math.PI * Math.pow(r, 2)
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
    shoppingCart.length = 0
}

const createItem = (name, price) => {
    return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
    return shoppingCart
}

const addItemToCart = (item) => {
    if (item.quantity >= 1) {
        let found = false
        shoppingCart.forEach(function(cartItem) {
            if ( cartItem.name === item.name && cartItem.price === item.price ) {
                found = true
                cartItem.quantity += item.quantity
                return
            }
        });
        if (!found){
            shoppingCart.push(item)
        }
    }
}

const getNumItemsInCart = () => {
    let totalItems = 0
    shoppingCart.forEach(function(cartItem) {
        totalItems += cartItem.quantity
    });
    return totalItems
}

const removeItemFromCart = (item) => {
    shoppingCart.forEach(function(cartItem, i, cart) {
        if ( cartItem.name === item.name && cartItem.price === item.price ) {
            if (cartItem.quantity > item.quantity) {
                cartItem.quantity -= item.quantity
            } else {
                cart.splice(i, 1);
            }
        }
    });

}

const totalCostInCart = () => {
    let totalCost = 0;
    shoppingCart.forEach(function(cartItem) {
        totalCost += cartItem.price
    });
    return totalCost

}

module.exports = {
    sayHello, area, perimeter, circleArea,
    clearCart, createItem, getShoppingCart, addItemToCart,
    getNumItemsInCart, removeItemFromCart, totalCostInCart
}
