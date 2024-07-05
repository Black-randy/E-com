import React, { useState } from 'react';
import Header from './header';  
import AdminPage from '../pages/Admin';

function MainComponent() {
    const [currentView, setCurrentView] = useState('home');

    return (
        <div>
            <Header currentView={currentView} setCurrentView={setCurrentView} />
            <AdminPage currentView={currentView} setCurrentView={setCurrentView} />
        </div>
    );
}

export default MainComponent;
