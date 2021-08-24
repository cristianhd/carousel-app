import axios from 'axios';
import { Dispatch } from 'redux';

export enum Actions {
	FETCH_DATA = 'FETH_DATA',
	NEXT= 'NEXT',
	PREVIOUS = 'PREVIOUS'
}
const url = 'https://localhost:3001/data';

export const getData = () => {
	return async (dispatch:Dispatch) => {
		const response = await axios.get(url);
        console.log(response);
        
		dispatch({
			type: 'FETCH_DATA',
			payload: response.data,
		});
	};
};