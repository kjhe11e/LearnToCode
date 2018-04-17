import React, { Component } from 'react';

class EventEmitter extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            clicked: false
        };
    }

    handleClick() {
        console.log('EventEmitter tutorial clicked.');;
    }

    render() {
        return (
            <div>
                <h5>Let's learn about Event Emitters, a core foundation of NodeJs!</h5>
            </div>
        );
    }
}

EventEmitter.propTypes = {

};

EventEmitter.defaultProps = {

};

export default EventEmitter;
