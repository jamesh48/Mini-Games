import React from 'react';
import { MainStoreProvider } from 'MainStore';
import MainComponent from 'Components/MainComponents/MainComponent';

import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

describe('Main Component', () => {
  it('Renders the Main Component', () => {
    const wrapper = mount(
      <MainStoreProvider>
        <MainComponent />
      </MainStoreProvider>
    );
    expect(wrapper.find('#container').length).toEqual(1);
  });

  test('snapshot renders', () => {
    const component = renderer.create(
      <MainStoreProvider>
        <MainComponent />
      </MainStoreProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});