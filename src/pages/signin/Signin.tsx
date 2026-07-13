// import React from 'react'

import { useState } from "react"
import { MdOutlineLightMode } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { login } from "../../global/reduxSlice"
import { loginUser } from "../../utils/api"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"



const Signin = () => {

     const navigate = useNavigate ()

    const dispatch = useDispatch ()
    
    const [username, setUserName] = useState("")

    const [password, setPassword] = useState("")

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try{
            setLoading(true)

            const data = await loginUser( username, password);

            dispatch(
                login({
                    user: data.user,
                    accessToken: data.accessToken,
                })
            )

            console.log("Dispatching data:", {
                user: data.user,
                accessToken: data.acessToken
            })
            toast.success ("Sign in successful")

            console.log("data", data)

            navigate("/home")
        }
        catch (error: any) {
            console.error(error)
            toast.error("Login Failed")
        }
        finally {
            setLoading (false)
        }
    }
    
  return (
    <div className="bg-[url('/img/flower.jpg')] w-full h-screen bg-center bg-cover flex justify-center ">
        <div className="w-[90%] flex justify-end items-center">
            <form onSubmit={handleSubmit} className="md:w-110 w-full md:min-h-120 rounded-[20px] bg-[#0000009e] p-10 border border-zinc-400">
                <div className=" ">
                    <div  className="text-[50px] text-white flex justify-center" >
                        <MdOutlineLightMode  />
                    </div>
                    <h1 className="text-[30px] text-white text-center mt-2">
                        Welcome Back
                    </h1>
                    <h1 className="text-[12px] text-[#888484] text-center">
                        Sign in to gain access to your information
                    </h1>
                   <h1  className="text-[15px] text-[#ffffff]  mt-8">
                    Username
                   </h1>
                   <div className=" mt-3">
                    <input type="text" 
                 placeholder="username" 
                 value={username}
                 onChange={(e) =>
                        setUserName(e.target.value)      
                 }  
                 required className="outline-none md:w-90 w-75 h-9 border border-white rounded-[13px] pl-4 placeholder:text-[#4f4c4c]"/>
                   </div>
                   <h1  className="text-[15px] text-[#ffffff]  mt-4">
                    Password
                   </h1>
                   <div className=" mt-3">
                    <input type="password" 
                 placeholder="password" 
                 value={password}
                 onChange={(e) =>
                        setPassword(e.target.value)      
                 }  
                 required className="outline-none md:w-90 w-75 h-9 border border-white rounded-[13px] pl-4 placeholder:text-[#4f4c4c] "/>
                   </div>
                   <div className=" flex justify-between">
                     <h1 className="text-[15px] text-[#ffffff]  mt-4 flex  items-center gap-2">
                    <input type="checkbox" className=""/>
                    Remember me 
                   </h1>
                   <h1 className="text-[15px] text-[#ffffff]  mt-4 ">
                    Forget Password?
                   </h1>
                   </div>
                   {/* <NavLink to="/home"> */}
                    <button
                     type="submit"
                   
                   className="md:w-90 w-75 h-9 border border-black bg-white hover:bg-zinc-400 rounded-[20px] text-[20px] font-bold text-black mt-5 cursor-pointer"
                   disabled={loading}>
                   {
                loading ? "Logging in" : "Login"
               }
                   </button>

                   {/* </NavLink> */}
                  
                   <h1 className="text-[12px] text-[#888484] text-center mt-3">
                        Don't have an account? Sign Up
                    </h1>
                  {/* "username": "string",
                    "password": "string" */}
                   
                </div>
                

            </form>

        </div>
         
    </div>
  )
}

export default Signin