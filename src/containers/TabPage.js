import React, { Component } from 'react';
import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';
import { Container as BackgroundContainer } from '@modules/background';
import { Container as QuotesContainer } from '@modules/quotes';
import { Container as ClockContainer } from '@modules/clock';
import { Container as WeatherContainer } from '@modules/weather';
import SettingsIcon from '@components/SettingsIcon';
import './TabPage.css';

class TabPage extends Component {
    render() {
        return (
            <Layout>
                <BackgroundContainer />
                <Panel>
                    <div className="panel">
                        <div className="panel__topContainer panel__topContainer_right">
                            <SettingsIcon />
                        </div>
                        <div className="panel__topContainer panel__topContainer_left">
                            <WeatherContainer />
                        </div>
                        <div className="panel__centerContainer">
                            <ClockContainer />
                        </div>
                        <div className="panel__bottomContainer">
                            <QuotesContainer />
                        </div>
                    </div>
                </Panel>
            </Layout>
        );
    }
}

export default TabPage;
