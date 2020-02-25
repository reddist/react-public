import React from 'react';
import {Column} from "./Column";

export const Table = (props) => {
    return (
        <div>
            {props.columns &&
                <table>
                    <tr>
                        {props.columns.map((elem) => {
                            return <td>
                                <Column
                                    header = {elem.header}
                                    data = {elem.data}
                                />
                            </td>;
                        })}
                    </tr>
                </table>
            }
        </div>
    );
};
