import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

// import reducers from "./store";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import BrowseVisualNovelsPage from "./pages/BrowseVIsualNovelsPage";
import VisualNovelDetailsPage from "./pages/VisualNovelDetailsPage";
import NotFoundPage from "./components/status/NotFoundPage";
import UnderConstruction from "./components/status/UnderConstruction";

function App() {
  return (
    <div className="app box-border">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={BrowseVisualNovelsPage} />
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
