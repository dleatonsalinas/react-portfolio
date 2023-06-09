import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavTabs from './NavTabs';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import LitChat from './pages/LitChat';
import './styles/style.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Work':
        return <Work handlePageChange={handlePageChange}/>;
      case 'Contact':
        return <Contact />;
      case 'LitChat':
        return <LitChat handlePageChange={handlePageChange}/>;
      default:
        return null;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Router>
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <TransitionGroup>
        <CSSTransition key={currentPage} timeout={500} classNames="fade">
          <div className="page-container">{renderPage()}</div>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
    </Router>
  );
}