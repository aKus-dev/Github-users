import { UserContext } from '../context/UserContext';
import { useContext } from 'react';


export const ProfileInformation = () => {

    const {user} = useContext(UserContext);

    return (
        <div className="profile-info">
            <div>
                <h4>Repos</h4>
                <p>{user.repos}</p>
            </div>

            <div>
                <h4>Followers</h4>
                <p>{user.followers}</p>
            </div>

            <div>
                <h4>Following</h4>
                <p>{user.following}</p>
            </div>
        </div>
    );
};


