import React, { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ Component }) {
    //     const [detail, setDetail] = useState({})
    //     useEffect(() => {
    //         let obj ={}
    //         let upass = localStorage.getItem("Password")
    //         console.log(uname,"uname")
    //         obj = {name: uname, pass: upass}
    //         setDetail(obj)
    //     })
    //  console.log(detail,"detiol");

    let uname = localStorage.getItem("Name")
    let detail =  uname === "Shai"

    return (
        <>
            {detail ? <Component /> : <Navigate to="/page" />}

        </>
    );

}
export default ProtectedRoute;