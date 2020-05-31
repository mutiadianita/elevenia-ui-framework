import React from 'react';
import { Table } from '../Components/Atom';

const TablePage = () => {
    return (
      <>
        <h1>Table</h1>
        <Table>
          <thead>
            <tr>
              <th rowSpan={2}>No</th>
              <th rowSpan={2}>Name</th>
              <th className="u-tx-center" colSpan={3}>Gender</th>
            </tr>
            <tr>
              <th>Male</th>
              <th>Female</th>
            </tr>
          </thead>
          <tbody style={{ height: 100, overflowY: 'auto' }}>
            <tr>
              <td>1</td>
              <td>Wahyu</td>
              <td>Yess</td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Diana</td>
              <td></td>
              <td>Yess</td>
            </tr>
          </tbody>
        </Table>
        <Table scrollable className="u-mt-40" width={500} height={200}>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Member Status</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Diana</td>
              <td>Diana@elevenia.co.id</td>
              <td>08322143272</td>
              <td>Active</td>
              <td>Sudirman Street</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Wahyu</td>
              <td>Wahyu@elevenia.co.id</td>
              <td>0387382472</td>
              <td>Active</td>
              <td>Sudirman Street</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Andre</td>
              <td>Andre@elevenia.co.id</td>
              <td>0823458343</td>
              <td>Non Active</td>
              <td>Sudirman Street</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Grisella</td>
              <td>Grisella@elevenia.co.id</td>
              <td>0832542735</td>
              <td>Active</td>
              <td>Sudirman Street</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Aditya</td>
              <td>Aditya@elevenia.co.id</td>
              <td>0823482375</td>
              <td>Non Active</td>
              <td>Sudirman Street</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Ali</td>
              <td>Ali@elevenia.co.id</td>
              <td>08236547235</td>
              <td>Active</td>
              <td>Sudirman Street</td>
            </tr>
          </tbody>
        </Table>
      </>
    )
}

export default TablePage;