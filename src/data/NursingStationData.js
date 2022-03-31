import Action from 'components/Action'
import React from 'react'

const Data = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'BED NO.',
        accessor: 'bed_number', // accessor is the "key" in the data
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
        Header: 'STATUS',
        accessor: 'status',
      },
      {
        Header: 'CONTACT NUMBER',
        accessor: 'contact_number',
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
        bed_number: '1234',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        status: 'Good',
        contact_number: '9808933456',
        action: ['Edit', 'View'],
      },
      {
        bed_number: '1234',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        status: 'Good',
        contact_number: '9808933456',
        action: ['Edit', 'View'],
      },
      {
        bed_number: '1234',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        status: 'Good',
        contact_number: '9808933456',
        action: ['Edit', 'View'],
      },
      {
        bed_number: '1234',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        status: 'Good',
        contact_number: '9808933456',
        action: ['Edit', 'View'],
      },
      {
        bed_number: '1234',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        status: 'Good',
        contact_number: '9808933456',
        action: ['Edit', 'View'],
      },
      {
        bed_number: '1234',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        status: 'Good',
        contact_number: '9808933456',
        action: ['Edit', 'View'],
      },
      {
        bed_number: '1234',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        status: 'Good',
        contact_number: '9808933456',
        action: ['Edit', 'View'],
      },
      {
        bed_number: '1234',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        status: 'Good',
        contact_number: '9808933456',
        action: ['Edit', 'View'],
      },
      {
        bed_number: '1234',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        status: 'Good',
        contact_number: '9808933456',
        action: ['Edit', 'View'],
      },
      {
        bed_number: '1234',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        status: 'Good',
        contact_number: '9808933456',
        action: ['Edit', 'View'],
      },
      {
        bed_number: '1234',
        patient_name: 'Ram bahadur pradhananga',
        pid: '1234',
        age_sex: '23/M',
        status: 'Good',
        contact_number: '9808933456',
        action: ['Edit', 'View'],
      },
    ],
    []
  )

  return { columns, data }
}

export default Data
