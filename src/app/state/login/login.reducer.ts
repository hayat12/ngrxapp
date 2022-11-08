import { createReducer, on } from "@ngrx/store";
import { createLogin } from "./login.action";

const initialState = {
  username: "",
  password: ""
}
export const loginReducer = createReducer(
  initialState,
  on(createLogin, (state, { login }) => login),
)
