import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { fetchData } from './services/ImagesLoader.js';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ImageLayout from './pages/ImageLayout.jsx';
import Contact from './pages/Contact.jsx';
import AboutUs from './pages/AboutUs.jsx';
import RootLayout from './RootLayout.jsx';
import Show from './pages/show.jsx';
import Turtle from './pages/Turtle.jsx';
import Rat from './pages/Rat.jsx';
import Tiger from './pages/Tiger.jsx';
import './index.css'

// router

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<App />} loader={() => fetchData("car+electric")} />
      <Route path="about" element={<AboutUs />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Animals" element={<ImageLayout />}>
        <Route path="turtle" element={<Turtle />} loader={() => fetchData("turtle")}/>
        <Route path="rat" element={<Rat />} loader={() => fetchData("rat")}/>
        <Route path="tiger" element={<Tiger />} loader={() => fetchData("tiger")}/>
        <Route path="show" element={<Show/>} />
      </Route>
    </Route>
  )
  );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);