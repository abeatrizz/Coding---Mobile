document.addEventListener("DOMContentLoaded", function () {
    let cart = [];  // Array para armazenar os itens do carrinho

    // Função para atualizar o carrinho
    function updateCart() {
        const cartCount = document.getElementById("cart-count");  // Contador de itens no carrinho
        const cartItemsList = document.getElementById("cart-items");  // Lista de itens no carrinho
        const totalPrice = document.getElementById("total-price");  // Total a ser exibido

        // Atualiza a contagem de itens no carrinho
        cartCount.textContent = cart.length;

        // Limpar a lista de itens do carrinho e recalcular o preço total
        cartItemsList.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            // Criar um item da lista
            const li = document.createElement("li");
            li.textContent = `${item.product} - $${item.price}`;
            cartItemsList.appendChild(li);

            // Acumular o preço total
            total += parseFloat(item.price);
        });

        // Atualizar o preço total
        totalPrice.textContent = `$${total.toFixed(2)}`;
    }

    // Função para adicionar produtos ao carrinho
    const addToCartButtons = document.querySelectorAll(".add-to-cart");  // Seleciona todos os botões de adicionar ao carrinho
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const product = button.getAttribute("data-product");  // Nome do produto
            const price = button.getAttribute("data-price");  // Preço do produto
            const image = button.getAttribute("data-image");  // Imagem do produto

            // Adiciona o produto ao carrinho
            cart.push({ product, price, image });

            // Atualiza a interface do carrinho
            updateCart();
        });
    });

    // Função para redirecionar para a página do carrinho
    const cartPageButton = document.getElementById("cart-page");
    cartPageButton.addEventListener("click", function () {
        // Simula a navegação para a página do carrinho
        alert("Você foi redirecionado para a página do carrinho.");
        // Para redirecionar para outra página, descomente a linha abaixo:
        // window.location.href = "pagina-do-carrinho.html";  // Altere o URL para a página do carrinho
    });
});
