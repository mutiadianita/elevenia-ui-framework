import React from 'react';
import { Table } from '../../Components/Atoms';

const TablePage = () => {
  return (
    <>
      <h1 className="title">Table</h1>
      <p> Table element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of data</p> <br/>
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
            <td>Mutia</td>
            <td>Yes</td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ayu</td>
            <td></td>
            <td>Yes</td>
          </tr>
        </tbody>
      </Table>
      
      <code>
        &lt;Table&gt; <br/>
        &nbsp;&lt;thead&gt; <br/>
        &nbsp;&nbsp;&lt;tr&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;th rowSpan=&#123;2&#125;&gt;No&lt;/th&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;th rowSpan=&#123;2&#125;&gt;Name&lt;/th&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;th className="u-tx-center" colSpan=&#123;3&#125;&gt;Gender&lt;/th&gt; <br/>
        &nbsp;&nbsp;&lt;/tr&gt; <br/>
        &nbsp;&nbsp;&lt;tr&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;th&gt;Male&lt;/th&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;th&gt;Female&lt;/th&gt; <br/>
        &nbsp;&nbsp;&lt;/tr&gt; <br/>
        &nbsp;&lt;/thead&gt; <br/>
        &nbsp;&lt;tbody style&#123; height: 100, overflowY: 'auto' &#125;&gt; <br/>
        &nbsp;&nbsp;&lt;tr&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;1&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;Mutia&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;Yes&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;&lt;/td&gt; <br/>
        &nbsp;&nbsp;&lt;/tr&gt; <br/>
        &nbsp;&nbsp;&lt;tr&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;2&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;Ayu&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;Yes&lt;/td&gt; <br/>
        &nbsp;&nbsp;&lt;/tr&gt; <br/>
        &nbsp;&lt;/tbody&gt; <br/>
        &lt;/Table&gt;
      </code>
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
            <td>Mutia</td>
            <td>mutia@elevenia.co.id</td>
            <td>081234567890</td>
            <td>Active</td>
            <td>Bogor</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Mutia</td>
            <td>mutia@elevenia.co.id</td>
            <td>081234567890</td>
            <td>Active</td>
            <td>Bogor</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Mutia</td>
            <td>mutia@elevenia.co.id</td>
            <td>081234567890</td>
            <td>Active</td>
            <td>Bogor</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Mutia</td>
            <td>mutia@elevenia.co.id</td>
            <td>081234567890</td>
            <td>Active</td>
            <td>Bogor</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Mutia</td>
            <td>mutia@elevenia.co.id</td>
            <td>081234567890</td>
            <td>Active</td>
            <td>Bogor</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Mutia</td>
            <td>mutia@elevenia.co.id</td>
            <td>081234567890</td>
            <td>Active</td>
            <td>Bogor</td>
          </tr>
        </tbody>
      </Table>
      
      <code>
        &lt;Table scrollable className="u-mt-40" width=&#123;500&#125; height=&#123;200&#125;&gt; <br/>
        &nbsp;&lt;thead&gt; <br/>
        &nbsp;&nbsp;&lt;tr&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;th&gt;No&lt;/th&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;th&gt;Name&lt;/th&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;th&gt;Email&lt;/th&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;th&gt;Phone&lt;/th&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;th&gt;Member Status&lt;/th&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;th&gt;Address&lt;/th&gt; <br/>
        &nbsp;&nbsp;&lt;/tr&gt; <br/>
        &nbsp;&lt;/thead&gt; <br/>
        &nbsp;&lt;tbody&gt; <br/>
        &nbsp;&nbsp;&lt;tr&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;1&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;Mutia&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;mutia@elevenia.co.id&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;081234567890&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;Active&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;Bogor&lt;/td&gt; <br/>
        &nbsp;&nbsp;&lt;/tr&gt; <br/>
        &nbsp;&nbsp;&lt;tr&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;2&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;Mutia&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;mutia@elevenia.co.id&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;081234567890&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;Active&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;Bogor&lt;/td&gt; <br/>
        &nbsp;&nbsp;&lt;/tr&gt; <br/>
        &nbsp;&nbsp;&lt;tr&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;3&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;Mutia&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;mutia@elevenia.co.id&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;081234567890&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;Active&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;Bogor&lt;/td&gt; <br/>
        &nbsp;&nbsp;&lt;/tr&gt; <br/>
        &nbsp;&nbsp;&lt;tr&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;4&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;Mutia&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;mutia@elevenia.co.id&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;081234567890&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;Active&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;Bogor&lt;/td&gt; <br/>
        &nbsp;&nbsp;&lt;/tr&gt; <br/>
        &nbsp;&nbsp;&lt;tr&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;5&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;Mutia&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;mutia@elevenia.co.id&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;081234567890&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;Active&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;Bogor&lt;/td&gt; <br/>
        &nbsp;&nbsp;&lt;/tr&gt; <br/>
        &nbsp;&nbsp;&lt;tr&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;6&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;Mutia&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;mutia@elevenia.co.id&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;081234567890&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;Active&lt;/td&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;td&gt;Bogor&lt;/td&gt; <br/>
        &nbsp;&nbsp;&lt;/tr&gt; <br/>
        &nbsp;&lt;/tbody&gt; <br/>
        &lt;/Table&gt;
      </code>
    </>
  )
}

export default TablePage;