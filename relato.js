// script.js

// Código existente para produtos, carrinho, etc.

const orders = []; // Armazena os pedidos finalizados

// Modifique a função finalizeOrder para salvar o pedido
function finalizeOrder() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    // Salva o pedido
    orders.push({
        id: orders.length + 1,
        date: new Date(),
        items: [...cart],
        total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    });

    alert('Pedido finalizado com sucesso!');
    cart = [];
    updateCart();
}

// Função para gerar relatório de vendas
function generateSalesReport() {
    if (orders.length === 0) {
        alert('Nenhum pedido foi realizado ainda!');
        return;
    }

    const reportContainer = document.getElementById('sales-report');
    reportContainer.innerHTML = ''; // Limpa o relatório existente

    // Cria a tabela do relatório
    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>ID do Pedido</th>
                <th>Data</th>
                <th>Quantidade de Itens</th>
                <th>Total (R$)</th>
            </tr>
        </thead>
        <tbody>
            ${orders.map(order => `
                <tr>
                    <td>${order.id}</td>
                    <td>${order.date.toLocaleString()}</td>
                    <td>${order.items.length}</td>
                    <td>${order.total.toFixed(2)}</td>
                </tr>
            `).join('')}
        </tbody>
        <tfoot>
            <tr>
                <th colspan="3">Total de Vendas</th>
                <th>R$ ${orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}</th>
            </tr>
        </tfoot>
    `;

    reportContainer.appendChild(table);
}
