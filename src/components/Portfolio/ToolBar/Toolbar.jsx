import React from 'react';
import PropTypes from 'prop-types';

export default function Toolbar(props) {
    const filters = props.filters;
    const filterClick = props.onClick;
    return (<div className="Toolbar">{
        filters.map((elem, index) => {
            return (
                <button className={'button-filter'} key={index} onClick={filterClick}>{elem}</button>
            )
        })
    }</div>);
}

Toolbar.protoTypes = {
    filters: PropTypes.array.isRequired,
    filterClick: PropTypes.func.isRequired,
};
