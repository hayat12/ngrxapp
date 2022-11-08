import { UserDetails } from "./userDetails.model";

export interface AppState{
  route:string,
  data: any,
  loading: boolean,
  isLogin:boolean,
  userDetails?: UserDetails
}
