import { createAction, props } from "@ngrx/store";
import { AppState } from "./app.model";
const ROUTE_ACTION = "[ ROUTE - ACTION] ROUTE_ACTION";

export const routeAction = createAction(
  ROUTE_ACTION,
  props<{ app: AppState }>()
);
