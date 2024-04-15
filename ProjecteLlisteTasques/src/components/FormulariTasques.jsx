import React, { useState } from 'react';

const FormulariTasques = () => {
    const [inputValue, setInputValue] = useState('');
    const [textTasca, setTextTasca] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setTextTasca(e.target.value);
        console.log('value is:', e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const tascaNova = {
            titol: textTasca,
            completada: false
        };
        props.funcAfegirTasca(tascaNova);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button type="submit">Agregar tarea</button>
        </form>
    );
};

export default FormulariTasques;