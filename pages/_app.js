import React from 'react';
import '../styles/style.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AuthProvider } from '../lib/AuthContext';

const App = ({ Component, pageProps }) => (
  <AuthProvider>
    <div>
      <Header />
      <div className="min-h-screen container mx-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  </AuthProvider>
);

export default App;
