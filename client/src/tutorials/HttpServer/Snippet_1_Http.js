import React, { Component } from 'react';

class Snippet_1_Http extends Component {

    render() {
        return (
            <div>
                <pre>
                    <code>{`
                    const http = require('http');
                    const server = http.createServer();

                    server.on('connection', function (req, res) {
                        // We can handle incoming connections here
                        console.log('We have a new connection');
                    });

                    server.listen(4000);
                    `}
                    </code>
                </pre>
            </div>
        );
    }
}

Snippet_1_Http.propTypes = {

};

Snippet_1_Http.defaultProps = {

};

export default Snippet_1_Http;
