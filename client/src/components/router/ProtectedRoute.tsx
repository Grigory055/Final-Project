import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

type ProtectedRoutePropsType = {
    isLogin: boolean;
    redirecteTo: string;
}

export default function ProtectedRoute({ isLogin, redirecteTo }: ProtectedRoutePropsType) {

    const { isLogin1, level } = useAppSelector((store) => store.persistedReducer.isLogin);
    console.log('login', isLogin)
    console.log('level', level)

    if(level === 0) {
        return <Navigate to={redirecteTo} replace />
    }

    if(!isLogin1) {
        return <Navigate to={redirecteTo} replace />
    }
  return <Outlet />
}
