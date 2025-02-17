// Armazenamento dos itens do carrinho
let cart = [];

// Função para atualizar o contador de itens no carrinho
function updateCartCount() {
    const cartCount = document.querySelector('.badge');
    cartCount.textContent = cart.length;
}

// Função para adicionar um item ao carrinho
function addToCart(productId, productName, productPrice) {
    const product = {
        id: productId,
        name: productName,
        price: productPrice,
        quantity: 1
    };

    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push(product);
    }

    updateCartCount();
}

// Função para exibir os itens do carrinho na página de carrinho
function displayCartItems() {
    const cartContainer = document.querySelector('#cart-items');
    cartContainer.innerHTML = ''; // Limpar antes de adicionar os novos itens

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <div>${item.name}</div>
            <div>$${item.price}</div>
            <div>Quantity: ${item.quantity}</div>
        `;
        cartContainer.appendChild(cartItem);
    });
}

// Função para abrir o carrinho de compras
function openCart() {
    displayCartItems();
    document.querySelector('#cart-modal').classList.add('open');
}

// Função para fechar o carrinho
function closeCart() {
    document.querySelector('#cart-modal').classList.remove('open');
}

// Event listeners
document.querySelector('#view-cart-btn').addEventListener('click', openCart);
document.querySelector('#close-cart-btn').addEventListener('click', closeCart);
