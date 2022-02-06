import { useContext } from 'react';
import { UserContext } from '../context/UserContext';


export const ProfileLinks = () => {

    const { user } = useContext(UserContext);

    return (
        <div className="profile-links">

            <div className="profile-links-data">
                <img src="https://img.icons8.com/ios-glyphs/22/ffffff/link--v1.png" alt="Link" />
                <a href={user?.html_url} target="_blank" rel="noreferrer">View profile</a>
            </div>

            <div className={`profile-links-data ${user?.location || 'disabled'}`}>
                <img
                    src={
                        user?.location
                            ? "https://img.icons8.com/ios-filled/22/ffffff/marker.png"
                            : "https://img.icons8.com/ios-filled/22/6d6e6e/marker.png"
                    }

                    alt={"Location"}
                />
                <p>{user?.location ? user?.location : 'No location'}</p>
            </div>


            <div className={`profile-links-data ${user?.location || 'disabled'}`}>
                <img
                    src={
                        user?.twitter_username
                            ? "https://img.icons8.com/ios-glyphs/22/ffffff/twitter--v1.png"
                            : "https://img.icons8.com/ios-glyphs/22/6d6e6e/twitter--v1.png"
                    }

                    alt={"Twitter"}
                />

                <a

                    rel="noreferrer"
                    href={
                        user?.twitter_username
                            ? `https://twitter.com/${user.twitter_username}`
                            : "#"
                    }
                    className={user?.twitter_username || 'disabled'}
                    target={user?.twitter_username ? "_blank" : '_self'}
                >
                    {user?.twitter_username ? user?.twitter_username : 'No twitter'}
                </a>

            </div>
        </div >
    );
};


