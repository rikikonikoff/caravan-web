import React from 'react';
import { shallow } from 'enzyme';
import LandingPageCopy from './LandingPageCopy';

describe ('LandingPageCopy', () => {
  let wrapper = shallow(<LandingPageCopy />);

  it ('says welcome', () => {
    expect(wrapper.find('div.tagline')).toHaveLength(1);
    expect(wrapper.text()).toContain('Welcome to Caravan');
  })

  it ('has the right description', () => {
    let text = "Taking a road trip? Organize how travelers will get to their destination."

    expect(wrapper.find('div.description')).toHaveLength(1);
    expect(wrapper.text()).toContain(text);
  })

  it ('displays the google login button', () => {
    // let image = "https://s3.amazonaws.com/intrepid-caravan/ggoogle-login-button.svg";
    let image = "icGooglePlus.svg"
    let buttonImage = wrapper.find('img').render()[0]['children'][0];

    expect(buttonImage['attribs']['src']).toEqual(image)
    expect(wrapper.text()).toContain("Log in with Google");
    expect(wrapper.find('button.google-button')).toHaveLength(1);
    expect(wrapper.find('div.gplus')).toHaveLength(1);
    expect(wrapper.find('img')).toHaveLength(1);
  })
})
