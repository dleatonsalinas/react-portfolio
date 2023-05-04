import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import './styles/style.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work/>;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <TransitionGroup>
        <CSSTransition key={currentPage} timeout={500} classNames="fade">
          {renderPage()}
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}
