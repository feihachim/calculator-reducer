import { useContext } from 'react';
import PropTypes from 'prop-types';
import { DispatchContext } from '../../hooks/contexts';
import './Operator.css';

export default function Operator({ id, value }) {
    const dispatch = useContext(DispatchContext);
    return (
        <input type="button" id={id} className="operator" value={value} onClick={() => { dispatch({ type: 'OPERATOR', payload: value }); }} />
    );
}

Operator.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};
