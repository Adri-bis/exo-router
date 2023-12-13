import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

import './App.css';

function App() {
const images = useLoaderData();
  return <LandingPage data={images}/>
}

export default App;
