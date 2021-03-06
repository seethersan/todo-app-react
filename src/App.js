import React from "react";
import { Route, Switch } from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={["/", "/done", "/todo"]} component={HomePage} />
      </Switch>      
    </div>
  );
}

export default App;
