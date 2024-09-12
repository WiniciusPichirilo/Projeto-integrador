// Models/Ticket.cs
using System;
using SupportSystem.Models;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SupportSystem.Models;
using SupportSystem.Services;
using System.Collections.Generic;

namespace SupportSystem.Models
{
    public class Ticket
    {
        public int Id { get; set; }
        public string CustomerName { get; set; }
        public string CustomerEmail { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
        public DateTime DateCreated { get; set; }
    }
}
// Services/TicketService.cs
namespace SupportSystem.Services
{
    public class TicketService
    {
        private List<Ticket> tickets = new List<Ticket>();
        private int nextId = 1;

        // Retorna todos os tickets
        public List<Ticket> GetAllTickets()
        {
            return tickets;
        }

        // Cria um novo ticket
        public Ticket CreateTicket(Ticket newTicket)
        {
            newTicket.Id = nextId++;
            newTicket.Status = "Aberto";
            newTicket.DateCreated = System.DateTime.Now;
            tickets.Add(newTicket);
            return newTicket;
        }

        // Fecha um ticket
        public bool CloseTicket(int id)
        {
            var ticket = tickets.FirstOrDefault(t => t.Id == id);
            if (ticket != null)
            {
                ticket.Status = "Fechado";
                return true;
            }
            return false;
        }
    }
}
// Controllers/TicketController.cs


namespace SupportSystem.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TicketController : ControllerBase
    {
        private readonly TicketService _ticketService;

        public TicketController()
        {
            _ticketService = new TicketService();
        }

        // Endpoint para obter todos os tickets
        [HttpGet]
        public ActionResult<List<Ticket>> GetAllTickets()
        {
            return _ticketService.GetAllTickets();
        }

        // Endpoint para criar um novo ticket
        [HttpPost]
        public ActionResult<Ticket> CreateTicket(Ticket newTicket)
        {
            var ticket = _ticketService.CreateTicket(newTicket);
            return Ok(ticket);
        }

        // Endpoint para fechar um ticket
        [HttpPut("{id}/close")]
        public ActionResult CloseTicket(int id)
        {
            var success = _ticketService.CloseTicket(id);
            if (success)
            {
                return Ok();
            }
            return NotFound();
        }
    }
}
