import { AnyAction } from "redux";

interface stateI {
	data: any[];
}

const initialState: stateI = {
	data:[]
};

interface actionI {
	type: string;
}

export default function dataReducer(state: stateI = initialState, action: AnyAction) {

    switch (action.type) {
        case 'FETCH_DATA':
            return{
                data: action.payload
            };    
        default:
            return state;
    }
    
}