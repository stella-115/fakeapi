// import React from 'react'
import { useEffect, useState } from "react";
import icon from "../../assets/images (2).png"
import ba from "../../assets/images (4).png"
import axios from "axios";
import { url } from "../../utils/api";

interface cardUser {
    id: string;
    address:{
      city: string;
      street: string;
      number: number;
    }
    email: string;
    username: string;
    phone: string;
    name:{
      firstname: string;
      lastname: string;
    }
}

const Dashboard = () => {

  const [user, setUser] = useState<cardUser[]>();
  useEffect(() => {
    axios.get(`${url}/users`)
    .then((res) =>{
      setUser(res.data);
      console.log("users", res.data)
    })
    .catch((error) => {
      console.error (error)
    })
  }, [])
  return (
    <div className="w-full min-h-screen bg-white p-8 flex flex-col items-center">
      <h1 className="text-[13px] md:text-[30px] mb-5 text-blue-950 font-extrabold">
          About You </h1>
          <div className=" md:w-[90%] w-[95%] flex flex-wrap md:justify-between  justify-center ">
            {Array.isArray(user) && user.map ((use: any) =>(
            <div key={use.id} className="bg-[url('/img/cardbg.jpg')] bg-center bg-cover rounded-md p-5 w-85 h-60 mb:w-100 md:h-60  mb-5 ">
            <h1 className="text-white text-[20px] font-bold text-center"> Your Submitted Information </h1>
             <h1 className="text-gray-400 text-[7px] text-center "> Everything you shared with us</h1>
             <div className=" mt- flex md:gap-10 gap-2 ">
              <div>
                <div className=" mt-5 bg-[#ffffffe1] flex justify-center items-center rounded-[20px] w-18 h-18 ">
              <img src={icon} alt="" className="w-15" />
              </div>
               <h1 className="text-gray-400 text-[15px] font-medium text-center mt-1 ">
                Member
              </h1>
               <img src={ba} alt="" className="w-17 bg-white h-7 mt-7 " />
             
              </div>
              <div>
                <h1 className="text-white text-[15px] font-medium text-center mt-2 ">
                 {use.name.firstname} - {use.name.lastname}
                </h1>
               <div className="flex md:gap-3 gap-2 mt-2">
                 <h1 className="text-white text-[10px] font-medium ">
                User-Name: <br /> <span className="text-gray-400 text-[7px] ">
                    {use.username}
                  </span>
                </h1>
                <h1 className="text-white text-[10px] font-medium ">
                 Phone-number: <br /> <span  className="text-gray-400 text-[7px] "> {use.phone}
                  </span>
                </h1>

                 <h1 className="text-white text-[10px] font-medium ">
                 Email: <br /> <span  className="text-gray-400 text-[7px] ">
                    {use.email}
                  </span>
                </h1>
               </div>
                 {/* <h1 className="text-white text-[15px] font-medium mt-2 ">
                  Address:
                </h1> */}
               <div className="flex md:gap-10 gap-8 mt-2">
                 <h1 className="text-white text-[10px] font-medium ">
                  City: <br /> <span className="text-gray-400 text-[7px] ">
                    {use.address.city}
                  </span>
                </h1>
                <h1 className="text-white text-[10px] font-medium ">
                 Street: <br /> <span  className="text-gray-400 text-[7px] ">
                    {use.address.street}
                  </span>
                </h1>

                 <h1 className="text-white text-[10px] font-medium md:ml-2">
                 Number: <br /> <span  className="text-gray-400 text-[7px] ">
                    {use.address.number}
                  </span>
                </h1>
               </div>
              
                </div>
                

             </div>
              <h1 className="text-gray-400 text-[10px] flex justify-end -mt-3">
                www.infoaboutme.com
               </h1>

            </div>
             ))}
            {/* card */}


          </div>

    </div>
  )
}

export default Dashboard