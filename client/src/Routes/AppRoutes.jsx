import {Routes, Route } from 'react-router-dom'
import HomePage from "../pages/HomePage/HomePage"
import Navigation from '../pages/Navigation/Navigation'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />

            <Route path="/signup" elemtn={<SignUpPage/>} />

            <Route path="/" element={<Navigation/>} />
        </Routes>

    )

} 

export default AppRoutes