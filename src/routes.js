import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {/* exact é usado para pode utilizar as outras rotas caso contrário ele apenas exibe a Main */}
      <Route exact path="/" component={Main} />
      <Route path="/products/:id" component={Product} />
    </Switch>
  </BrowserRouter>
);

export default Routes;