// import React, {useState, useEffect} from "react";
// import axios from "axios";
// import { response } from "express";

// export default () => {
//     const [message, setMessage] = useState("Loading...");

//     useEffect(() => {
//         axios.get('http://localhost:8000/api')
//             .then (response => {
//                 setMessage(response.data.message)
//             })
//     }, [])

//     return (
//         <div>
//             <h2>Meessage from the backend: {message}</h2>
//         </div>
//     )
// }