import React, { Component } from 'react';

import './Node.css';

export default class Node extends Component {

    render() {
        const {
            col,
            row,
            number = 0,
        } = this.props;


        return (
            <div id={`node-${row}-${col}`}
                className={`node`}>
                <div className="text">
                    {`${number}`}
                </div>
            </div>
        );
    }
}