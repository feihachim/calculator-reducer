import { useContext } from 'react';
import PropTypes from 'prop-types';
import { DispatchContext } from '../../hooks/contexts';
import './Digit.css';

function Digit({ id, value }) {
    const dispatch = useContext(DispatchContext);
    return (
        <input type="button" id={id} className="digit" value={value} onClick={() => { dispatch({ type: 'DIGIT', payload: value }); }} />
    );
}

Digit.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default Digit;
