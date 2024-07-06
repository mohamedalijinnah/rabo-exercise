import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ClientService } from '../../../services/client.service';
import { InMemoryDataService } from '../../../services/in-memory-data.service';
import { IClient } from '../client.model';

@Component({
  selector: 'rabo-view',
  standalone: true,
  providers:[InMemoryDataService],
  imports: [RouterModule, HttpClientInMemoryWebApiModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
})
export class ViewComponent {
  client: IClient | undefined;
  constructor(
    private clientRepository: ClientService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.clientRepository.getClients().subscribe((clients: IClient[]) => {
      const clientId = this.route.snapshot.params['id'];
      this.client = clients.find((item) => item.id?.toString() === clientId);
    });
  }
}
