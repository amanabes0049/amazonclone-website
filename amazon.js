// Cart Functionality
console.log("Amazon JS Loaded");
let cartCount = 0;

const cartButtons = document.querySelectorAll(".cart-btn");
const cartDisplay = document.getElementById("cart-count");

if(cartDisplay){
    cartDisplay.innerText = cartCount;
}

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cartDisplay.innerText = cartCount;

        localStorage.setItem("cartCount", cartCount);

        alert("Product Added To Cart!");
    });

});

// Load saved cart count

window.onload = () => {

    let savedCart = localStorage.getItem("cartCount");

    if(savedCart){
        cartCount = parseInt(savedCart);
        cartDisplay.innerText = cartCount;
    }
};

// Back To Top Button

const backToTop = document.querySelector(".foot-panel1");

if(backToTop){

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}
/* LOGIN */

function loginUser(){

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;

    if(username === "" || password === ""){

        alert("Please fill all fields");
        return;
    }

    localStorage.setItem(
        "amazonUser",
        username
    );

    alert("Login Successful");

    window.location.href =
    "amazon.html";
}

/* DISPLAY USER */

window.addEventListener("load", () => {

    let user =
    localStorage.getItem("amazonUser");

    let userDisplay =
    document.getElementById(
        "username-display"
    );

    if(user && userDisplay){

        userDisplay.innerText = user;
    }

});

/* CHECKOUT */

const placeOrderBtn = document.getElementById("placeOrder");

if(placeOrderBtn){

    placeOrderBtn.addEventListener("click", () => {

        alert("Order Placed Successfully!");

        localStorage.setItem("cartCount", 0);

        window.location.href = "amazon.html";

    });

}

