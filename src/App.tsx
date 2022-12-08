import { useEffect, useState } from 'react';
import axios from 'axios';

import { Header } from "./components/Header";
import { Answer } from "./components/Answer";
import { Description } from "./components/Description";

import './Reset.css';
import './App.css';

function App() {
  const [result, setResult] = useState(false)
  const [holidayName, setHolidayName] = useState("")

  let date = new Date()

  async function isHoliday() {
    let day = String(date.getDate()).padStart(2, "0")
    let month = String(date.getMonth() + 1).padStart(2, "0")
    let year = String(date.getFullYear())
    let dateString = String(`${year}-${month}-${day}`)

    let response = await axios.get(`https://brasilapi.com.br/api/feriados/v1/${year}`)

    response.data.map((holiday: { date: string; name: string }) => {
      if (holiday.date === dateString) {
        setResult(holiday.date === dateString)
        setHolidayName(holiday.name)
        return
      }
    })
  }

  useEffect(() => {
    isHoliday()
  }, [])

  return (
    <div className="container">
      <Header title="Hoje é Feriado Nacional?" />
      <Answer isHoliday={result} />
      <Description isHoliday={result} holidayName={holidayName} />
    </div>
  )
}

export default App
