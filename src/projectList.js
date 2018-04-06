import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProjectListItem from './projectListItem';
import Api from './api';

class ProjectList extends Component {

    constructor() {
        super();
        var api = new Api();
        this.state = api.Get();
    }

    render() {

        var renderProjectList = this.state.projects.map((project, i) => {
            return <ProjectListItem key={project.id} name={project.name} id={project.id} />;
        });

        return (
            <div className="project-list">
                <div>
                    { renderProjectList }
                </div>
            </div>
        );
    }
}

export default ProjectList;