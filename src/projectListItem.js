import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';

class  ProjectListItem extends Component {
    render() {
        return (
            <div className="box">
                <Link to={`/project/${this.props.name}`}>
                    <div className="project">
                        <h3>{this.props.name}</h3>
                        <div className="song-list">
                            <div className="song">Song</div>
                            <div className="song">Song</div>
                            <div className="song">Song</div>
                            <div className="song">Song</div>
                        </div>
                    </div>
                </Link>
            </div>)
    }
}

export default ProjectListItem;
