import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import Task from './Task.jsx';
import {Tasks} from '../api/tasks';

// App component - represents the whole app
 class App extends Component {
    constructor(){
        super();
        this.formhandler=this.formhandler.bind(this);
    }

    formhandler(event){
        event.preventDefault();
        const input=ReactDOM.findDOMNode(this.refs.textInput).value.trim();
        Tasks.insert({text:input});
        ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }
    renderTasks() {
        return this.props.tasks.map((task) => (
            <Task key={task._id} task={task} />
        ));
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Todo List</h1>
                    <form onSubmit={this.formhandler}>
                        <input type="text" ref="textInput"/>
                    </form>
                </header>

                <ul>
                    {this.renderTasks()}
                </ul>
            </div>
        );
    }

}
export default createContainer(() => {
    var at=Tasks.find({}).fetch();


    return {
        tasks: at,
    };
}, App);