import { ChangeEvent, FormEvent, useState, useContext } from 'react';
import { getGeneralUserData } from "../helpers/getGeneralUserData";
import { UserContext } from '../context/UserContext';


export const SearchUser = () => {

  const [search, setSearch] = useState('');

  const {setUser, setIsLoaded, setHasError} = useContext(UserContext);


  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    (async () => {
      setIsLoaded(true);

      const userData = await getGeneralUserData(search);

      if(!userData) {
        setIsLoaded(false);
        setHasError(true);
        return;
      } 

      setUser(userData);
      setIsLoaded(false);
      setHasError(false);
    })()

  }


  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        onChange={handleSearchChange}
        value={search}
        className="form__input"
        type="search"
        placeholder="Github username"
      />

      <button type="submit" className="form__btn">Search</button>
    </form>
  );
};


