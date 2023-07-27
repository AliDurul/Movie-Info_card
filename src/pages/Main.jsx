import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FlimYear from '../components/FlimYear'
import FlimInfo from '../components/FlimInfo'

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<FlimYear />}>
                <Route index element={<FlimInfo />} />
            </Route>
        </Routes>
    )
}

export default Main