import { ApolloClient } from "@apollo/client"
import { WebSocketLink } from "@apollo/client/link/ws"
import { InMemoryCache } from "@apollo/client/cache"
import { ApolloProvider } from "@apollo/client/react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing } from "./pages/Landing"
import { News } from "./pages/News"
import { Category } from "./pages/Category"
import { Login } from "./pages/Login"
import { LayoutOne } from "./layouts/LayoutOne"
import { LayoutTwo } from "./layouts/LayoutTwo"
import { Publish } from "./pages/Publish"
import { Register } from "./pages/Register"
import { SubscriptionClient } from 'subscriptions-transport-ws';

export const App = () => {

  const GRAPHQL_ENDPOINT = 'http://localhost:3000/graphql';
  const GRAPHQL_SUBSCRIPTIONS_ENDPOINT = 'ws://localhost:3000/graphql';

  const wsClient = new SubscriptionClient(GRAPHQL_SUBSCRIPTIONS_ENDPOINT, { reconnect: true })

  const wsLink = new WebSocketLink(wsClient)

  const apollo = new ApolloClient({
    link: wsLink,
    cache: new InMemoryCache(),
    uri: "http://localhost:3000/graphql"
  })

  return (
    <ApolloProvider client={apollo}>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutOne children={undefined} />}>
              <Route index element={<Landing />} />
              <Route path="/:mark" element={<News />} />
              <Route path="/category/:type" element={<Category />} />
          </Route>
          <Route element={<LayoutTwo />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/:mark/publish" element={<Publish />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>

  )
}
