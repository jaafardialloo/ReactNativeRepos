import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';

const Dashboard = ({ navigation }) => (
  <Background>
    {/*<Logo />*/}
    <Header>Bismila ma Bandam</Header>
    <Paragraph>
      Ko do pudoriden kono wona do woni darnnde , hanti ko yesso tan faya.
    </Paragraph>
    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
      Logout
    </Button>
    <Button mode="outlined" onPress={() => navigation.navigate('Audio')}>
      Logout
    </Button>
  </Background>
);

export default memo(Dashboard);
