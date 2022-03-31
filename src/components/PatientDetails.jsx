import React from 'react'
import styled from 'styled-components'
import QRCode from 'assets/QRCode.jpg'
const Container = styled.div`
 display:flex;
 flex-direction:column;
 height:100%;
 background-color:white;
 margin:10px;
 border-radius:15px;
`
const Wrapper = styled.div`
 display:flex;
 align-items:center;
 height:100%;
 flex-wrap:wrap;
`
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: center;
  margin-bottom:10px;
`
const QRContainer = styled.div`
 display:flex;
`
const QR = styled.img`
  height: 100px;
  width: 100px;
  margin:12px;
  margin-top: 5px;
  border-radius: 20px;
  border: 1px solid #70707029;
`
const PatientIdentifierContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  /* margin-bottom: 10px; */
`
const PatientName = styled.div`
  font-size:24px;
  opacity:1;
  font-weight:bold;
`
const PatientId = styled.div`
  font-size: 18px;
  opacity: 1;
  color: #222647;
`
const TransferPatient = styled.a`
  font-size: 18px;
  opacity: 1;
`
const DividerContainer = styled.div`
 position:relative;
 height:100px;
 width:10px;
 flex-grow:0.5;
`
const Divider = styled.div`
  position: absolute;
  border-left: 1px solid grey;
  left: 50%;
  top: 20%;
  bottom: 20%;
`
const PatientDetailsContainer = styled.div`
display:flex;
  flex-grow:1;
`
const PatientSecondaryInfoContainer = styled.div`
  display: grid;
  grid-template-columns: auto 0.2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  padding:10px;
  flex-grow:1;
`
const ColumnDivider = styled.div`
  /* grid-column-start: 2;
  grid-column-end: 3;*/
  grid-column-start: 2;
  grid-column-end: 3;
  text-align:right;
`
const Key = styled.div`
  color: '#727272';
  font-size: 16px;
  font-weight: bold;
  /* /* padding-bottom:5px; */
  padding-bottom:5px;
  grid-column-start: 1;
  grid-column-end: 2;
`
const Value = styled.div`
  color: black;
  font-size: 16px;
  display: flex;
  grid-column-start: 3;
  grid-column-end: 4;
  padding-left: 10px;
  padding-bottom: 5px;
`
const Button = styled.button`
  /* display: flex; */
  flex-grow: 1;
  margin-left: 10px;
  margin-right: 10px;
  padding:10px;
  height: 100%;
  background-color: #222647;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 10px;
`
const PatientDetailsCopy = () => {
  return (
    <Container>
      <Wrapper>
        <QRContainer>
          <QR src = {QRCode}></QR>
        </QRContainer>
        <PatientIdentifierContainer>
          <PatientName>Ram Bahadur Karki</PatientName>
          <PatientId>Patient ID : BIS2323</PatientId>
          <TransferPatient href='#'>Transfer Patient</TransferPatient>
        </PatientIdentifierContainer>
        <DividerContainer>
          <Divider></Divider>
        </DividerContainer>
        <PatientDetailsContainer>
          <PatientSecondaryInfoContainer>
            <Key>Age</Key>
            <ColumnDivider>:</ColumnDivider>
            <Value>51</Value>
            <Key>Gender</Key>
            <ColumnDivider>:</ColumnDivider>
            <Value>Male</Value>
            <Key>Blood Group</Key>
            <ColumnDivider>:</ColumnDivider>
            <Value>B+</Value>
          </PatientSecondaryInfoContainer>
          <PatientSecondaryInfoContainer>
            <Key>Street</Key>
            <ColumnDivider>:</ColumnDivider>
            <Value>Khursane</Value>
            <Key>District</Key>
            <ColumnDivider>:</ColumnDivider>
            <Value>Jhapa</Value>
            <Key>Country</Key>
            <ColumnDivider>:</ColumnDivider>
            <Value>Nepal</Value>
          </PatientSecondaryInfoContainer>
          <PatientSecondaryInfoContainer>
            <Key>Email</Key>
            <ColumnDivider>:</ColumnDivider>
            <Value>rambahadhurkarki@gmail.com</Value>
            <Key>Mobile</Key>
            <ColumnDivider>:</ColumnDivider>
            <Value>9808584835</Value>
            <Key>Phone</Key>
            <ColumnDivider>:</ColumnDivider>
            <Value>01-203456</Value>
          </PatientSecondaryInfoContainer>
        </PatientDetailsContainer>
      </Wrapper>
      <ButtonContainer>
        <Button>PastVisit</Button>
        <Button>Observation</Button>
        <Button>Reports</Button>
        <Button>Medication</Button>
        <Button>Services</Button>
        <Button>Journey</Button>
        <Button>Billings</Button>
      </ButtonContainer>
    </Container>
  )
}
export default PatientDetailsCopy