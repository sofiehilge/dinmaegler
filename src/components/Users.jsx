 import {useState, useEffect} from "react";
 import axios from "../api/axios.js";

const Users = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try{
                //login API endpont
                const loginEndpoint = "https://dinmaegler.onrender.com/auth/local";

                //Login credentials
                const loginData = {
                    identifier: "carsten@mail.dk",
                    password: "654321",
                }

                //Make a POST request to autenticate
                const loginResponse = await axios.post(loginEndpont, loginData, {
                    signal: controller.signal,
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                //Get user data afer successful login
                const userResponse = await axios.get("/users", {
                    signal: controller.signal
                });
                console.log("Used data:", userResponse.data);
                isMounted && setUsers(userResponse.data);
            } catch (err) {
                console.error(err)
            }
        }

        loginUser();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])
    return ( <article>
        <h2>Users List</h2>
        {users?.length
        ? (
            <ul>
                {users.map((user, i) => (
                <li key={i}>{user?.username}</li>
                ))}
            </ul>
        ): <p>No users to display</p>}
    </article>  );
}
 
export default Users;