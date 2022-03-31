import { Link } from '@material-ui/core'
import { Breadcrumbs } from '@material-ui/core'
import React from 'react'
import { Bell, Search } from 'react-feather'
import styled from 'styled-components'
import ProfilePicture from 'assets/UserNurse.jpg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  background-color: #EEEEEE;
  box-shadow: 0px 0px 13px #0000004A;
`
const DashboardTypeContainer = styled.div`
  padding: 10px 0px 10px 20px ; 
  justify-content : center;
`


const SearchBarContainer = styled.div`
  /* width: 60%; */
  padding: 5px 10px 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: none;
  flex:1;
`
const Input = styled.input`
  width: 90%;
  height: 24px;
  padding: 10px 15px 10px 15px;
  border-radius: 10px;
  border: 0px;

`
const SearchIconContainer = styled.div`
  position: absolute;
  right: 6%;
  padding-top:5px ;
  
`
const NotificationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
const DividerContainer = styled.div`
  position: relative;
  /* flex: 0.06; */
  padding: 0px;
  margin: 10px;
`
const Divider = styled.div`
  position: absolute;
  left: 50%;
  top: 28%;
  bottom: 28%;
  border-left: 1.8px solid #BCBCBC;
`

const StaffInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right:10px;
`
const BreadCrumbsContainer = styled.div``
const DashboardType = styled.div`
  font-weight:bold;
  padding-top:5px;
  font-size:18px;
`
const ProfilePhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%; /*don't forget prefixes*/
  background-image: url('path/to/image');
  background-position: center center;
  /* as mentioned by Vad: */
  background-size: cover;
  padding: 5px;
`
const WelcomeText = styled.div`
  padding: 5px;
  background-color: none;

`
const DropdownMenu = styled.div``

const Header = (props) => {
  return (
    <Container>
      <DashboardTypeContainer>
        <BreadCrumbsContainer>
          <Breadcrumbs separator='›' aria-label='breadcrumb'>
            <Link underline='hover' color='inherit' href='/'>
              {props.topLevelDirectory}
            </Link>
            <Link underline='hover' color='inherit' href='/'>
              {props.parentDirectory}
            </Link>
          </Breadcrumbs>
        </BreadCrumbsContainer>
        <DashboardType>
          {props.dashboardType}
        </DashboardType>
      </DashboardTypeContainer>
      <SearchBarContainer>
        <SearchIconContainer>
          <Search />
        </SearchIconContainer>
        <Input type='text' placeholder='Search For Patient'></Input>
      </SearchBarContainer>
      <NotificationContainer>
        <Bell/>
      </NotificationContainer>
      <DividerContainer>
        <Divider />
      </DividerContainer>
      <StaffInfoContainer>
        <ProfilePhoto src={ProfilePicture}></ProfilePhoto>
        <WelcomeText>Hi, Registration Desk</WelcomeText>
        <DropdownMenu>
          <KeyboardArrowDownIcon />
        </DropdownMenu>
      </StaffInfoContainer>
    </Container>
  )
}

export default Header
