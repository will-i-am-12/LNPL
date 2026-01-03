import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div>
      <h1>My SQL Sheet</h1>
      <p>Note: Used to read data from the database</p>
      <div>
        <h2>Commmon Clause</h2>
        <ul>
          <li>SELECT</li>
          <li>FROM</li>
          <li>WHERE</li>
          <li>GROUP BY</li>
          <li>DISTINCT</li>
          <li>HAVING</li>
          <li>ORDER BY</li>
          <li>JOIN/INNER JOIN</li>
          <li>LEFT JOIN</li>
          <li>RIGHT JOIN</li>
          <li>FULL JOIN</li>
          <li>CROSS JOIN</li>
          <li>LIMIT/OFFSET</li>
          <li>PARTITION BY</li>
        </ul>
      </div>
      <div>
        <h2>Comparison Operators</h2>
        <p>Note: Used to compare values</p>
        <ul>
          <li>=</li>
          <li>!= / &lt; &gt;</li>
          <li>&lt;</li>
          <li>&gt;</li>
          <li>&le;</li>
          <li>&ge;</li>
          <li>BETWEEN ... AND ...</li>
          <li>LIKE</li>
          <li>IN</li>
          <li>IS NULL / IS NOT NULL</li>
        </ul>
      </div>
      <div>
        <h2>Logival Operator</h2>
        <p>Note: Used to combine different conditions together</p>
        <ul>
          <li>AND</li>
          <li>OR</li>
          <li>NOT</li>
        </ul>
      </div>
      <div>
        <h2>String Function</h2>
        <p>Note: used to manipulate strings </p>
        <ul>
          <li>LENGTH(value/col_name)</li>
          <li>UPPER(value/col_name)</li>
          <li>LOWER(value/col_name)</li>
          <li>TRIM(value/col_name)</li>
          <li>LTRIM(value/col_name)</li>
          <li>RTRIM(value/col_name)</li>
          <li>LEFT(col_name, value)</li>
          <li>RIGHT(col_name, value)</li>
          <li>SUBSTRING(col_name, starting_postion, character_long)</li>
          <li>REPLACE(col_name, replace character, by this charcter) </li>
          <li>LOCATE(value, col_name)</li>
          <li>CONCAT(col_name, value, ...)</li>
        </ul>
      </div>
      <div>
        <h2>Aggregate Function</h2>
        <p>Note: These functions are used to take value of multiple rows of data and return a single value</p>
        <ul>
          <li>MIN(value/col_name)</li>
          <li>MAX(value/col_name)</li>
          <li>COUNT(value/col_name)</li>
          <li>SUM(value/col_name)</li>
          <li>AVG(value/col_name)</li>
        </ul>
      </div>
      <div>
        <h2>Window Functions</h2>
        <p>Note: all Window Function requires an OVER() clause</p>
        <ul>
          <li>"Aggregate function" OVER(PARTITION BY value)</li>
          <li>ROW_NUMBER() OVER(...)</li>
          <li>RANK() OVER()</li>
          <li>DENSE_RANK() OVER()</li>
        </ul>
      </div>
      <div>
        <h2>Data Defintion Operations (DDL)</h2>
        <p>Note: Used to setup/change the structure of database(table)</p>
        <ul>
          <li>CREATE TABLE</li>
          <li>ALTER TABLE</li>
          <li>DROP TABLE</li>
        </ul>
      </div>
      <div>
        <h2>Data Manipulations Operations (DML)</h2>
        <p>Note: Used to change the data in table</p>
        <ul>
          <li>INSERT</li>
          <li>UPDATE</li>
          <li>DELETE</li>
        </ul>
      </div>
    </div>
  )
}

export default App
