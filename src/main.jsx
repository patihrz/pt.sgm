// File: src/main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' // Atau './styles/globals.css'

import { RouterProvider } from "react-router-dom";
// import { router } from "./router"; // <-- Hapus atau comment baris ini
import { router } from "@/router";   // <-- Ganti jadi ini

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)