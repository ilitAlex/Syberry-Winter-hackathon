import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Goods from "./components/Goods/Goods";


const App = () => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <div className='app-wrapper-content'>
                <Route
                    path='/goods'
                    render={() => <Goods/>
                    }
                />

            </div>
        </div>
    )
}

export default App;
