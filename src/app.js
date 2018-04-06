import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import ProjectList from './projectList';
import Project from './project';


const App = () => {

    return (
        <main>
            <Switch>
                <Route exact path='/' component={ProjectList} />
                <Route path='/project/:name' component={Project} />
            </Switch>
        </main>
    )
}

export default App;