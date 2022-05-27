
import React from "react";
import ReactDOM  from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "./App";

import {Invoices,Invoice} from './routes/invoices.js';
import Expenses from './routes/expenses.js'


const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="expenses" element={<Expenses/>}></Route>
                <Route path="invoices" element={<Invoices/>}>
                    <Route
                        index
                        element={
                        <main style={{ padding: "1rem" }}>
                            <h1>Select an invoice</h1>
                        </main>
                        }
                    />
                    <Route path=":invoiceId" element={<Invoice/>}/>
                </Route>
                <Route path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                        </main>
                    }
                    />
            </Route>
        </Routes>
        
    </BrowserRouter>
);