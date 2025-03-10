import React from 'react';
import MedecinList from './components/MedecinList';
import './page.css'
const Page = () => {
    return (
        <div id='screen'>
            <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Nos Médecins</h1>
            <MedecinList />
        </div>
    );
}

export default Page;