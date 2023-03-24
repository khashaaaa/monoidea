import { ApolloClient } from "@apollo/client"
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

export const App = () => {

  const apollo = new ApolloClient({
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
