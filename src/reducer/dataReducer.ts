import { AnyAction } from "redux";

 interface Block {
        title: string,
        images: string[]
    }

interface stateI {
	data: Block[]
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