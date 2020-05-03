import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Spinner from './components/spinner/spinner.component';
import Header from './components/header/header.component';

const HomePage = lazy(() => import ('./components/homepage/homepage.component'));
const Users = lazy(() => import ('./pages/users/users.component'));
const Posts = lazy(() => import ('./pages/posts/posts.component'));

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path='/' component={HomePage} />
          <Route path='/users' component={Users} />
          <Route path='/posts' component={Posts} />
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
