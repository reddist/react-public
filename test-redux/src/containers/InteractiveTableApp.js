import React, {Component} from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TableActions from '../actions/TableActions';
import { Table} from '../components/Table';
import { AddColumnInput } from '../components/AddColumnInput';

export default @connect(state => ({
    columnList: state.columnList
})) class InteractiveTableApp extends Component{
    render () {
        const { columnList: { columnsByHeader }, dispatch } = this.props;
        const actions = bindActionCreators(TableActions, dispatch);

        return (
            <div>
                <h1>The Table App</h1>
                <AddColumnInput addColumn = {actions.addColumn} />
                <Table columns = {columnsByHeader} actions = {actions} />
            </div>
        );
    }
}

