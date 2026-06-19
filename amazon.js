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

/* LOGIN MODAL */

const loginModal =
document.getElementById("loginModal");

const openLogin =
document.getElementById("openLogin");

const closeLogin =
document.getElementById("closeLogin");

if(openLogin){

    openLogin.addEventListener("click", () => {

        loginModal.style.display = "flex";

    });

}

if(closeLogin){

    closeLogin.addEventListener("click", () => {

        loginModal.style.display = "none";

    });

}

/* LOGIN */

const loginSubmit =
document.getElementById("loginSubmit");

if(loginSubmit){

    loginSubmit.addEventListener("click", () => {

        const username =
        document.getElementById("username").value;

        const password =
        document.getElementById("password").value;

        if(username === "" || password === ""){

            alert("Please fill all fields");
            return;
        }

        localStorage.setItem(
            "amazonUser",
            username
        );

        document.getElementById(
            "username-display"
        ).innerText = username;

        loginModal.style.display = "none";

        alert("Login Successful");

    });

}

/* CHECKOUT MODAL */

const checkoutModal =
document.getElementById("checkoutModal");

const openCheckout =
document.getElementById("openCheckout");

const closeCheckout =
document.getElementById("closeCheckout");

if(openCheckout){

    openCheckout.addEventListener("click", () => {

        checkoutModal.style.display = "flex";

    });

}

if(closeCheckout){

    closeCheckout.addEventListener("click", () => {

        checkoutModal.style.display = "none";

    });

}

/* PLACE ORDER */

const placeOrder =
document.getElementById("placeOrder");

if(placeOrder){

    placeOrder.addEventListener("click", () => {

        alert("Order Placed Successfully!");

        cartCount = 0;

        localStorage.setItem(
            "cartCount",
            0
        );

        const cart =
        document.getElementById(
            "cart-count"
        );

        if(cart){
            cart.innerText = "0";
        }

        checkoutModal.style.display =
        "none";

    });

}