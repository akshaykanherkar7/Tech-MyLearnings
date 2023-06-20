export class BuyingTicketStatus {
    BuyingTicket(status) {
        return this.status = status;
    }

    BuyingTicketStats(status) {
        return this.status === status;
    }
}