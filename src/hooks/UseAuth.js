import { useContext } from "react"
import { AuthContext } from "../Components/Context/Context";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;