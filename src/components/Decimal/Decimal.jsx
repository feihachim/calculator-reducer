import { useContext } from 'react';
import { DispatchContext } from '../../hooks/contexts';
import './Decimal.css';

export default function Decimal() {
    const dispatch = useContext(DispatchContext);
    return (
        <input id="decimal" type="button" value="." onClick={() => { dispatch({ type: 'DECIMAL', payload: '.' }); }} />
    );
}
