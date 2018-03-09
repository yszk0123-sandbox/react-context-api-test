import * as React from 'react';

interface Gon {
  login: boolean;
};
declare const gon: Gon;
interface Context {
  Provider: any;
  Consumer: any;
}
declare function createContext(): Context;

const {
  Provider: LoginProvider,
  Consumer: LoginConsumer
} = createContext();

function LoginDialog({ login }) {
  return null;
}

function NavigationBar() {
  return (
    <LoginConsumer>
      {({ login }) => (
        <LoginDialog login={login} />
      )}
    </LoginConsumer>
  )
}

export default class App extends React.Component {
  state = {
    count: 0,
  }

  render() {
    return (
      <LoginProvider
        value={{
          login: gon.login
        }}
      >
        <NavigationBar />
      </LoginProvider>
    )
  }
}
