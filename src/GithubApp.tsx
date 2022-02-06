import { ContentUsers, SearchUser } from "./components";
import { UserContext } from './context/UserContext';
import { useState } from 'react';
import { User } from './interfaces/UserGeneralData'

const GithubApp = () => {
  
  const [user, setUser] = useState({} as User);
  const [isLoaded, setIsLoaded] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  return (
    <UserContext.Provider value={{
      user,
      setUser,
      setIsLoaded,
      isLoaded,
      hasError,
      setHasError
    }}>
      <div className="container">
        <SearchUser />
        <ContentUsers />
      </div>
    </UserContext.Provider>
  );
};

export default GithubApp;
