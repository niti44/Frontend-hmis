import Header from 'components/Header'
import { InformationTable } from 'components/Information Table/InformationTable'
import PatientDetails from 'components/PatientDetails'
import ReportsHistory from 'components/ReportsHistory'
import PastVisitTimeline from 'components/TimeLine/PastVisitTimeline'
import VerticalTimelineComponent from 'components/VerticalTimelineComponent'
import React from 'react'
import styled from 'styled-components'
import SideBar from '../components/SideBar/SideBar'
import Data from '../data/NursingStationData.js'

const Container = styled.div`
  display: flex;
  height: 100vh;
  margin: 0px !important;
  padding: 0px !important;
  position: relative;
  background-color: #EEEEEE;
`
const SidebarContainer = styled.div`
  height: 100%;
`

const Wrapper = styled.div`
  display: flex;
  flex: 80%;
  flex-direction: column;
  overflow-y: auto;

  /* position: relative; */
`
const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: red;
`

const PatientInfoContainer = styled.div`
  /* background-color: yellow; */
`
const ReportsContainer = styled.div`
  /* background-color: #f7f7f7; */
  margin: 10px;
  border-radius: 20px;
  display:flex;
  flex-direction:column;
  margin-top:20px;

`
const TextContainer = styled.div`
  margin: 10px;
  padding-top: 30px;
  padding-left: 10px;
  font-size: 24px;
  color: #222647;
  font-weight:bold;
`

export const ReportsPage = () => {
  const { columns, data } = Data()
  return (
    <Container>
      <SidebarContainer>
        <SideBar />
      </SidebarContainer>
      <Wrapper>
        <HeaderContainer>
          <Header
            topLevelDirectory='Home'
            parentDirectory='Nursing Station'
            dashboardType='Intensive Care Unit'
          />
        </HeaderContainer>
        <PatientInfoContainer>
          <PatientDetails />
        </PatientInfoContainer>
        <TextContainer>Previous Treatment History</TextContainer>
        <ReportsContainer>
          <ReportsHistory />
          <ReportsHistory />
          <ReportsHistory />
          <ReportsHistory />
        </ReportsContainer>
      </Wrapper>
    </Container>
  )
}
