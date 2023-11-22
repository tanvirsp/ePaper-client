import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes.jsx';
import ContentProvider from './context/ContentProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContentProvider>
      <RouterProvider router={router} />
    </ContentProvider>
  </React.StrictMode>,
)
