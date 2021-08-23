function addToCart(itemName, price) {
    // create object from input
    var cartItem = { item: itemName, pr: price };
    // store the object in local storage
    var wholeCart = JSON.parse(localStorage.getItem("wholeCart") || "[]");
    wholeCart.push(cartItem);
    localStorage.setItem("wholeCart", JSON.stringify(wholeCart));
    // add 1 to the cart size 
    var cartSizeElement = document.getElementById("cart-size");
    var cartSizeCount = parseInt(cartSizeElement.innerHTML);
    ++cartSizeCount;
    cartSizeElement.innerHTML = cartSizeCount + "";
}
function createTable() {
    // create the table same way we did for budget assignment
    // retrieve info from storage
    var wholeCart = JSON.parse(localStorage.getItem("wholeCart") || "[]");
    // table setup
    var cartTotal = 0;
    var tableContent = "";
    var startTable = "<table border=1 class='table'><tr><th>Item</th><th>Price</th></tr>";
    var endTable = "</table>";
    // for loop for the contents of the table and adding total price
    wholeCart.forEach(function (Element) {
        tableContent += "<tr><td>" + Element.item + "</td><td>" + Element.pr + "</td></tr>";
        cartTotal += parseInt(Element.pr);
    });
    // display table
    document.getElementById("cartTable").innerHTML = startTable + tableContent + endTable;
    // display total price
    var cartMessage = "Total Price: " + cartTotal;
    document.getElementById("totalPrice").innerHTML = cartMessage;
}
