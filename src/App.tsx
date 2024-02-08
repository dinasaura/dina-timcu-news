import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticleList from "./components/ArticlesList/ArticlesList";
import ArticlePage from "./components/ArticlePage/ArticlePage";
import { Logo, LogoImage, TextGrey } from "./components/Container/Container";
import { logoUrl } from "./constants";

const App = () => {
  return (
    <Router>
      <div>
        <Logo>
          <LogoImage src={logoUrl}/>
          <TextGrey>Думай и решай свободно</TextGrey>
        </Logo>
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
