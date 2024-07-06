import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { nanoid } from 'nanoid';
import { Observable } from 'rxjs';
import { IClient } from '../app/clients/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {}

  getClients(): Observable<IClient[]>  { 
    return this.http.get<IClient[]>('api/clientData');
  }

  saveClient(contact: Partial<IClient>): Observable<IClient> {
    const headers = { headers: { 'Content-Type': 'application/json' } };

    if (!contact.id) {
      let newContact: Partial<IClient> = { ...contact, id:  nanoid(5)};
      return this.http.post<IClient>('api/clientData/', newContact, headers)
    }
    else
      return this.http.put<IClient>('api/clientData/', contact, headers)
  }
}
