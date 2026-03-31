import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios'
import './App.css'
import PageEvents from './PageEvents';
import PageInsert from './PageInsert' ;



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
        <Link to="/">Events</Link>
        <Link to="/insert">Insert Event</Link>
      </nav>
      <Routes>
        <Route path="/" element={<PageEvents events={events} />} />
        <Route path="/insert" element={<PageInsert />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;