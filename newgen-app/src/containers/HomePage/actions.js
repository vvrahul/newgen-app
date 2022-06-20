
import { GET_CSV_DATA } from './constants';

export function getCsvData(result) {
    return {
      type: GET_CSV_DATA,
      payload: result
    };
  }

  export async function fetchCsvData(dispatch) {
    const result = await fetch('getcsvdata');
    Promise.resolve(result.json()).then(res => {
        dispatch(getCsvData(res))
    });
  }