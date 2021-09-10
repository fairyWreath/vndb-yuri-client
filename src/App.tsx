import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import BrowseVisualNovelsPage from "./pages/BrowseVIsualNovelsPage";
import VisualNovelDetailsPage from "./pages/VisualNovelDetailsPage";
import NotFoundPage from "./components/status/NotFoundPage";
import UnderConstruction from "./components/status/UnderConstruction";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={UnderConstruction} />
          <Route exact path="/vns" component={BrowseVisualNovelsPage} />
          <Route path="/vn/:id" component={VisualNovelDetailsPage} />
          <Route path="/chars" component={UnderConstruction} />
          <Route path="/char/:id" component={UnderConstruction} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
