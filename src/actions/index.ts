import axios from 'axios';
import { Dispatch } from 'redux';

export enum Actions {
	FETCH_DATA = 'FETCH_DATA',
	NEXT= 'NEXT',
	PREVIOUS = ''
}
const url = 'http://10.0.2.2:3001/data';

export const getData = () => {
	return async (dispatch:Dispatch) => {
		axios.get(url).then(response=>{

			dispatch({
				type: 'FETCH_DATA',
				payload: response.data,
			});
			
		}).catch(error=>{
			console.log(error);
			
		})
        
	};
};