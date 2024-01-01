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

export interface ProfileType {
  _id?: string;
  email: string;
  name: string;
  password: string;
  phone: string | number;
  address: string;
}
