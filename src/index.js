import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Landing, Upload, MyTokens, Sold, Home } from './components/index.js';
import ShowNFT from './components/ShowNFT.jsx';
import { store } from "./app/store.js";
import { Provider } from "react-redux";
const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />} >
    <Route path='' element={<Landing />} />
    <Route path='/list' element={<Upload />} />
    <Route path='/my-nfts' element={<MyTokens />} />
    <Route path='/details/:name/:id/:isOwned/:isAvail' element={<ShowNFT />} />
    <Route path='/sold-nfts' element={<Sold />} />
    <Route path='*' element={<h2>Route Not Found</h2>} />

  </Route>


))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
