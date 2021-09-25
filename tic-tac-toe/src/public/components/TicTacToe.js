import React from 'react';
import { MainStoreProvider } from './MainComponents/MainStore/mainStore.js';
import MainComponent from './MainComponents/MainComponent.js';

export default () => <MainStoreProvider><MainComponent /></MainStoreProvider>