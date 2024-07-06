export interface IClient
{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    address: IAddress;
}

export interface IAddress{
    streetName: string;
    postalCode: string;
    houseNumber: number;
    city: string;
}