const stock = {}; // Objeto para armazenar os produtos e suas quantidades

function addOrder() {
    const product = document.getElementById('product').value;
    const quantity = parseInt(document.getElementById('quantity').value);

    if (product && quantity) {
        // Adiciona ou atualiza a quantidade do produto no estoque
        if (stock[product]) {
            stock[product] += quantity;
        } else {
            stock[product] = quantity;
        }

        updateStockTable(); // Atualiza a tabela de estoque
    }
}

function updateStockTable() {
    const stockTableBody = document.getElementById('stockTable').getElementsByTagName('tbody')[0];
    stockTableBody.innerHTML = ''; // Limpa a tabela antes de atualizá-la

    // Preenche a tabela com os dados do estoque
    for (const product in stock) {
        const row = stockTableBody.insertRow();

        const cellProduct = row.insertCell(0);
        const cellQuantity = row.insertCell(1);

        cellProduct.textContent = product;
        cellQuantity.textContent = stock[product];
    }
}
function submitTicket() {
    const customerName = document.getElementById('customerName').value;
    const customerEmail = document.getElementById('customerEmail').value;
    const ticketDescription = document.getElementById('ticketDescription').value;

    const ticket = {
        customerName: customerName,
        customerEmail: customerEmail,
        description: ticketDescription
    };

    fetch('http://localhost:5000/api/ticket', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ticket)
    })
    .then(response => response.json())
    .then(data => {
        alert('Ticket enviado com sucesso!');
        console.log(data);
    })
    .catch(error => console.error('Erro ao enviar ticket:', error));

    const stock = {}; // Objeto para armazenar os produtos e suas quantidades
 
function addOrder() {
    const product = document.getElementById('product').value;
    const quantity = parseInt(document.getElementById('quantity').value);
 
    if (product && quantity) {
        // Adiciona ou atualiza a quantidade do produto no estoque
        if (stock[product]) {
            stock[product] += quantity;
        } else {
            stock[product] = quantity;
        }
 
        updateStockTable(); // Atualiza a tabela de estoque
    }
}
 
function updateStockTable() {
    const stockTableBody = document.getElementById('stockTable').getElementsByTagName('tbody')[0];
    stockTableBody.innerHTML = ''; // Limpa a tabela antes de atualizá-la
 
    // Preenche a tabela com os dados do estoque
    for (const product in stock) {
        const row = stockTableBody.insertRow();
 
        const cellProduct = row.insertCell(0);
        const cellQuantity = row.insertCell(1);
 
        cellProduct.textContent = product;
        cellQuantity.textContent = stock[product];
    }
}
}

