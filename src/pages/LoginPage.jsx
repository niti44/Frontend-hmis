import React from 'react'
import styled from 'styled-components'
import CurveLogo from 'assets/loginPageCurve.png'
import UserNurse from 'assets/UserNurse.jpg'

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`
const ImageContainer = styled.div`

  /* flex-grow: 1; */
  width:60%;
  /* height: auto; */
`
const Image = styled.img`
  /* display: block; */
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;

  /* height:100vh; */
`
const FormContainer = styled.div`
  width:30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 0.8;
`
const WelcomeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:30px;
`
const WelcomeText = styled.div`
  font-size: 28px;
  color: #2d2d2d;
`
const BrandName = styled.div`
  color: #4c51bf;
  font-weight: bold;
  font-size:32px;
`
const FormContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const FormHeader = styled.div`
  size: 32px;
  font-weight: bold;
  color: #2d2d2d;
  padding-bottom:10px;
  text-align:left;
  width:90%;
`
const FormInput = styled.input`
  width: 90%;
  height: 50px;
  background-color: none;
  margin: 0px;
  padding-left: 10px;
  border-radius: 5px;
  border: 2px solid #70707047;
  font-size: 16px;
`
const LoginButton = styled.button`
  width: 92%;
  height: 60px;
  border:none ;  
  background-color: #222647;
  border-radius: 13px;
  opacity: 1;
  color: white;
  font-size:24px;
  font-weight:200;
  cursor:pointer;
`
const VerifyDataRequestText = styled.div`
  color: #727272;
  font-size: 16px;
  text-align: center;
  padding:40px;
  margin-left:40px;
  margin-right:40px;
`

const LoginPage = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={CurveLogo} />
      </ImageContainer>
      <FormContainer>
        <WelcomeTextContainer>
          <WelcomeText>Welcome to</WelcomeText>
          <BrandName>Gunasys Health Care</BrandName>
        </WelcomeTextContainer>
        <FormContentContainer>
          <FormHeader>Username</FormHeader>
          <FormInput placeholder='Enter your Username' />
        </FormContentContainer>
        <FormContentContainer>
          <FormHeader>Password</FormHeader>
          <FormInput placeholder='**************' />
        </FormContentContainer>
        <LoginButton>Login</LoginButton>
        <VerifyDataRequestText>
          Please get your Login Credentials from Hospital Administration .
        </VerifyDataRequestText>
      </FormContainer>
    </Container>
  )
}

export default LoginPage
