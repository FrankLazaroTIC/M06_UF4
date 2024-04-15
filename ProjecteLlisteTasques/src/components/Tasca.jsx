import React from 'react';

const Tasca = ({ text, completada, eliminarTasca, completarTasca, id }) => {
    const tascaClassName = completada ? 'tascaCompletada' : '';

    return (
        <div className={`tasca ${tascaClassName}`} onClick={() => completarTasca(id)}>
            <p>{text}</p>
            <button onClick={() => eliminarTasca(id)}>
            </button>
        </div>
    );
};

export default Tasca;
