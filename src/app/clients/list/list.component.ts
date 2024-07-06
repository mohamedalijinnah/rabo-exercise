import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientService } from '../../../services/client.service';
import { IClient } from '../client.model';
import { OrderByPipe } from './order-by.pipe';

@Component({
  selector: 'rabo-client-list',
  standalone: true,
  imports: [RouterModule, OrderByPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  clients: IClient[] = [];
  orderByField: string = 'firstName';

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.clientService.getClients().subscribe((clients: IClient[]) => {
      this.clients = clients;
    });
  }
}
