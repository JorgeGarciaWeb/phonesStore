import { createContext } from "react";
import { useState } from "react";

const AuthContext = createContext()

function AuthProviderWrapper() {

    const [user, setUser ] = useState(null)

}
    
export { AuthContext, AuthProviderWrapper }
    
    