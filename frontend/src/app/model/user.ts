export interface User {
  id: number;
  isActive: boolean;
  balance: number;
  age: number;
  eyeColor: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  [key: string]: any;
}
