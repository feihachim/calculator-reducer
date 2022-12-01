import { useContext } from 'react';
import { DispatchContext } from '../../hooks/contexts';
import './Equals.css';

export default function Equals() {
    const dispatch = useContext(DispatchContext);
    return (
        <input type="button" id="equals" value="=" onClick={() => { dispatch({ type: 'EQUALS' }); }} />
    );
}
