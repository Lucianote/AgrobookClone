import React from "react";
import { Redirect, Route} from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
const isAutenticated = localStorage.getItem("isAuthenticated");
console.log("this", isAutenticated);

return(
    <Route
    {...restOfProps}
    render={(props) =>
        isAutenticated ? <Component {...props} /> : <Redirect to= "/Login" /> 
    }
    />
);
}

export default ProtectedRoute;
