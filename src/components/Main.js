require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Profile from './Profile';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Profile name="Marcelo"/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
