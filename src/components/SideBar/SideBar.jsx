import React from 'react'
import styled from 'styled-components'
import HospitalName from 'assets/hospitalName.png'
import GunasysLogo from 'assets/PoweredByGunasys.png'

import { ChevronRight, UserPlus } from 'react-feather'
import { UserMinus } from 'react-feather'
import { User } from 'react-feather'
import { Link } from 'react-router-dom'


const Container = styled.div`
   height: 100vh;
`

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0px 40px 0px ;
`

const Image = styled.img`
  background-color: white;
  width: 60%;
  height: 80%;
`

const TextContainer = styled.div`
  padding: 0px 0px 10px 20px;
  margin: 0px;
`
const MenuTitle = styled.div`
  text-align: left;
  letter-spacing: 0px;
  color: #2D2D2D;
  text-transform: uppercase;
  opacity: 1;
`

const MenuContainer = styled.div`
  height: 70%;
  padding: 0px 5px 0px 30px ;
  
`

const Menu = styled.li`
  display: flex;
  flex-direction: column;
  
`

const MenuItems = styled.div`
  display: flex;
  padding: 6px 3px 6px 10px;
  background-color: #222647;
  border-radius: 11px;
  width: 15vw;
  margin: 2px;
  
`
const MenuText = styled.div`
  margin: auto;
  align-items: center;
  font-size: 15px;
  color: white;
  flex: 4;
`
const MenuIcon = styled.div`
  justify-content:left;
  padding: 0px 10px 0px 5px ;
  color: white;
  stroke-width: 1.5px;
  `
const MenuArrow = styled.div`
  padding: 0px 0px 0px 10px;
  color: #ffffff;
  align-items: center;
`

const FooterContainer = styled.div`
  align-content: center;
  margin: auto;
  flex: 1;
  height: 20%;
`

const FooterImage = styled.img``


const SideBar = () => {
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src={HospitalName} />
        </ImageContainer>
        <TextContainer>
          <MenuTitle> DASHBOARDS</MenuTitle>
        </TextContainer>
        <MenuContainer>
          <Menu>
            <MenuItems>
              <MenuIcon>
                <UserPlus />
              </MenuIcon>
              <MenuText>
                <Link
                  to='/patientRegistration'
                  style={{ textDecoration: 'none' , color:'white'}}
                >
                  Register Patient
                </Link>
              </MenuText>

              <MenuArrow>
                <ChevronRight />
              </MenuArrow>
            </MenuItems>
            <MenuItems>
              <MenuIcon>
                <UserMinus />
              </MenuIcon>
              <MenuText>Patient Discharge</MenuText>
              <MenuArrow>
                <ChevronRight />
              </MenuArrow>
            </MenuItems>

            <MenuItems>
              <MenuIcon>
                <User />
              </MenuIcon>
              <MenuText>
                <Link
                  to='/recentRegistrations'
                  style={{ textDecoration: 'none' , color:'white'}}
                >
                  Recent Registrations
                </Link>
              </MenuText>
              <MenuArrow>
                <ChevronRight />
              </MenuArrow>
            </MenuItems>
          </Menu>
        </MenuContainer>
        <FooterContainer>
          <FooterImage src={GunasysLogo}></FooterImage>
        </FooterContainer>
      </Wrapper>
    </Container>
  )
}

export default SideBar
