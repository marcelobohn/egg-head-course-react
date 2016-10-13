'use strict';

import React from 'react';

class Profile extends React.Component {
  render() {
    let name = this.props.name;
    return (
      <div className="profile">
        <h1>{name}</h1>
      </div>
    )
  }
}

Profile.propTypes = {
  name: React.PropTypes.string
};

Profile.defaultProps = {
  name: 'unnamed'
};

export default Profile;
