import {useState, useEffect} from "react";

const useFavorites = (userId, initialFavorites) => {
    const [favorites, setFavorites] = useState(initialFavorites);
    
    useEffect(() => {
        //Fetch users favorites from the API based on userId
        const fetchFavorites = async () => {
            try{
                const response = await fetch(`https://dinmaegler.onrender.com/users/${userId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json", 
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjNmZjgzMjYxNjY4M2M4ODNiMDQ5ZiIsImlhdCI6MTYzNTg0NDM2MywiZXhwIjoxNjM4NDM2MzYzfQ.w1VIG08a8IeHgLIEfgToxHIaJiA8tl2txjeQWq8H_gE",
                    },

                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch favorites. Status: ${response.status}`);
                }
                const userData = await response.json();
                setFavorites(userData.homes);
            } catch (error){
                console.error("Error fetching favorites:", error);
            }
        };
        fetchFavorites();
    }, [userId]);

    const addFavorite = async (homeId) => {
        try{
            //add the homeId to the favorites array
            const updatedFavorites = [...favorites, homeId];
            
            //Update favorites on the server
            const response = await fetch(`https://dinmaegler.onrender.com/users/${userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjNmZjgzMjYxNjY4M2M4ODNiMDQ5ZiIsImlhdCI6MTYzNTg0NDM2MywiZXhwIjoxNjM4NDM2MzYzfQ.w1VIG08a8IeHgLIEfgToxHIaJiA8tl2txjeQWq8H_gE",
                },
                body: JSON.stringify({homes: updatedFavorites}),
            });

            console.log("Add Favorite Response:", response)
            if(!response.ok){
                throw new Error("Failed to add favorite");
            }
            //Update local state
            setFavorites(updatedFavorites);
        } catch (error) {
            console.error("Error adding favorite:", error);
        }
    };

    const removeFavorite = async (homeId) => {
        try {
            //Remove the homeId from the favorites array
            const updatedFavorites = favorites.filter((id) => id !== homeId);

            //Update favorites on the server
            const response = await fetch(`https://dinmaegler.onrender.com/users/${userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjNmZjgzMjYxNjY4M2M4ODNiMDQ5ZiIsImlhdCI6MTYzNTg0NDM2MywiZXhwIjoxNjM4NDM2MzYzfQ.w1VIG08a8IeHgLIEfgToxHIaJiA8tl2txjeQWq8H_gE",
                },
                body: JSON.stringify({homes: updatedFavorites}),
            });
            if(!response.ok){
                throw new Error("Failed to remove favorite");
            }
            //Update local state
            setFavorites(updatedFavorites);
        } catch (error){
            console.error("Error removing favorite:", error);
        }
    }
    return [favorites, addFavorite, removeFavorite];
}
 
export default useFavorites;