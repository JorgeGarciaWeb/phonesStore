import {Routes, Route } from 'react-router-dom'
import HomePage from "../pages/HomePage/HomePage"
import SignUpPage from '../pages/SignUpPage/SignUpPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />

            <Route path="/signup" elemtn={<SignUpPage/>} />
        </Routes>

    )

} 

export default AppRoutes