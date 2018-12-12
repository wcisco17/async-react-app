import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import AWSAppSyncClient from 'aws-appsync'
import AppSyncConfig from './aws-exports'
import { ApolloProvider } from 'react-apollo'
import { Rehydrated } from 'aws-appsync-react'
require('dotenv').config()

const client = new AWSAppSyncClient({
    url: AppSyncConfig.aws_appsync_graphqlEndpoint,
    region: AppSyncConfig.aws_appsync_region,
    auth: {
      type: AppSyncConfig.aws_appsync_authenticationType,
      apiKey: AppSyncConfig.aws_appsync_apiKey,
    }
})

const RootApplication = () => (
    <ApolloProvider client={client} >
        <Rehydrated>
               <App />
        </Rehydrated>
    </ApolloProvider>
)

ReactDOM.render(

        <RootApplication />

, document.getElementById('root'));
