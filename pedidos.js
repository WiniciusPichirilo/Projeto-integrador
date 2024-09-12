// script.js

// Lista de produtos (exemplo)
const products = [
    { id: 1, name: 'Produto 1', price: 100, image: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Produto 2', price: 150, image: 'https://via.placeholder.com/100' },
    { id: 3, name: 'Produto 3', price: 200, image: 'https://via.placeholder.com/100' },
];

// Carrinho de compras
let cart = [];

// Função para carregar os produtos
function loadProducts() {
    const productContainer = document.getElementById('products');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>R$ ${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        `;
        productContainer.appendChild(productElement);
    });
}

// Função para adicionar um produto ao carrinho
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
}

// Função para remover um produto do carrinho
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Função para atualizar o carrinho
function updateCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';

    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Quantidade: ${item.quantity}</p>
            <p>Total: R$ ${(item.price * item.quantity).toFixed(2)}</p>
            <button onclick="removeFromCart(${item.id})">Remover</button>
        `;
        cartContainer.appendChild(cartItemElement);
    });

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Função para finalizar o pedido
function finalizeOrder() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    alert('Pedido finalizado com sucesso!');
    cart = [];
    updateCart();
}

// Carrega os produtos ao carregar a página
window.onload = loadProducts;
