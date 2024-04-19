import React from 'react'
import { useAppSelector } from '../../redux/hooks';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProjectedRouterStat() {

    const { isLogin } = useAppSelector((store) => store.persistedReducer);

    if(!isLogin) {
        return <Navigate to='/' replace />
    }

    return <Outlet />
}