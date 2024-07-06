import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IClient } from '../app/clients/client.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let clientData: IClient[] = [
      {
        id: "1",
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice.johnson@example.com",
        address: {
          streetName: "Maple Street",
          postalCode: "1234 AB",
          houseNumber: 12,
          city: "Amsterdam"
        },
      },
      {
        id: "2",
        firstName: "Bob",
        lastName: "Smith",
        email: "bob.smith@example.com",
        address: {
          streetName: "Oak Avenue",
          postalCode: "5678 CD",
          houseNumber: 24,
          city: "Rotterdam"
        }
      },
      {
        id: "3",
        firstName: "Eva",
        lastName: "Brown",
        email: "eva.brown@example.com",
        address: {
          streetName: "Cedar Lane",
          postalCode: "9012 EF",
          houseNumber: 36,
          city: "Utrecht"
        }
      },
      {
        id: "4",
        firstName: "David",
        lastName: "Miller",
        email: "david.miller@example.com",
        address: {
          streetName: "Birch Road",
          postalCode: "3456 GH",
          houseNumber: 48,
          city: "The Hague"
        }
      },
      {
        id: "5",
        firstName: "Sophia",
        lastName: "Lee",
        email: "sophia.lee@example.com",
        address: {
          streetName: "Elm Street",
          postalCode: "7890 IJ",
          houseNumber: 60,
          city: "Groningen"
        }
      },
      {
        id: "6",
        firstName: "Daniel",
        lastName: "Wilson",
        email: "daniel.wilson@example.com",
        address: {
          streetName: "Pine Avenue",
          postalCode: "2345 KL",
          houseNumber: 72,
          city: "Eindhoven"
        }
      },
      {
        id: "7",
        firstName: "Olivia",
        lastName: "Garcia",
        email: "olivia.garcia@example.com",
        address: {
          streetName: "Willow Lane",
          postalCode: "6789 MN",
          houseNumber: 84,
          city: "Leeuwarden"
        }
      },
      {
        id: "8",
        firstName: "James",
        lastName: "Martinez",
        email: "james.martinez@example.com",
        address: {
          streetName: "Spruce Road",
          postalCode: "0123 OP",
          houseNumber: 96,
          city: "Maastricht"
        }
      },
      {
        id: "9",
        firstName: "Isabella",
        lastName: "Lopez",
        email: "isabella.lopez@example.com",
        address: {
          streetName: "Cherry Street",
          postalCode: "4567 QR",
          houseNumber: 108,
          city: "Gouda"
        }
      },
      {
        id: "10",
        firstName: "William",
        lastName: "Harris",
        email: "william.harris@example.com",
        address: {
          streetName: "Chestnut Avenue",
          postalCode: "8901 ST",
          houseNumber: 120,
          city: "Zwolle"
        }
      },
      {
        id: "11",
        firstName: "Ava",
        lastName: "Clark",
        email: "ava.clark@example.com",
        address: {
          streetName: "Walnut Lane",
          postalCode: "2345 UV",
          houseNumber: 132,
          city: "Arnhem"
        }
      },
      {
        id: "12",
        firstName: "Alexander",
        lastName: "Young",
        email: "alexander.young@example.com",
        address: {
          streetName: "Hickory Road",
          postalCode: "6789 WX",
          houseNumber: 144,
          city: "Nijmegen"
        }
      }
    ];
    return { clientData };
  }
}
