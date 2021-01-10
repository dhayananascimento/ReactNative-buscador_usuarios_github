import React, {useState, createContext} from 'react';

const defaultContext = {
  login: '',
  per_page: 5,
  reposLimitPage: 1,
  followersLimitPage: 1,
  followingLimitPage: 1,
};

export const UserContext = createContext(defaultContext);

export default function UserProvider({children}) {
  const [userLogin, setUserLogin] = useState(defaultContext);

  return (
    <UserContext.Provider value={{userLogin, setUserLogin}}>
      {children}
    </UserContext.Provider>
  );
}
