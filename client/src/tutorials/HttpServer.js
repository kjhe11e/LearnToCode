import React, { Component } from 'react';

class HttpServer extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            clicked: false
        };
    }

    handleClick() {
        console.log('HttpServer tutorial clicked.');
    }

    render() {
        return (
            <div>
                <h5>Alright, let's build a simple HTTP server. Let's get started!</h5>
            </div>
        );
    }
}

HttpServer.propTypes = {

};

HttpServer.defaultProps = {

};

export default HttpServer;
