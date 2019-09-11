import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from '@icedesign/layout';

import ReviewOverview from './components/ReviewOverview';
import ReviewRequestTable from './components/ReviewRequestTable';
import Aside from './components/Aside';
import InsideMainRoutes from './InsideMainRoutes';

export default class Dashboard extends Component {

  render() {
    
    return (
      <div>
        <Layout.Section>
          <Layout.Aside width={200}>
            <Aside />
          </Layout.Aside>

          <Layout.Main scrollable>
            <div className="main-container">
             {/* <InsideMainRoutes />*/}
             
            </div>
          </Layout.Main>
        </Layout.Section>
      </div>
    );
  }
}
