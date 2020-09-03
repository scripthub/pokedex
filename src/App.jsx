import React, { lazy, Suspense } from 'react';
import { Router, Route, HashRouter, Switch, Redirect } from 'react-router-dom';
import './app.scss';

const PokeList  = lazy(() => import('./components/Pokelist/PokeList'));
const SearchBar = lazy(() => import('./components/SearchBar'));
const PokeDetail = lazy(() => import('./components/PokeDetail'));

const renderLoader = () => <p>Loading</p>;

function App() {
  return (
      <div>
          <Suspense fallback={renderLoader()}>
              {/* <SearchBar handleSearch={handleSearch}/> */}
              <HashRouter>
                  <Switch>
                      <Route path="/" exact component={PokeList}></Route>
                      <Route path="/pokemon/:name" component={PokeDetail}></Route>
                  </Switch>
              </HashRouter>
          </Suspense>
      </div>
  );
}

export default App;
