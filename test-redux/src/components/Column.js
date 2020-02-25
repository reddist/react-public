import React, {Component} from "react";

export const Column = (props) => {
    const [sorted, setSorted] = React.useState(SortType.NO_SORT);

    const sortSpecial = (data, sort_type) => {
        if (sort_type === SortType.DOWN)
            return data.slice().sort();
        else
            if (sort_type === SortType.TOP)
                return data.slice().sort().reverse();
            else
                return data;
    };

    function returnSortedSymbol(sort_type) {
        switch (sort_type) {
            case SortType.TOP:
                return '\u2191';
            case SortType.DOWN:
                return '\u2193';
            default: return '';
        }
    }

    return (
        <div className="table-column">
            <table>
                {props.header &&
                    <thead><td className="table-header" onClick={() => {
                        setSorted(SortType.nextType(sorted));
                    }}>{props.header + ' ' + returnSortedSymbol(sorted)}</td></thead>
                }
                {props.data && sortSpecial(props.data, sorted).map(elem => {
                    return <tr><td>{elem}</td></tr>
                    })
                }
            </table>
        </div>
    );
};


export class SortType extends Component {
    static TOP = "TOP";
    static DOWN = "DOWN";
    static NO_SORT = "NO_SORT";
    static nextType(sort_type) {
        switch (sort_type) {
            case this.TOP:
                return this.NO_SORT;
            case this.DOWN:
                return this.TOP;
            case this.NO_SORT:
                return this.DOWN;
            default: return this.NO_SORT;
        }
    }
}
