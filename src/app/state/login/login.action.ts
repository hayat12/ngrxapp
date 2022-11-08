import { createAction, props } from "@ngrx/store";
import { Login } from "./login.model";

export const POST_LOGIN = "[POST_LOGIN] login";

export const createLogin = createAction(
  POST_LOGIN,
  props<{login:Login}>()
)
