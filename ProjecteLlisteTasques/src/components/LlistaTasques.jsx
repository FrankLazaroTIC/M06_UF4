import React, { useState } from 'react';
import FormulariTasques from './FormulariTasques';
import Tasca from './Tasca';

const LlistaTasques = () => {
    const [tasques, setTasques] = useState([]);
    const [contadorId, setContadorId] = useState(0); // Iniciar el contador de IDs en 0

    const afegirTasca = tasca => {
        const novaTasca = { ...tasca, id: contadorId }; // Asignar el ID actual y luego incrementar el contador
        setContadorId(contadorId + 1); // Incrementar el contador para el siguiente ID
        const tasquesActuals = [...tasques, novaTasca];
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
                    <p><strong>Tarea</strong>:</p>
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
