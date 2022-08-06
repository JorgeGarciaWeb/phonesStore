import {Routes, Route } from 'react-router-dom'
import HomePage from "../pages/HomePage/HomePage"
import Navigation from '../pages/Navigation/Navigation'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/" element={<Navigation/>} />
        </Routes>

    )

} 

export default AppRoutes