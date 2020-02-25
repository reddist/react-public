import React from "react";

export const AddColumnInput = (props) => {
    let header = '';
    let data = '';

    function handleSubmit () {
        if (header !== '' && data !== '')
            props.addColumn(header, data.split(','));
    }

    return (
        <div>
            <form>
                <h1>Название столбца</h1>
                <input type='text' value={header} />
                <h1>Содержимое столбца</h1>
                <input type='text' value={data} />
                <button onClick={handleSubmit()} value='Добавить столбец'/>
            </form>
        </div>
    );
};
