import { AnyAction } from "redux";
import { Actions } from "../actions";

interface Block {
  title: string;
  images: string[];
}

export interface stateApp {
  data: Block[];
  pag: number;
}

const initialState: stateApp = {
  data: [],
  pag: 0,
};

export default function dataReducer(
  state: stateApp = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case Actions.FETCH_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case Actions.NEXT:
      return {
        ...state,
        pag: state.pag < 2 ? state.pag + 1 : state.pag,
      };
    case Actions.PREVIOUS:
      return {
        ...state,
        pag: state.pag ? state.pag - 1 : state.pag,
      };
    default:
      return state;
  }
}
