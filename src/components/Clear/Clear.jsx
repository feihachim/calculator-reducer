import { useContext } from 'react';
import { DispatchContext } from '../../hooks/contexts';
import './Clear.css';

function Clear() {
    const dispatch = useContext(DispatchContext);
    return (
        <input type="button" id="clear" value="AC" onClick={() => { dispatch({ type: 'CLEAR' }); }} />
    );
}

export default Clear;
