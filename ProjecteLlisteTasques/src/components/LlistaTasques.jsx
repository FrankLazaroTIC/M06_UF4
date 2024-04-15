import React, { useState } from 'react';
import FormulariTasques from './FormulariTasques';

const LlistaTasques = () => {
    const [tasques, setTasques] = useState([]);

    const afegirTasca = tasca => {
        const tasquesActuals = [...tasques, tasca];
        setTasques(tasquesActuals);
    };

    const eliminarTasca = id => {
        const tasquesRestants = tasques.filter(tasca => tasca.id !== id);
        setTasques(tasquesRestants);
    };

    const completarTasca = id => {
        const tasquesActuals = tasques.map(tasca => {
            if (tasca.id === id) {
                return {
                    ...tasca,
                    completada: !tasca.completada
                };
            }
            return tasca;
        });
        setTasques(tasquesActuals);
    };

    return (
        <div>
            <h1>Mis tareas</h1>
            <FormulariTasques funcAfegirTasca={afegirTasca} />
            {tasques.map(tasca => (
                <div key={tasca.id}>
                    <p>{tasca.text}</p>
                    <p>{tasca.completada ? 'Completada' : 'Pendent'}</p>
                    <button onClick={() => completarTasca(tasca.id)}>Completar</button>
                    <button onClick={() => eliminarTasca(tasca.id)}>Eliminar</button>
                </div>
            ))}
        </div>
    );
};

export default LlistaTasques;