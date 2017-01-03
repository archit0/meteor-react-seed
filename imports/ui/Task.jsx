import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class Task extends Component {
    render() {
        return (
            <li>{JSON.stringify(this.props.task.text)}</li>
        );
    }
}
