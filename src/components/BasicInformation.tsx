import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import moment from 'moment';


export const BasicInformation = () => {

    const { user } = useContext(UserContext);

    const date = user.created_at;
    const formatedDate = moment(date).format('MMMM Do YYYY')

    return (
        <>
            <div className="basic">
                <img src={user.avatar_url} alt="Profile" />

                <div className="basic__data">
                    <h3 className="basic__username">{user.login}</h3>
                    <p className="basic__id">{user.type}</p>
                    <p className="basic__date">{formatedDate}</p>
                </div>
            </div>

            <p className="description">{user.bio}</p>
        </>
    );
};


