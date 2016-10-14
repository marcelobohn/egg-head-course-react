/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;
import createComponent from 'helpers/shallowRenderHelper';

import Profile from 'components/Profile';

describe('ProfileComponent', () => {
  let ProfileComponent;

  beforeEach(() => {
    ProfileComponent = createComponent(Profile, {name: "Paul"});
  });

  it('should have its component name as default className', () => {
    expect(ProfileComponent.props.className).to.equal('profile');
  });
});
