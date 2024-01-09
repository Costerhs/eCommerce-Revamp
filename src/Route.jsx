import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { publicRoute } from './assets/localData/routesData'

const RouteComponent = () => {
    return (
        <Routes>
            {publicRoute.map(obj => {
                return <Route path={obj.path} element={obj.element} />
            })}
        </Routes>
    )
}

export default RouteComponent