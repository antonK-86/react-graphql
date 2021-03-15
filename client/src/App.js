import React from "react";
import MainComponent from "./components/MainComponent";
import ApolloClient from "apollo-boost";
import ApolloProvider from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
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
