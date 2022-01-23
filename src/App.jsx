import './App.css'
import React from 'react'

import Card from './components/layout/Card'
import Calculator from './components/calculator/Calculator'

export default () =>
    <div className="App">
        <h1>React Calculator </h1>

        <div className="Cards">

        <Card titulo="Calculator" color='#003a1f'>
            <Calculator></Calculator>
        </Card>

        </div>
    </div>

