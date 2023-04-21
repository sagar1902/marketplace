import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {useEffect} from 'react';


const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const { loading, isAuthenticated, user } = useSelector(state => state.user);
    useEffect(()=>{if(!loading){
        if(!isAuthenticated){navigate('/login')};
    }})
    return (
        <>
        dfvdfxvx
            {/* {loading === false && (
                isAuthenticated === false ? ()=>navigate("/login") : children
            )} */}
        </>
    );
};

export default PrivateRoute;