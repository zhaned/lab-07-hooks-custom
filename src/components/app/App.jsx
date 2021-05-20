import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import CharacterList from '../characters/CharacterList';
import HomePage from '../HomePage';

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home Page</Link>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Characters" component={CharacterList} />
      </Switch>
    </BrowserRouter>
  );
}
