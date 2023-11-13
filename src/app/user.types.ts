export interface User {
  id: number;
  isActive: boolean;
  name: {
    first: string;
    last: string;
  };
  fullName: string;
  email: string;
  city: string;
  zipcode: string;
  phone: string;
  website: string;
  registrationDate: string;
}
