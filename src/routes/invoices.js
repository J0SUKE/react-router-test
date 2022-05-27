import React from 'react'
import { NavLink,Outlet, useSearchParams } from 'react-router-dom'
import {getInvoices,getInvoice} from '../data';
import { useParams } from 'react-router-dom';

export const Invoices = () => {
  
  let invoices = getInvoices();

  let [searchParams, setSearchParams] = useSearchParams();


  return (
    <main>
        <h2>Invoices</h2>
        <nav> 
          <input
            value={searchParams.get("filter") || ""}
            onChange={(event) => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />
          {
            invoices.filter((invoice) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = invoice.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map(invoice=>(
              <NavLink
                style={(params) => {
                  console.log(params);
                  return {
                    display: "block",
                    margin: "1rem 0",
                    color: params.isActive ? "red" : "",
                  };
                }}
                to={`/invoices/${invoice.number}`}
                key={invoice.number}
              >
                {invoice.name}
              </NavLink>
            ))
          }
        </nav>
        <Outlet/>
    </main>
  )
}

export function Invoice() {
  const params = useParams();
  let invoice = getInvoice(Number(params.invoiceId));
  return(
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  )
}