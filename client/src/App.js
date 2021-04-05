import React from "react";
import MainComponent from "./components/MainComponent";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://salty-crag-83095.herokuapp.com/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <MainComponent />
      </div>
    </ApolloProvider>
  );
}

export default App;
