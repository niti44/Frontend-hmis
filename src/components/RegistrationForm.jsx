import React from 'react'
import styled from 'styled-components'
import MultipleSelectCheckmarks from './DropDown'
import Button from '@mui/material/Button'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #EEEEEE;
  padding: 15px;
  height: 100vh;
`
const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 15px 0px ;
  margin-bottom: 15px;
  background-color: white;
  border-radius: 15px 15px 15px 15px;
  width: 100%;

`
const InformationHeader = styled.div`
  font-weight: bold;
  padding: 15px 0px 5px 20px ;
  font-size: 16px;
  /* border-bottom: 10px solid #70707047; */
`
const InformationFormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  flex: 1;
  background-color: white;

`
const InformationFormFields = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px 15px 25px;
  background-color: none;
`
const Input = styled.input`
  height: 35px;
  width: 340px;
  background-color: none;
  margin: 0px;
  padding-left:10px;
  border-radius: 5px;
  border: 2px solid #70707047;
`

const Select = styled.select`
  height: 42px;
  width: 356px;
  background-color: none;
  margin: 0px;
  padding-left: 10px;
  border-radius: 5px;
  border: 2px solid #70707047;
`

const RegisterButtonContainer = styled.div`
  display: flex;
  padding: 0px;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  background-color:none;

`
const H4 = styled.h4`
  padding: 0px 0px 5px 0px;
  margin: 0px;
  font-weight: 200;
`

const Divider = styled.div`
  /* border-bottom: 2px solid black; */
  height: 1.5px;
  margin: 0px 20px 20px 20px;
  background-color: #70707047;
`

const RegistrationForm = () => {
  return (
    <Container>
      <InformationContainer>
          <InformationHeader>General Information</InformationHeader>
          <Divider></Divider>
        <InformationFormContainer>
          <InformationFormFields>
            <H4>First Name</H4>
            <Input type='text' placeholder='Enter Full Name'></Input>
          </InformationFormFields>
          <InformationFormFields>
            <H4>Middle Name</H4>
            <Input type='text' placeholder='Enter Middle Name'></Input>
          </InformationFormFields>
          <InformationFormFields>
            <H4>Last Name</H4>
            <Input type='text' placeholder='Enter Last Name'></Input>
          </InformationFormFields>
          <InformationFormFields>
            <H4>Age</H4>
            <Input type='text' placeholder='Enter Age'></Input>
          </InformationFormFields>
          <InformationFormFields>
            <H4>Gender</H4>
            <Select id="Gender" name="Gender">
                <option value="Gender"disabled selected>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </Select>
          </InformationFormFields>
        </InformationFormContainer>
      </InformationContainer>
      <InformationContainer>
        <InformationHeader>Contact Information</InformationHeader>
        <Divider></Divider>
        <InformationFormContainer>
          <InformationFormFields>
            <H4>Local Address</H4>
            <Input type='text' placeholder='Enter LocalAddress'></Input>
          </InformationFormFields>
          <InformationFormFields>
            <H4>State</H4>
            <Select id="State" name="state">
                <option value="Gender"disabled selected>Select State</option>
                <option value="Male">Bagmati</option>
                <option value="Female">Lumbini</option>
                <option value="Other">Sagarmatha</option>
            </Select>
          </InformationFormFields>
          <InformationFormFields>
            <H4>District</H4>
            <Select id="District" name="District">
                <option value="Gender"disabled selected>Select District</option>
                <option value="Male">Kathmandu</option>
                <option value="Female">Chitwan</option>
                <option value="Other">Lalitpur</option>
                <option value="Other">Bhaktapur</option>
            </Select>
          </InformationFormFields>
          <InformationFormFields>
            <H4>Country</H4>
            <Input type='text' placeholder='Nepal'></Input>
          </InformationFormFields>
          <InformationFormFields>
            <H4>Mobile Number</H4>
            <Input type='text' placeholder='Enter Mobile Number'></Input>
          </InformationFormFields>
          <InformationFormFields>
            <H4>Email Address</H4>
            <Input type='text' placeholder='Enter Email Address'></Input>
          </InformationFormFields>
        </InformationFormContainer>
      </InformationContainer>
      <InformationContainer>
        <InformationHeader>Patient Department</InformationHeader>
        <Divider></Divider>
        <InformationFormContainer>
          <InformationFormFields>
            <H4>Patient Type</H4>
            <Select id="Patient Type" name="Patient Type">
                <option value="PatientType"disabled selected>Select Patient Type</option>
                <option value="IPD">IPD</option>
                <option value="OPD">OPD</option>
                <option value="Emergency">Emergency</option>
            </Select>
          </InformationFormFields>
          <InformationFormFields>
            <H4>Department</H4>
            <Select id="Department" name="Department">
                <option value="Gender"disabled selected>Select Department</option>
                <option value="Male">ENT</option>
                <option value="Female">ICU</option>
                <option value="Other">Obstetrics and Gynecology Department</option>
                <option value="Female">Cardiology</option>
                <option value="Female">Burn Center</option>
                <option value="Female">Chaplaincy</option>
                <option value="Female">Coronary Care Unit</option>
                <option value="Female">Nephrology</option>
                <option value="Female">Neurology</option>

            </Select>
          </InformationFormFields>
          <InformationFormFields>
            <H4>Assign Doctor</H4>
              <Select  id="dOCTOR" name="dOCTOR">
                <option value="Doctor"disabled selected>Select Doctor</option>
                <option value="Dr.Nabin Pokhrel">Dr.Nabin Pokhrel</option>
                <option value="Dr.Hari Prasad">Dr.Hari Prasad</option>
                <option value="Dr.Arjun khatri">Dr.Arjun khatri</option>
                </Select>
          </InformationFormFields>
        </InformationFormContainer>
      </InformationContainer>
      
      <RegisterButtonContainer>
        <Button
          variant='contained'
          startIcon={<AddCircleOutlineOutlinedIcon />}
          color='secondary'
          size='large'
        >
          Register
        </Button>
      </RegisterButtonContainer>
    
    </Container>
  )
}

export default RegistrationForm
