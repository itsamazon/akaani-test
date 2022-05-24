import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import { Basket, Paid, Completed, Pending, Profile, OrderHistory } from "../components"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Dashboard />} >
                    <Route exact index element={<Profile />} />
                    <Route path='basket' element={<Basket />}>
                        <Route index exact element={<Paid />} />
                        <Route path="pending" element={<Pending />} />
                        <Route path="completed" element={<Completed />} />
                    </Route>
                    <Route path='history' element={<OrderHistory />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes

