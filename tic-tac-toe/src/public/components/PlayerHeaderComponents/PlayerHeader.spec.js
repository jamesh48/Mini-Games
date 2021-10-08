import React from 'react';
import { MainStoreProvider } from 'MainStore';
import PlayerHeaders from './PlayerHeaders.js';
import { PlayerHeaderStoreProvider } from 'PlayerHeaderStore';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

describe('Player Headers', () => {

  it('renders the player header component and its children', () => {
    const wrapper = mount(
      <MainStoreProvider>
        <PlayerHeaderStoreProvider>
          <PlayerHeaders />
        </PlayerHeaderStoreProvider>
      </MainStoreProvider>);
    expect(wrapper.find('#player-headers').length).toEqual(1)
    expect(wrapper.find('.player-name-headers').length).toEqual(2);
  });

  it('initializes player win count at 0 each', () => {
    const wrapper = mount(
      <MainStoreProvider>
        <PlayerHeaderStoreProvider>
          <PlayerHeaders />
        </PlayerHeaderStoreProvider>
      </MainStoreProvider>
    );
    expect(wrapper.text()).toContain('X Player-> 0');
    expect(wrapper.text()).toContain('O Player-> 0');
  });

  test('snapshot renders', () => {
    const component = renderer.create(
      <MainStoreProvider>
        <PlayerHeaderStoreProvider>
          <PlayerHeaders />
        </PlayerHeaderStoreProvider>
      </MainStoreProvider >
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});

