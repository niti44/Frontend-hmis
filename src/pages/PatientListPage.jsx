import Header from 'components/Header'
import { InformationTable } from 'components/Information Table/InformationTable'
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
  /* overflow-x: auto; */
  background-color: #f7f7f7;
`

const InformationTableContainer = styled.div`
  background-color:white;
  margin: 15px;
  border-radius: 15px;

`

export const PatientListPage = () => {
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
        <InformationTableContainer>
          <InformationTable columns={columns} data={data} />
        </InformationTableContainer>
      </Wrapper>
    </Container>
  )
}
