import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { signup } from "../redux/auth/auth-operations"
import RegisterForm from "components/RegisterForm/RegisterForm"
import { selectAuthLoading, selectAuthError, selectIsLogin } from "../redux/auth/auth-selectors";

const RegisterPage = () => {
    const authLoading = useSelector(selectAuthLoading);
    const authError = useSelector(selectAuthError);
    const isLogin = useSelector(selectIsLogin);

    const dispatch = useDispatch()

    const handleSignup = data => {
        dispatch(signup(data));
    }

    if(isLogin) {
        return <Navigate to="/contacts" /> 
    }

    return (
         <main>
            <h1>Please Sign Up</h1>
            {authLoading && <p>....Register in progress</p>}
            <RegisterForm onSubmit={handleSignup} />
            {authError && <p style={{color: "red"}}>{authError}</p>}
        </main>
    )
}

export default RegisterPage