import { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { getGeneralUserData } from '../helpers/getGeneralUserData';
import { BasicInformation, ProfileInformation, ProfileLinks, Loading } from './';
import { NotFound } from './NotFound';

export const ContentUsers = () => {

  const { setUser, isLoaded, setIsLoaded, hasError } = useContext(UserContext);

  useEffect(
    () => {

      setTimeout(() => {
        (async () => {
          const userData = await getGeneralUserData('aKus-dev');
          setUser(userData);
          setIsLoaded(false)
        })()
      }, 500)

    }, [setIsLoaded, setUser]
  )


  if (hasError) return <NotFound />
  if (isLoaded) return <Loading />


  return (
    <div className="content-container">
      <BasicInformation />
      <ProfileInformation />
      <ProfileLinks />
    </div>
  );
};


