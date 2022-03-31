import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  /* padding: 10px; */
  background-color: white;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 20px;
  margin: 2px;
`
const DateTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: 30px;
`
const Date = styled.div`
  font-weight: bold;
  font-size: 18px;
`
const Time = styled.div`
  font-size: 16px;
  color: #727272;
`
const Header = styled.div`
  font-size: 14px;
  color: #727272;
  padding: 2px;
`

const Value = styled.div`
  font-size: 14px;
  color: Black;
  padding: 2px;
`
const DividerContainer = styled.div`
  position: relative;
  flex: 1;
`
const Divider = styled.div`
  position: absolute;
  left: 50%;
  top: 5%;
  bottom: 5%;
  border-left: 2px solid #727272;
`

const VisitInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-right: 30px;
  padding-left: 10px;
`
const Button = styled.div`
  background-color: #222647;
  color: white;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  font-size: 12px;
`

const PastVisitTimeline = () => {
  return (
    <Container>
      <DateTimeContainer>
        <Date>16 Dec 2022</Date>
        <Time>2:22 pm</Time>
      </DateTimeContainer>
      <DividerContainer>
        <Divider></Divider>
      </DividerContainer>
      <VisitInfoContainer>
        <Header>Treatment</Header>
        <Value>Leg Operation</Value>
      </VisitInfoContainer>
      <DividerContainer>
        <Divider></Divider>
      </DividerContainer>
      <VisitInfoContainer>
        <Header>Consultation</Header>
        <Value>Dr. Rabin K Ghimire</Value>
      </VisitInfoContainer>
      <DividerContainer>
        <Divider></Divider>
      </DividerContainer>
      <VisitInfoContainer>
        <Header>Discharged on</Header>
        <Value>20 Dec 2022</Value>
      </VisitInfoContainer>
      <OptionsContainer>
        <Button>View Details</Button>
      </OptionsContainer>
    </Container>
  )
}

export default PastVisitTimeline
