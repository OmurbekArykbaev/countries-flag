import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { IoArrowBack } from "react-icons/io5"
import { searchByCountry } from "../config.js"
import { Button } from "../components/Button.jsx"
import Info from "../components/Info.jsx"

const Details = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [country, setCountry] = useState(null)

  useEffect(() => {
    axios
      .get(searchByCountry(params.name))
      .then(({ data }) => setCountry(data[0]))
  }, [params.name])

  return (
    <div>
      <Button onClick={() => navigate("/")}>
        <IoArrowBack /> Back
      </Button>
      {country && <Info {...country} />}
    </div>
  )
}

export default Details
