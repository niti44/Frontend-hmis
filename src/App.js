import React from 'react'
import styled from 'styled-components'
import SideBar from './components/SideBar/SideBar'
import { RegistrationPage } from './pages/RegistrationPage'
import { RecentRegistrationPage } from './pages/RecentRegistrationPage'
import { PatientListPage } from './pages/PatientListPage'
import VerticalTimelineComponent from 'components/VerticalTimelineComponent'
import { PastVisitPage } from 'pages/PastVisitPage'
import LoginPage from 'pages/LoginPage'
import { ObservationPage } from 'pages/ObservationPage'
import ReportsHistory from 'components/ReportsHistory'
import { ReportsPage } from 'pages/ReportsPage'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'

const Container = styled.div`
  margin: 0px;
  padding: 0px;
`

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<PatientListPage />}></Route>
        <Route exact path='/login' element={<LoginPage />}></Route>
        <Route exact path='/pastVisit' element={<PastVisitPage />}></Route>
        <Route exact path='/reports' element={<ReportsPage />}></Route>
        <Route
          exact
          path='/patientRegistration'
          element={<RegistrationPage />}
        ></Route>
        <Route
          exact
          path='/recentRegistrations'
          element={<RecentRegistrationPage />}
        ></Route>
        <Route exact path='/patientList' element={<PatientListPage />}></Route>
        <Route exact path='/pastVisits' element={<PastVisitPage />}></Route>
        <Route exact path='/observations' element={<ObservationPage />}></Route>
      </Routes>
    </BrowserRouter>

    // <Container>
    //   <RegistrationPage />
    //   <RecentRegistrationPage />
    //   <PastVisitPage />
    //   <VerticalTimelineComponent />
    //   <PatientListPage />
    //   <PastVisitPage />
    //   <LoginPage/>
    //   <ObservationPage />
    //   <ReportsPage />
    // </Container>
  )
}

export default App
