import React from 'react';
import './App.css';
import ProductList from './components/ProductList';

const App = () => {
    return (
        <div className="App">
            <header className="app-header">
                <h1>React Product Cards</h1>
            </header>
            <main>
                <ProductList />
            </main>
        </div>
    );
};

export default App;
