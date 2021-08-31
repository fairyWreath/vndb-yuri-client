import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import BrowseVisualNovelsPage from "./pages/BrowseVIsualNovelsPage";
import VisualNovelDetailsPage from "./pages/VisualNovelDetailsPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/vns" component={BrowseVisualNovelsPage} />
          <Route exact path="/vns/:id" component={VisualNovelDetailsPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
