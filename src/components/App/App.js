import React, { Component } from 'react';
import Header from '../../containers/Header/Header';
import Routes from '../../containers/Routes/Routes';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './App.css';

export class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
        <div className="app">
          <Header/>
          <Routes />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;