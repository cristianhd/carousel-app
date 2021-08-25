import axios from 'axios';
import { Dispatch } from 'redux';

export enum Actions {
	FETCH_DATA = 'FETH_DATA',
	NEXT= 'NEXT',
	PREVIOUS = ''
}
const url = 'http://localhost:3001/data';

export const getData = () => {
	return async (dispatch:Dispatch) => {
		axios.get(url).then(response=>{

			dispatch({
				type: 'FETCH_DATA',
				payload: response.data,
			});
			console.log(response);
		}).catch(error=>{
			console.log(error);
			
		})
        
	};
};