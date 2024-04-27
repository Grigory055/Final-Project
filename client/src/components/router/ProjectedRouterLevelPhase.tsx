
import { useAppSelector } from '../../redux/hooks';
import { Navigate, Outlet, useParams } from 'react-router-dom';

export default function ProjectedRouterLevelPhase() {
    
    const { level } = useAppSelector((store) => store.persistedReducer);

    const { id } = useParams();

    if(id){
        if(level < id) {
            return <Navigate to='/' replace />
        }
    }
    
    return <Outlet />
}
