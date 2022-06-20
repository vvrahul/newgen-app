import { GET_CSV_DATA } from "./constants";

const newGenReducer = (state = { csvData: [] }, action) => {
    switch (action.type) {
        case GET_CSV_DATA:
            return {
                ...state,
                csvData: action.payload,
            }

        default:
            return state
    }
}

export default newGenReducer;