import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

export default function ProtectedRouterEnd() {

    const { level } = useAppSelector((store) => store.persistedReducer);

    if(level !== 3) {
        return <Navigate to='/' replace />
    }
    return <Outlet />
}
