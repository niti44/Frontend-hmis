import Action from 'components/Action'
import React from 'react'

const Data = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'DATE TIME',
        accessor: 'date_time', // accessor is the "key" in the data
      },
      {
        Header: 'PATIENT NAME',
        accessor: 'patient_name',
      },
      {
        Header: 'PID',
        accessor: 'pid',
      },
      {
        Header: 'AGE/SEX',
        accessor: 'age_sex',
      },
      {
        Header: 'TYPE',
        accessor: 'type',
      },
      {
        Header: 'ACTION',
        accessor: 'action',
        Cell: ({ cell: { value } }) => <Action values={value} />,
      },
    ],
    []
  )
  const data = React.useMemo(
    () => [
      {
        date_time: '1-2-2055 2:30 AM',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        type: 'OPD',
        action: ['Edit', 'View'],
      },
      {
        date_time: '1-2-2055 2:30 AM',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        type: 'OPD',
        action: ['Edit', 'View'],
      },
      {
        date_time: '1-2-2055 2:30 AM',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        type: 'OPD',
        action: ['Edit', 'View'],
      },
      {
        date_time: '1-2-2055 2:30 AM',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        type: 'OPD',
        action: ['Edit', 'View'],
      },
      {
        date_time: '1-2-2055 2:30 AM',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        type: 'OPD',
        action: ['Edit', 'View'],
      },
      {
        date_time: '1-2-2055 2:30 AM',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        type: 'OPD',
        action: ['Edit', 'View'],
      },
      {
        date_time: '1-2-2055 2:30 AM',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        type: 'OPD',
        action: ['Edit', 'View'],
      },
      {
        date_time: '1-2-2055 2:30 AM',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        type: 'OPD',
        action: ['Edit', 'View'],
      },
      {
        date_time: '1-2-2055 2:30 AM',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        type: 'OPD',
        action: ['Edit', 'View'],
      },
      {
        date_time: '1-2-2055 2:30 AM',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        type: 'OPD',
        action: ['Edit', 'View'],
      },
      {
        date_time: '1-2-2055 2:30 AM',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        type: 'OPD',
        action: ['Edit', 'View'],
      },
      {
        date_time: '1-2-2055 2:30 AM',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        type: 'OPD',
        action: ['Edit', 'View'],
      },
      {
        date_time: '1-2-2055 2:30 AM',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        type: 'OPD',
        action: ['Edit', 'View'],
      },
      {
        date_time: '1-2-2055 2:30 AM',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        type: 'OPD',
        action: ['Edit', 'View'],
      },
      {
        date_time: '1-2-2055 2:30 AM',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        type: 'OPD',
        action: ['Edit', 'View'],
      },
      {
        date_time: '1-2-2055 2:30 AM',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        type: 'OPD',
        action: ['Edit', 'View'],
      },
      {
        date_time: '1-2-2055 2:30 AM',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        type: 'OPD',
        action: ['Edit', 'View'],
      },
      {
        date_time: '1-2-2055 2:30 AM',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        type: 'OPD',
        action: ['Edit', 'View'],
      },
      {
        date_time: '1-2-2055 2:30 AM',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        type: 'OPD',
        action: ['Edit', 'View'],
      },
      {
        date_time: '1-2-2055 2:30 AM',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        type: 'OPD',
        action: ['Edit', 'View'],
      },
      {
        date_time: '1-2-2055 2:30 AM',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        type: 'OPD',
        action: ['Edit', 'View'],
      },
      {
        date_time: '1-2-2055 2:30 AM',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        type: 'OPD',
        action: ['Edit', 'View'],
      },
      {
        date_time: '1-2-2055 2:30 AM',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        type: 'OPD',
        action: ['Edit', 'View'],
      },
      {
        date_time: '1-2-2055 2:30 AM',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        type: 'OPD',
        action: ['Edit', 'View'],
      },
      {
        date_time: '1-2-2055 2:30 AM',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        type: 'OPD',
        action: ['Edit', 'View'],
      },
      {
        date_time: '1-2-2055 2:30 AM',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        type: 'OPD',
        action: ['Edit', 'View'],
      },
      {
        date_time: '1-2-2055 2:30 AM',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        type: 'OPD',
        action: ['Edit', 'View'],
      },
    ],
    []
  )

  return { columns, data }
}

export default Data
