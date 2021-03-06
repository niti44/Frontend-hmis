import React from 'react'

const Data = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'DATE TIME',
        accessor: 'date_time', // accessor is the "key" in the data
      },
      {
        Header: 'ECG',
        accessor: 'ecg',
      },
      {
        Header: 'NIBP',
        accessor: 'nibp',
      },
      {
        Header: 'SpO2',
        accessor: 'spo2',
      },
      {
        Header: 'TEMP',
        accessor: 'temp',
      },
      {
        Header: 'P/MIN',
        accessor: 'p_min',
      },
      {
        Header: 'RR/MIN',
        accessor: 'rr_min',
      },
      {
        Header: 'BP',
        accessor: 'bp',
      },
      {
        Header: 'REMARKS',
        accessor: 'remarks',
      },
    ],
    []
  )
  const data = React.useMemo(
    () => [
      {
        date_time: '01-12-30 2:30AM',
        ecg: '000000',
        nibp: '000000',
        spo2: '000000',
        temp: '000000',
        p_min: '000000',
        rr_min: '000000',
        bp: '000000',
        remarks: 'General Condition Seems Fair',
      },
      {
        date_time: '01-12-30 2:30AM',
        ecg: '000000',
        nibp: '000000',
        spo2: '000000',
        temp: '000000',
        p_min: '000000',
        rr_min: '000000',
        bp: '000000',
        remarks: 'General Condition Seems Fair',
      },
      {
        date_time: '01-12-30 2:30AM',
        ecg: '000000',
        nibp: '000000',
        spo2: '000000',
        temp: '000000',
        p_min: '000000',
        rr_min: '000000',
        bp: '000000',
        remarks: 'General Condition Seems Fair',
      },
      {
        date_time: '01-12-30 2:30AM',
        ecg: '000000',
        nibp: '000000',
        spo2: '000000',
        temp: '000000',
        p_min: '000000',
        rr_min: '000000',
        bp: '000000',
        remarks: 'General Condition Seems Fair',
      },
      {
        date_time: '01-12-30 2:30AM',
        ecg: '000000',
        nibp: '000000',
        spo2: '000000',
        temp: '000000',
        p_min: '000000',
        rr_min: '000000',
        bp: '000000',
        remarks: 'General Condition Seems Fair',
      },
      {
        date_time: '01-12-30 2:30AM',
        ecg: '000000',
        nibp: '000000',
        spo2: '000000',
        temp: '000000',
        p_min: '000000',
        rr_min: '000000',
        bp: '000000',
        remarks: 'General Condition Seems Fair',
      },
      {
        date_time: '01-12-30 2:30AM',
        ecg: '000000',
        nibp: '000000',
        spo2: '000000',
        temp: '000000',
        p_min: '000000',
        rr_min: '000000',
        bp: '000000',
        remarks: 'General Condition Seems Fair',
      },
      {
        date_time: '01-12-30 2:30AM',
        ecg: '000000',
        nibp: '000000',
        spo2: '000000',
        temp: '000000',
        p_min: '000000',
        rr_min: '000000',
        bp: '000000',
        remarks: 'General Condition Seems Fair',
      },
      {
        date_time: '01-12-30 2:30AM',
        ecg: '000000',
        nibp: '000000',
        spo2: '000000',
        temp: '000000',
        p_min: '000000',
        rr_min: '000000',
        bp: '000000',
        remarks: 'General Condition Seems Fair',
      },
      {
        date_time: '01-12-30 2:30AM',
        ecg: '000000',
        nibp: '000000',
        spo2: '000000',
        temp: '000000',
        p_min: '000000',
        rr_min: '000000',
        bp: '000000',
        remarks: 'General Condition Seems Fair',
      },
      {
        date_time: '01-12-30 2:30AM',
        ecg: '000000',
        nibp: '000000',
        spo2: '000000',
        temp: '000000',
        p_min: '000000',
        rr_min: '000000',
        bp: '000000',
        remarks: 'General Condition Seems Fair',
      },
      {
        date_time: '01-12-30 2:30AM',
        ecg: '000000',
        nibp: '000000',
        spo2: '000000',
        temp: '000000',
        p_min: '000000',
        rr_min: '000000',
        bp: '000000',
        remarks: 'General Condition Seems Fair',
      },
      {
        date_time: '01-12-30 2:30AM',
        ecg: '000000',
        nibp: '000000',
        spo2: '000000',
        temp: '000000',
        p_min: '000000',
        rr_min: '000000',
        bp: '000000',
        remarks: 'General Condition Seems Fair',
      },
      {
        date_time: '01-12-30 2:30AM',
        ecg: '000000',
        nibp: '000000',
        spo2: '000000',
        temp: '000000',
        p_min: '000000',
        rr_min: '000000',
        bp: '000000',
        remarks: 'General Condition Seems Fair',
      },
      {
        date_time: '01-12-30 2:30AM',
        ecg: '000000',
        nibp: '000000',
        spo2: '000000',
        temp: '000000',
        p_min: '000000',
        rr_min: '000000',
        bp: '000000',
        remarks: 'General Condition Seems Fair',
      },
      {
        date_time: '01-12-30 2:30AM',
        ecg: '000000',
        nibp: '000000',
        spo2: '000000',
        temp: '000000',
        p_min: '000000',
        rr_min: '000000',
        bp: '000000',
        remarks: 'General Condition Seems Fair',
      },
      {
        date_time: '01-12-30 2:30AM',
        ecg: '000000',
        nibp: '000000',
        spo2: '000000',
        temp: '000000',
        p_min: '000000',
        rr_min: '000000',
        bp: '000000',
        remarks: 'General Condition Seems Fair',
      },
      {
        date_time: '01-12-30 2:30AM',
        ecg: '000000',
        nibp: '000000',
        spo2: '000000',
        temp: '000000',
        p_min: '000000',
        rr_min: '000000',
        bp: '000000',
        remarks: 'General Condition Seems Fair',
      },
      {
        date_time: '01-12-30 2:30AM',
        ecg: '000000',
        nibp: '000000',
        spo2: '000000',
        temp: '000000',
        p_min: '000000',
        rr_min: '000000',
        bp: '000000',
        remarks: 'General Condition Seems Fair',
      },
      {
        date_time: '01-12-30 2:30AM',
        ecg: '000000',
        nibp: '000000',
        spo2: '000000',
        temp: '000000',
        p_min: '000000',
        rr_min: '000000',
        bp: '000000',
        remarks: 'General Condition Seems Fair',
      },
      {
        date_time: '01-12-30 2:30AM',
        ecg: '000000',
        nibp: '000000',
        spo2: '000000',
        temp: '000000',
        p_min: '000000',
        rr_min: '000000',
        bp: '000000',
        remarks: 'General Condition Seems Fair',
      },
      {
        date_time: '01-12-30 2:30AM',
        ecg: '000000',
        nibp: '000000',
        spo2: '000000',
        temp: '000000',
        p_min: '000000',
        rr_min: '000000',
        bp: '000000',
        remarks: 'General Condition Seems Fair',
      },
    ],
    []
  )

  return { columns, data }
}

export default Data
