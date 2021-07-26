import React from 'react';
import PropTypes from 'prop-types';
const shortid = require('shortid');

export function ProjectList(props) {
    const filter = props.filter;
    const myWorks = (filter === 'All') ? props.myWorks : props.myWorks.filter((elem) => elem.category === filter);

    return (<div className={'ProjectList'}>{
        myWorks.map((elem, index) => <img key={shortid.generate()} className={'work-image'} src={elem.img} alt={elem.category}/>)
    }</div>);
}

ProjectList.protoTypes = {
    filter: PropTypes.string.isRequired,
    myWorks: PropTypes.array.isRequired,
};
