import React, { Component } from 'react';
import Snippet_1_Http from './Snippet_1_Http';

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
                <div className="Tutorial-body">
                    <p>
                        To begin, what is HTTP?<br />
                        HTTP is the foundation powering the World Wide Web; it uses TCP as its transport protocol.<br /><br />
                        NodeJs makes it easy to implement an HTTP server.<br />
                        If you do not have NodeJs installed, please see https://nodejs.org<br /><br />
                        To begin, create a file named server.js with the contents:<br /><br />

                        
                        <Snippet_1_Http />
                    </p>
                    <p>
                        Congrats! Open up a terminal and execute 'node server.js'.<br />
                        Then, open up your browser to http://localhost:4000. Additionally, you can execute 'curl -i localhost:4000' from another terminal.<br />
                    </p>
                    <p>
                        You will notice the terminal running the server will log "We have a new connection" for each incoming connection.
                        Each client connection (i.e. your browser, or using the curl command) will see the response returned from the server.<br />
                    </p>
                    <p>
                        Pretty cool, huh?!<br />
                        More coming soon... :)
                    </p>
                </div>
            </div>
        );
    }
}

HttpServer.propTypes = {

};

HttpServer.defaultProps = {

};

export default HttpServer;
