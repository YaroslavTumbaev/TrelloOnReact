import React from 'react'
import Home from './Home/Home.jsx'
import Profile from './Profile/Profile.jsx'
import Forum from './Forum/Forum.jsx'
import { Route, Routes } from 'react-router-dom'
import TestApi from './TestApi/TestApi.jsx'

const Router = () => {
return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/forum' element={<Forum />}/>
        <Route path='/api' element={<TestApi />}/>
    </Routes>
)
}
export default Router