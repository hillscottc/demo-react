import React from 'react';
import { mount, shallow, render } from 'enzyme';
import {expect} from 'chai';

import Button from './Button';

describe('<Button />',  () => {

  it('renders', () => {
    const wrapper = render(<Button />);
    expect(wrapper.text()).to.contain("Click");
  });


});