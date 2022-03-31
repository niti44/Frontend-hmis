import Header from 'components/Header'
import { InformationTable } from 'components/Information Table/InformationTable'
import ReactVirtualizedTable from 'components/ReactVirtualizedTable'
import RegistrationForm from 'components/RegistrationForm'
import React from 'react'
import styled from 'styled-components'
import SideBar from '../components/SideBar/SideBar'
import Data from '../data/Data.js'

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

const RegistrationFormContainer = styled.div`
  /* background-color: yellow; */
  height: 100%;
`

export const RecentRegistrationPage = () => {
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
            parentDirectory='Patient Registration'
            dashboardType='Registration Desk'
          />
        </HeaderContainer>
        <RegistrationFormContainer>
          <InformationTable columns={columns} data={data} />
        </RegistrationFormContainer>
      </Wrapper>
    </Container>
  )
}
