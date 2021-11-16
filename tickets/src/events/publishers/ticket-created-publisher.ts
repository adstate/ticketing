import { Subjects, Publisher, TicketCreatedEvent } from '@_ftickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
