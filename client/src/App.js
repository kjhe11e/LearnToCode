import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import logo from './logo.svg';
import './App.css';
// Tutorials:
import EventEmitter from './tutorials/EventEmitter';
import HttpServer from './tutorials/HttpServer';

class App extends Component {

  constructor(props) {
    super(props);

    this.activeTutorial = 'EventEmitter';
    this.switchTutorial = this.switchTutorial.bind(this);
  }

  switchTutorial(tutorial) {
    console.log('Selected tutorial:', tutorial);

    // TODO: The following 'works', but doesn't feel right.
    this.activeTutorial = tutorial;
    this.setState({activeTutorial: tutorial}, () => {
      console.log('activeTutorial:', this.activeTutorial);
    });
  }

  renderSwitch(tutorial) {
    switch(tutorial) {
      case 'EventEmitter':
        return 'EventEmitter';
      case 'HttpServer':
        return 'HttpServer';
      default:
        return 'EventEmitter';
    }
  }

  render() {
    const showTutorial = this.activeTutorial;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to LearnToCode</h1>
        </header>
        <p className="App-tabs">
          <Grid fluid>
            <Row>
              <Col xs="auto" sm="auto" md="auto" lg="auto" onClick={ t => this.switchTutorial("EventEmitter") }>
                Event Emitters
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" onClick={ t => this.switchTutorial("HttpServer") }>
                HttpServer
              </Col>
            </Row>
          </Grid>
        </p>

        <div>
          {showTutorial === 'HttpServer' ? (
            <HttpServer />
          ) : (
            <EventEmitter />
          )}
        </div>

      </div>
    );
  }
}

export default App;
