import Header from 'components/Header'
import { InformationTable } from 'components/Information Table/InformationTable'
import PatientDetails from 'components/PatientDetails'
import React from 'react'
import styled from 'styled-components'
import SideBar from '../components/SideBar/SideBar'
import Data from '../data/ObservationData.js'

const InformationTableForObservation = styled(InformationTable)`
  .styles {
    tr {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      background-color: red;
    }
  }
`



const Container = styled.div`
  display: flex;
  height: 100vh;
  margin: 0px !important;
  padding: 0px !important;
  position: relative;
  background-color: #eeeeee;
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
const TableContainer = styled.div`
  /* background-color: #f7f7f7; */
  /* margin: 10px; */
  border-radius: 20px;
`

export const ObservationPage = () => {
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
        <TableContainer>
          {/* <InformationTable /> */}
          <InformationTableForObservation columns={columns} data={data} />
        </TableContainer>
      </Wrapper>
    </Container>
  )
}
