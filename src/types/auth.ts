export interface LoginType {
  email: string;
  password: string;
}

export interface RegisterType {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
}

export interface ResponseAuth {
  message: string;
  success: boolean;
  data: any;
}
