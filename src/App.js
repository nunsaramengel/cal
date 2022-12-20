
import './App.css';
import Tabby from './components/Tabby';
import { Heading, Text } from '@chakra-ui/react'
import React, { useState, useReducer, useMemo } from "react"
import Year from "./components/obj/YearO"
import Test from './components/Test';
import AddAppointment from './components/AddAppointment';

const CONSTANT_DATA = {
  wochentage: ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],
  monate: ["Januar", "Februar","März","April","Mai","Juni","Juli","August","September","Oktober","Novmber","Dezember"],
  tage: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
  schaltjahre: [2020,2024,2028,2032,2036,2040,2044,2048,2052,2056]
}


const test = new Date();
console.log(test.getFullYear())
const pfeffer = Year.isLeapYear(CONSTANT_DATA.schaltjahre, test.getFullYear())
console.log(pfeffer)

const testDate = new Date("2020-09-03T03:24:00")
const isTestDateALeapYear = Year.isLeapYear(CONSTANT_DATA.schaltjahre, testDate.getFullYear())
console.log(testDate.getFullYear(), " is a leap year? : ", isTestDateALeapYear)

function App() {

  const [data, setData] = useState(null)




  return (
    <>
      <AddAppointment />
      <Tabby />
    </>
  );
}

export default App;
