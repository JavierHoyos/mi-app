import React from 'react';
import AboutPage from './about';

const objetivoProfesional = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <div className='max-w-3x1 mx-auto bg-white p-6 rounded shadow'>
                <h1 className='text-3x1 font-semibold mb-2'>Mis Objetivos Profesionales</h1>

                <h2 className='text-x1 font-semibold mb-2'>Objetivos Profesionales</h2>
                <p className='mb-4'>Desde siempre, he tenido una pasión por el desarrollo web, y es un honor para mí compartir mis objetivos profesionales con ustedes en Auco. Mi principal objetivo es:</p>

                <ul className='list-disc ml-8 mb-4'>
                    <li>Crecimiento y Pasión: Trabajar con dedicación y pasión en cada proyecto, sin importar su tamaño.</li>
                    <li>Contribución al Éxito de la Empresa: Deseo ser un miembro fundamental del equipo de Auco y contribuir al éxito de la empresa.</li>
                    <li>Colaboración y Trabajo en Equipo: Valorizo la colaboración y el trabajo en equipo.</li>
                </ul>

                <h2 className='text-x1 font-semibold mb-2'>Mi contribución a Auco</h2>

                <p className='mb-4'>
                    Como posible miembro del equipo de Auco, me comprometo a:
                </p>

                <ul className='list-disc ml-8 mb-4'>
                    <li>Dedicación y Pasión: Trabajar con dedicación y pasión en cada proyecto.</li>
                    <li>Aprendizaje Continuo: Estar al tanto de las últimas tendencias del desarrollo web.</li>
                    <li>Comunicación Abierta: Promover una comunicación abierta y transparante dentro del equipo.</li>
                </ul>

                <h2 className='text-xl font-semibold mb-2'>Alineación con la Cultura y Valores de Auco</h2>
                <p className='mb-4'>Auco es conocida por su cultura de respeto y responsabilidad. Estoy plenamente alineado con estos valores y me esforzaré en mi trabajo diario.</p>

                <ul className="list-disc ml-8">
                    <li>Innovación: La innovación está en el corazón de lo que hago.</li>
                    <li>Colaboración: Creo en la fuerza del trabajo en equipo.</li>
                    <li>Calidad: La calidad es una prioridad para mí.</li>
                </ul>
            </div>

        </div>

    );
};

export default AboutPage;