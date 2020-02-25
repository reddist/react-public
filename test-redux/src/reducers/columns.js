import * as types from '../actions/ActionTypes'

const initialState = {
    headers: ['Cities'],
    columnsByHeader: {
        'Cities': {
            header: 'Cities',
            data: [ 'zzi', 'adf', 'beer', 'magic', 'hols', 'hog']
        },
    }
};

export default function columns(state = initialState, action) {
    switch (action.type) {
        case types.ADD_COLUMN:
            const newHeader = action.column_name;
            return {
                headers: state.headers.concat(newHeader),
                columnsByHeader: {
                    ...state.columnsByHeader,
                    [newHeader]: {
                        header: newHeader,
                        data: action.column_data
                    }
                }
            };
        default:
            return state;
    }
}
