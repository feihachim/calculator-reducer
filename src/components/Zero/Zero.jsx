import { useContext } from 'react';
import { DispatchContext } from '../../hooks/contexts';
import './Zero.css';

export default function Zero() {
    const dispatch = useContext(DispatchContext);
    return (
        <input type="button" id="zero" value="0" onClick={() => { dispatch({ type: 'ZERO', payload: '0' }); }} />
    );
}
