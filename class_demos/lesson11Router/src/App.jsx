import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import NoMatch from './pages/NoMatch'
import Layout from './pages/Layout'
import BookDetail from './pages/BookDetail'
import Books from './pages/Books'
import { Routes, Route } from 'react-router'

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="books" element={<Books />} />
        <Route path="books/:id/:author/:title" element={<BookDetail />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}
export default App
