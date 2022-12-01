import { useContext } from 'react';
import { StateContext } from '../../hooks/contexts';
import './Display.css';

export default function Display() {
    const state = useContext(StateContext);
    return (
        <div id="display">{state.output}</div>
    );
}
