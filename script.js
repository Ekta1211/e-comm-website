//sidebar menu
document.addEventListener('DOMContentLoaded', function () {
    const menuCheckbox = document.getElementById('menu');
    const menuItem = document.querySelector('.menu-item');
    const closeButton = document.getElementById('close');
    const menuButton = document.querySelector('.logo-item label img');
    const btnPre = document.querySelector('.btn-pre');
    const addCart = document.querySelector('.icon-cart');
    const cartItem = document.querySelector('.cartBox');
    const plusIcon = document.getElementById('plus');
    const minusIcon = document.getElementById('minus');
    const itemCount = document.querySelector('.qty span');
    const addToCartButton = document.querySelector('.add-cart');
    const cartItemsList = document.querySelector('.cartBox .cartItem .itemDetail');
    const emptyCartMessage = document.querySelector('.emptyCartMessage');
    const cartBtn = document.querySelector('.cartBtn');

    let itemQuantity = 0;

    menuButton.addEventListener('click', function () {
        menuCheckbox.checked = true;
        menuItem.style.left = '0';
        btnPre.style.display = 'none'; // Hide the button when the sidebar is open
    });

    closeButton.addEventListener('click', function () {
        menuCheckbox.checked = false;
        menuItem.style.left = '-300px';
        btnPre.style.display = 'block'; // Show the button when the sidebar is closed
    });

    addCart.addEventListener('click', function () {
        if (cartItem.style.display === 'block') {
            cartItem.style.display = 'none';
        } else {
            cartItem.style.display = 'block';
        }
    });

    plusIcon.addEventListener('click', function () {
        itemQuantity++;
        itemCount.textContent = itemQuantity;
    });

    minusIcon.addEventListener('click', function () {
        if (itemQuantity > 0) {
            itemQuantity--;
            itemCount.textContent = itemQuantity;
        }
    });

    addToCartButton.addEventListener('click', function () {
        if (itemQuantity > 0) {
            const productName = "Fall Limited Edition Sneakers";
            const productPrice = 125.00;
            const total = (productPrice * itemQuantity).toFixed(2);

            cartItemsList.innerHTML = `
                <img src="./images/image-product-1-thumbnail.jpg" alt="product-1">
                <div class="text">
                    <h3>${productName}</h3>
                    <p><span class="amt">$${productPrice.toFixed(2)} X </span><span class="quantity">${itemQuantity} </span> <span class="paid">$${total}</span></p>
                </div>
                <img src="./images/icon-delete.svg" alt="Delete" id="delBtn" class="deleteBtn">
            `;

            cartItemsList.style.display = 'flex';
            emptyCartMessage.style.display = 'none';
            cartBtn.style.display = 'block';

            cartItem.style.display = 'block';
            itemQuantity = 0; // Reset quantity after adding to cart
            itemCount.textContent = itemQuantity;
        } else {
            alert("Please select at least one item to add to cart.");
        }
    });

    cartItemsList.addEventListener('click', function (event) {
        if (event.target.classList.contains('deleteBtn')) {
            cartItemsList.innerHTML = '';
            cartItemsList.style.display = 'none';
            emptyCartMessage.style.display = 'block';
            cartBtn.style.display = 'none';
        }
    });

    // Initial check for empty cart
    if (!cartItemsList.hasChildNodes()) {
        emptyCartMessage.style.display = 'block';
        cartItemsList.style.display = 'none';
        cartBtn.style.display = 'none';
    }

    
});



//image slider
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mainImg");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    };

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

