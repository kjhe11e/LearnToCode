import React, { Component } from 'react';

class Snippet_1_Http extends Component {

    render() {
        return (
            <div>
                <pre>
                    <code>{`
                    const http = require('http');
                    const server = http.createServer();

                    server.on('request', function (req, res) {
                        // We can handle incoming requests here.
                        console.log('We have a new connection');

                        // Here we will edit the response object to respond to the client with a message.
                        res.writeHead(200, {'Content-Type': 'text/plain'});
                        res.write('Yo world!');
                        res.end();
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
