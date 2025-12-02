import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Teachers from './components/Teachers';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import ProgramDetail from './components/ProgramDetail';
import TeacherDetail from './components/TeacherDetail';
import BlogDetail from './components/BlogDetail';

const Home: React.FC = () => (
  <>
    <Hero />
    <About />
    <Programs />
    <Teachers />
    <Gallery />
    <Testimonials />
    <Blog />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/program/:id" element={<ProgramDetail />} />
            <Route path="/teacher/:id" element={<TeacherDetail />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
};

export default App;