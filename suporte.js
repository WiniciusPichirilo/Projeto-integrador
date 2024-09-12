// script.js

let tickets = [];

// Função para enviar um novo ticket
function submitTicket() {
    const customerName = document.getElementById('customerName').value;
    const customerEmail = document.getElementById('customerEmail').value;
    const ticketDescription = document.getElementById('ticketDescription').value;

    if (customerName === '' || customerEmail === '' || ticketDescription === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const ticket = {
        id: tickets.length + 1,
        name: customerName,
        email: customerEmail,
        description: ticketDescription,
        status: 'Aberto',
        date: new Date()
    };

    tickets.push(ticket);
    displayTickets();
    clearForm();
    alert('Ticket enviado com sucesso!');
}

// Função para exibir os tickets abertos
function displayTickets() {
    const ticketsContainer = document.getElementById('ticketsContainer');
    ticketsContainer.innerHTML = '';

    tickets.forEach(ticket => {
        const ticketItem = document.createElement('div');
        ticketItem.classList.add('ticket-item');
        ticketItem.innerHTML = `
            <h3>Ticket #${ticket.id} - ${ticket.status}</h3>
            <p><strong>Nome:</strong> ${ticket.name}</p>
            <p><strong>Email:</strong> ${ticket.email}</p>
            <p><strong>Data:</strong> ${ticket.date.toLocaleString()}</p>
            <p>${ticket.description}</p>
            <button onclick="closeTicket(${ticket.id})" class="close">Fechar Ticket</button>
        `;
        ticketsContainer.appendChild(ticketItem);
    });
}

// Função para fechar um ticket
function closeTicket(ticketId) {
    const ticket = tickets.find(t => t.id === ticketId);
    if (ticket) {
        ticket.status = 'Fechado';
        displayTickets();
        alert('Ticket fechado com sucesso!');
    }
}

// Função para limpar o formulário
function clearForm() {
    document.getElementById('customerName').value = '';
    document.getElementById('customerEmail').value = '';
    document.getElementById('ticketDescription').value = '';
}
