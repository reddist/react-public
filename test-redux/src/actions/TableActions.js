import * as types from './ActionTypes';

export function addColumn(column_name, column_data) {
    return {
        type: types.ADD_COLUMN,
        column_name,
        column_data
    };
}
