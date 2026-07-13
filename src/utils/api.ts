import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers:{
        "Content-Type" : "application/json"
    }

})

export const loginUser = async (username: string, password: string) => {
    const response = await api.post ("/auth/login",{
        username, password
    });

    return response.data 
    console.log("login-response", response)

}

export const url = import.meta.env.VITE_APP_API_URL
