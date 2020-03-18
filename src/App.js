import React, { Component } from 'react';
import { Page, withModel, EditorContext, Utils } from '@adobe/cq-react-editable-components';
import './App.css';

class App extends Page {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to AEM + React</h1>
        </header>
        { this.childComponents }
        { this.childPages }
      </div>
    );
  }
}

export default withModel(App);
