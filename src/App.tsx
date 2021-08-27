import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import VisualNovelDetailsPage from "./pages/details/VisualNovelDetailsPage";
import Carousel from "./components/carousel/Carousel";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/vns/:id" component={VisualNovelDetailsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
