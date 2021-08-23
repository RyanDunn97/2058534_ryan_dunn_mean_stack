function addToCart(itemName: string, price: number): void{
    // create object from input
    let cartItem = {item:itemName, pr:price};
    // store the object in local storage
    let wholeCart = JSON.parse(localStorage.getItem("wholeCart") || "[]");
    wholeCart.push(cartItem);
    localStorage.setItem("wholeCart", JSON.stringify(wholeCart));

    // add 1 to the cart size 
    let cartSizeElement = document.getElementById("cart-size");
    let cartSizeCount = parseInt(cartSizeElement.innerHTML);
    ++cartSizeCount;
    cartSizeElement.innerHTML = cartSizeCount + "";

}

function createTable(): void{
    // create the table same way we did for budget assignment
    // retrieve info from storage
    let wholeCart = JSON.parse(localStorage.getItem("wholeCart") || "[]");

    // table setup
    let cartTotal = 0;
    let tableContent = "";
    let startTable = "<table border=1 class='table'><tr><th>Item</th><th>Price</th></tr>";
    let endTable = "</table>";

    // for loop for the contents of the table and adding total price
    wholeCart.forEach(Element=>{
        tableContent += "<tr><td>" + Element.item + "</td><td>" + Element.pr + "</td></tr>";
        cartTotal += parseInt(Element.pr);
    });

    // display table
    document.getElementById("cartTable").innerHTML = startTable + tableContent + endTable;

    // display total price
    let cartMessage = "Total Price: " + cartTotal;
    document.getElementById("totalPrice").innerHTML = cartMessage;
}