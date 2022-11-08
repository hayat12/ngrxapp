import { createReducer, on } from "@ngrx/store";
import { routeAction } from "./app.action";
import { AppState } from "./app.model";

export const initialState: AppState = {
  data: null,
  route: "",
  loading: false,
  isLogin:false,
  userDetails: {
    id: 0,
    username: ""
  }
};

export const appRouteAction = createReducer(
  initialState,
  on(routeAction, (state, {app})=>app)
)
