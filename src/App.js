import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticleList from "./components/ArticlesList/ArticlesList";
import ArticlePage from "./components/ArticlePage/ArticlePage";
import { Logo, LogoImage, TextGrey } from "./style";

const App = () => {
  return (
    <Router>
      <div>
        <Logo>
          <LogoImage
            src={"https://point.md/static/svg/new-point-logo.svg"}
            alt="logo"
          />
          <TextGrey>Думай и решай свободно</TextGrey>
        </Logo>
        <Routes>
          <Route exact path="/" element={<ArticleList />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
