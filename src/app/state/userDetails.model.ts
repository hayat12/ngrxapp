export interface UserDetails{
  id:number;
  username:string;
  email?: string;
  phone?: string;
  address?:{
    address1:string;
    address2:string;
    postcode:string;
    country:string;
    state:string
    city:string
  }
}
