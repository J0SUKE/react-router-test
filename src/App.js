import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div>
        <h1>React Router</h1>
        <p>
        <Link to="/">Home</Link>
        </p>
        <nav>
            <Link to="/invoices">Invoices</Link> | {" "}
            <Link to="/expenses">Expenses</Link>
        </nav>
        <Outlet/>
      </div>
    </>
  )
}

export default App