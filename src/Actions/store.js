import { createStore, ApplyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

export const store = createStore({}, compose(ApplyMiddleware(thunk)));
