import React, {useState} from 'react';
import './App.css';
import {Modal} from "./components/modal/Modal";
import {Button} from "./components/Button";
import s from './components/Button.module.css'
import {Croses} from "./components/Croses";



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


            {/*<Button onClick={() => {}} color={'red'}>Red Button</Button>*/}
            {/*<Button onClick={() => {}} color={'secondary'}>Secondary Button</Button>*/}
            {/*<Button onClick={() => {}}>Default Button</Button>*/}
            {/*<Button onClick={() => {}} disabled>Disabled Button</Button>*/}

            {/*<Croses croses={croses}>*/}
            {/*    <input/>*/}
            {/*    <Button onClick={() => {}} color={'red'}>Red Button</Button>*/}
            {/*    <Button onClick={() => {}} color={'secondary'}>Secondary Button</Button>*/}
            {/*    <div>text text text text text text text text text text</div>*/}
            {/*    <div>text text text text text text text text text text</div>*/}
            {/*    <div>text text text text text text text text text text</div>*/}
            {/*    <div>text text text text text text text text text text</div>*/}
            {/*    <div>text text text text text text text text text text</div>*/}
            {/*    <div>text text text text text text text text text text</div>*/}
            {/*    <div>text text text text text text text text text text</div>*/}
            {/*    <Button onClick={() => {}}>Default Button</Button>*/}
            {/*    <Button onClick={() => {}} disabled>Disabled Button</Button>*/}
            {/*</Croses>*/}

            {/*<Croses croses={croses}>*/}
            {/*    <div>text text text text text text text text text text</div>*/}
            {/*    <div>text text text text text text text text text text</div>*/}
            {/*    <div>text text text text text text text text text text</div>*/}
            {/*    <div>text text text text text text text text text text</div>*/}
            {/*    <div>text text text text text text text text text text</div>*/}
            {/*    <div>text text text text text text text text text text</div>*/}
            {/*</Croses>*/}

            {/*<Croses croses={croses}>*/}
            {/*    <input/>*/}
            {/*    <Button onClick={() => {}} color={'red'}>Red Button</Button>*/}
            {/*    <Button onClick={() => {}} color={'secondary'}>Secondary Button</Button>*/}
            {/*</Croses>*/}

            {/*<Modal>*/}
            {/*    <input id={'email'} placeholder={'email'}/>*/}
            {/*    <input id={'pass'} placeholder={'pass'}/>*/}
            {/*    <button>send</button>*/}
            {/*</Modal>*/}

            <Modal>
                <h1>Confident information</h1>
                <input placeholder={'email'}/>
                <input placeholder={'pass'}/>
                <input placeholder={'pass'}/>
                <label>
                    <input type={'checkbox'} />
                    I agree
                </label>
                <button>send</button>
            </Modal>

        </div>
    );
}


export default App;
