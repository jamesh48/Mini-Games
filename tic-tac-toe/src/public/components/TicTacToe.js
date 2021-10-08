import React from 'react';
import { MainStoreProvider } from 'MainStore';
import MainComponent from 'Components/MainComponents/MainComponent.js';

export default () => <MainStoreProvider><MainComponent /></MainStoreProvider>