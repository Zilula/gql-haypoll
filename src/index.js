import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import {
  NavLink,
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import FeedPage from './components/FeedPage'
import CreatePage from './components/CreatePage'
import DetailPage from './components/DetailPage'

import 'tachyons'
import './index.scss'

const httpServer = process.env.env === 'prod' ? 'https://us1.prisma.sh/public-shortking-905/haypoll/dev' : 'http://localhost:4000'
const wsServer = process.env.env === 'prod' ? 'wss://us1.prisma.sh/public-shortking-905/haypoll/dev' : 'ws://localhost:4000'

const httpLink = createHttpLink({
  uri: httpServer,
})

const wsLink = new WebSocketLink({
  uri: wsServer,
  options: {
    reconnect: true
  },
})

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink
)

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})
ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Fragment>
        <nav className="pa3 pa4-ns">
          <NavLink
            className="link dim f6 f5-ns dib mr3 black"
            activeClassName="gray"
            exact={true}
            to="/"
            title="Feed"
          >
            Feed
          </NavLink>
          <Link
            to="/create"
            className="f6 link dim br1 ba ph3 pv2 fr mb2 dib black"
          >
            + Create Poll
          </Link>
        </nav>
        <div className="fl w-100 pl4 pr4">
          <Switch>
            <Route exact path="/" component={FeedPage} />
            <Route path="/create" component={CreatePage} />
            <Route path="/question/:id" component={DetailPage} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)
