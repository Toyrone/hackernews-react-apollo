import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from'apollo-client';
import { HttpLink } from 'apollo-http-link';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';

const httpLink = new  HttpLink({ uri: 'http://localhost:4000'}) ;

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider>
        <App />
    </ApolloProvider>
    , document.getElementById('root'));

registerServiceWorker();
