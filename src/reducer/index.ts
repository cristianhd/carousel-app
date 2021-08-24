import { combineReducers } from "redux";
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
  dataReducer: dataReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export { rootReducer };