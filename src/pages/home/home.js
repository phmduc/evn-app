import React, { Component } from 'react';
import MainLayout from '~/layouts/MainLayout/MainLayout.js';
import Popup from '~/components/popup/popup';
import Logo from '~/components/logo/logo';
import Navigation from '~/components/navigation/navigation';
import Tabs from '~/components/tabs/tabs';

class Home extends Component {
  render() {
    return (
        <MainLayout>
            <Navigation/>
            <Tabs/>
            <Popup/>
        </MainLayout>
    );
  }
}

export default Home;