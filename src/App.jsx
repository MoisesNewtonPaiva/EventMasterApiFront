import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios'
import './App.css'
import PageEvents from './components/PageEvents';
import PageInsert from './components/PageInsert';
import PageSearchId from './components/PageSearchId';
import PageId from './components/PageId';



function App() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    searchJavaData();
  }, []);

  const searchJavaData = async () => {
    try {
      const resposta = await axios.get("https://eventmasterapi-v3zw.onrender.com/api/events");
      setEvents(resposta.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  return (
    <BrowserRouter>
      <nav>
        <Link to="/search">Search Id</Link>
        <Link to="/insert">Insert Event</Link>
        <Link to="/">All Events</Link>
      </nav>
      <Routes>
        <Route path="/" element={<PageEvents events={events} />} />
        <Route path="/insert" element={<PageInsert />} />
        <Route path="/search" element={<PageSearchId />} />
        <Route path="/events/:id" element={<PageId />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;