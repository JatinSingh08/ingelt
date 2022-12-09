import React from 'react'
import './MatchesTable.css'
const MatchesTable = () => {
  return (
    <div>
      
      

      <div className='match-table'>
        <table>
          <tr>
            <th colSpan='2' className='cricket-head'>Cricket</th>
            <th colSpan='2' className='table-head'>Football</th>
            <th colSpan='2' className='table-head'>Tennis</th>
          </tr>
          <tr>
            <th>Match Status</th>
            <th>Match Type</th>
            <th>Match Format</th>
            <th>Team1</th>
            <th></th>
            <th>Team2</th>
          </tr>

          <tr className='border-round'>
            <td>
              <div className='live'>Live</div>
            </td>
            <td>
              <div className='domestic'>Domestic</div>
            </td>
            <td>
              <div className='odi'>ODI</div>
            </td>
            <td>Afghanistan</td>
            <td className='vs'>Vs</td>
            <td>United States...</td>
          </tr>

          <tr>
            <td>
              <div className='pending'>Pending</div>
            </td>
            <td>
              <div className='domestic'>Domestic</div>
            </td>
            <td>
              <div className='odi'>ODI</div>
            </td>
            <td>Afghanistan</td>
            <td className='vs'>Vs</td>
            <td>United States...</td>
          </tr>

          <tr>
            <td>
              <div className='pending'>Pending</div>
            </td>
            <td>
              <div className='domestic'>Domestic</div>
            </td>
            <td>
              <div className='odi'>ODI</div>
            </td>
            <td>Afghanistan</td>
            <td className='vs'>Vs</td>
            <td>United States...</td>
          </tr>

          <tr>
            <td>
              <div className='pending'>Pending</div>
            </td>
            <td>
              <div className='domestic'>Domestic</div>
            </td>
            <td>
              <div className='odi'>ODI</div>
            </td>
            <td>Afghanistan</td>
            <td className='vs'>Vs</td>
            <td>United States...</td>
          </tr>

          <tr>
            <td>
              <div className='pending'>Pending</div>
            </td>
            <td>
              <div className='domestic'>Domestic</div>
            </td>
            <td>
              <div className='odi'>ODI</div>
            </td>
            <td>Afghanistan</td>
            <td className='vs'>Vs</td>
            <td>United States...</td>
          </tr>

          <tr>
            <td >
              <div className='pending'>Pending</div>
            </td>
            <td>
              <div className='domestic'>Domestic</div>
            </td>
            <td>
              <div className='odi'>ODI</div>
            </td>
            <td>Afghanistan</td>
            <td className='vs'>Vs</td>
            <td>United States...</td>
          </tr>
        </table>

      </div>
    </div>
  )
}

export default MatchesTable
