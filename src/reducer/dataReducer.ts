import { AnyAction } from "redux";
import { Actions } from "../actions";

 interface Block {
        title: string,
        images: string[]
    }

interface stateI {
	data: Block[],
    pag : number
}

const initialState: stateI = {
	data:[],
    pag:0
};

interface actionI {
	type: string;
}

export default function dataReducer(state: stateI = initialState, action: AnyAction) {

    switch (action.type) {
        case Actions.FETCH_DATA:
            return{
                ...state,
                data: action.payload
            };
        case Actions.NEXT:
            return{
                ...state,
                pag: state.pag < 3 ? state.pag + 1 : state.pag // state.data.length === 3
            }
        case Actions.PREVIOUS:
            return{
                ...state,
                pag: state.pag ? state.pag - 1 : state.pag
            }
        default:
            return state;
    }
    
}