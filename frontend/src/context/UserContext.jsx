import { createContext, useContext, useState, useEffect } from "react";
import { api_url } from "../config.json";
import axios from "axios";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [User, setUser] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(
                    `${api_url}/api/get_user`,
                    {
                        type: "discord",
                        token: localStorage.getItem("token"),
                    }
                );

                setUser(response.data.data);
            } catch (error) {
                console.error("Error fetching user data", error);
            }
        };
        fetchData();
    }, []);

    return (
        <UserContext.Provider value={{ User, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);