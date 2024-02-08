import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import ArticleList from './components/ArticleList/ArticleList';
import ArticlePage from './components/ArticlePage/ArticlePage';
import { Logo } from './components/ArticleList/style';

const App = () => {
  return (
    <Router>
      <div>
      <Logo>
        <img src={'https://point.md/static/svg/new-point-logo.svg'} alt='logo'/>
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
