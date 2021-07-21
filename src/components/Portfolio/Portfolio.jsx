import {Component} from 'react';
import Toolbar from './ToolBar/Toolbar';
import {ProjectList} from './ProjectList/ProjectList';
import PropTypes from 'prop-types';

export class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.myWorks = props.myWorks;
        this.state = { selected: 'All'};
        this.filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
        this.onClick = this.onClick.bind(this);
    }

    onClick(evt) {
        const filter = evt.currentTarget.textContent;
        this.setState(() => ({selected: filter}));
    }

    render() {
        return (
            <div className={'Portfolio'}>
                <Toolbar filters={this.filters} onClick={this.onClick} />
                <ProjectList filter={this.state.selected} myWorks={this.myWorks} />
            </div>
        )
    }
}

Portfolio.protoTypes = {
    myWorks: PropTypes.array.isRequired,
    state: PropTypes.object.isRequired,
    filters: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
};
