import { createFeatureSelector } from "@ngrx/store";
import { AppState } from "./app.model";

export const selectApp = createFeatureSelector<any>('app');
