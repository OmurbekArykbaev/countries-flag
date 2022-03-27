import Header from "./components/Header"
import Main from "./components/Main"
import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Details from "./pages/Details"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  const [countries, setCountries] = useState([])
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage countries={countries} setCountries={setCountries} />
            }
          />
          <Route path="/country/:name" element={<Details />} />
          <Route element={<NotFoundPage />} />
        </Routes>
      </Main>
    </>
  )
}

export default App
