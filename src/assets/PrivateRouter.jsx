import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRouter(props){
    var user = useSelector(state => state.auth.user)
    var roleOfUser = user?.role?.name

    switch (props.role) {
        case 'AuthenticatedCheck':
            if(roleOfUser == 'Authenticated' || roleOfUser == 'Manager'){
                return props.children
            }    
            break;
        case 'ManagerCheck': 
            if(roleOfUser == 'Manager'){
                return props.children
            }
            break;
    }

    return <Navigate to='/login'></Navigate>
}