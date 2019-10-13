export class User1 {
    id: number;
    gender: string;
    location: Array<{street: string, city: string,
        state: string, postcode: number, timezone: string}[]>
    email: string;
    dob: Date;
    phone: number;
    cell: number;
    image: any;
    firstName: string;
    lastName: string;
    nameTitle: string;
    username: string;
    password: any; 
}