import axios from 'axios';


export const getGeneralUserData = async (user: string) => {

    try {
        const userResponse = await axios.get(`https://api.github.com/users/${user}`)

        if (userResponse) {
            const userRespos = await axios.get(`https://api.github.com/users/${user}/repos`)
            userResponse.data.repos = userRespos.data.length;
            return userResponse.data;
        }

    } catch (err) {
        return null;
    }


}