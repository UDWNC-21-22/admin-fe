import { createContext, useContext, useState } from "react";
import cookie from 'react-cookies';

const AddContext = createContext();

export function useLocalContext() {
  return useContext(AddContext);
}

export function ContextProvider({ children }) {
  const [dataInfo, setDataInfo] = useState(cookie.load('user_data'));
  const [list_admin, setListAdmin] = useState(cookie.load('list_admin'));
  const [list_user, setListUser] = useState(cookie.load('list_user'));
  const [list_class, setListClass] = useState(cookie.load('list_class'));
  const [authLogin, setAuthLogin] = useState(false)
  const [classId, setClassId]=useState('');

  const value = {
    dataInfo, setDataInfo,
    list_admin, setListAdmin,
    list_user, setListUser,
    list_class, setListClass,
    authLogin, setAuthLogin,
    classId, setClassId,
  };
  return <AddContext.Provider value={value}>{children}</AddContext.Provider>;
}

