document.addEventListener("DOMContentLoaded", function () {
    let cart = [];  // Armazenar os itens do carrinho

    function updateCart() {
        const cartCount = document.getElementById("cart-count");
        const cartItemsList = document.getElementById("cart-items");
        const totalPrice = document.getElementById("total-price");

        cartCount.textContent = cart.length;
        cartItemsList.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.product} - $${item.price}`;
            cartItemsList.appendChild(li);
            total += parseFloat(item.price);
        });

        totalPrice.textContent = `$${total.toFixed(2)}`;
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const product = button.getAttribute("data-product");
            const price = button.getAttribute("data-price");
            const image = button.getAttribute("data-image");

            cart.push({ product, price, image });
            updateCart();
        });
    });

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            let notification = document.createElement("div");
            notification.innerHTML = "Produto adicionado ao carrinho!";
            notification.classList.add("cart-notification");
            document.body.appendChild(notification);

            setTimeout(() => {
                notification.remove();
            }, 2000);
        });
    });

    function isLoggedIn() {
        return localStorage.getItem("loggedIn") === "true";
    }

    document.getElementById("login-form")?.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username && password) {
            localStorage.setItem("loggedIn", "true");
            alert("Login bem-sucedido!");
            window.location.href = "index.html";
        } else {
            alert("Preencha todos os campos!");
        }
    });

    document.getElementById("logout-button")?.addEventListener("click", function () {
        localStorage.removeItem("loggedIn");
        alert("Você saiu da conta.");
        window.location.href = "index.html";

    });

});