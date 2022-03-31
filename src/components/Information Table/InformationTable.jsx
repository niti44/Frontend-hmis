import React from 'react'
import { useTable } from 'react-table/dist/react-table.development'
export const InformationTable = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    })
  const styles = {
    table: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      height: '100%',
      width: '99%',
      margin: '20px',
      padding:'10px 20px 20px 20px',
      borderRadius:'15px',
      backgroundColor:'white'
    },
    thead: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
    },
    td: {
      textAlign: 'left',
      width: '100%',
    },
    tr: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1.5fr 3fr 1fr 1fr 1fr 1.6fr 1fr',
      paddingTop: '10px',
      paddingBottom: '10px',
      borderBottom: '0.000002px solid #707070',
    },
    th: {
      display: 'flex',
      justifyContent: 'flex-start',
      width: '100%',
    },
    tbody: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
  }
  return (
    <table style={styles.table} {...getTableProps()}>
      <thead style={styles.thead}>
        {headerGroups.map((headerGroup) => (
          <tr style={styles.tr} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th style={styles.th} {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody style={styles.tbody} {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr style={styles.tr} {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()} style={styles.td}>
                    {cell.column.id === 'action' ? (
                      
                      cell.render('Cell')
                        
                    
                    ) : (
                      cell.render('Cell')
                    )}
                    {console.log(cell)}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
