import React, {useState} from 'react';
import './App.css';
import {Modal} from "./components/modal/Modal";
import {Button} from "./components/Button";
import s from './components/Button.module.css'


function App() {

    const croses = [
        {id: 1, model: "ADIDAS", size: 'XXX'},
        {id: 2, model: "NIKE", size: 'YYY'},
        {id: 3, model: "PUMA", size: 'ZZZ'}
    ]

    return (
        <div>
            {/*<Button*/}
            {/*    onClick={() => {*/}
            {/*    }}*/}
            {/*    backGround={'red'}*/}
            {/*    className={s.redForSuperButton}*/}
            {/*>Red Button</Button>*/}

            {/*<Button*/}
            {/*    onClick={() => {*/}
            {/*    }}*/}
            {/*    backGround={'blue'}*/}
            {/*    className={s.blueForSuperButton}*/}
            {/*>Blue Button</Button>*/}


            <Button onClick={() => {}} color={'red'}>Red Button</Button>
            <Button onClick={() => {}} color={'secondary'}>Secondary Button</Button>
            <Button onClick={() => {}}>Default Button</Button>
            <Button onClick={() => {}} disabled>Disabled Button</Button>

        </div>
    );
}


export default App;
