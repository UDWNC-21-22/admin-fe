import { createContext, useContext, useState } from "react";
import cookie from 'react-cookies';

const AddContext = createContext();

export function useLocalContext() {
  return useContext(AddContext);
}

export function ContextProvider({ children }) {
  const [dataInfo, setDataInfo] = useState(cookie.load('user_data'));
  const [list_admin, setListAdmin] = useState(cookie.load('list_admin'));
  const [list_user, setListUser] = useState([]);
  const [list_class, setListClass] = useState([]);
  const [authLogin, setAuthLogin] = useState(false)
  const [classDetail, setClassDetail]=useState('');
  const [userDetail, setUserDetail]=useState('');

  const value = {
    dataInfo, setDataInfo,
    list_admin, setListAdmin,
    list_user, setListUser,
    list_class, setListClass,
    authLogin, setAuthLogin,
    classDetail, setClassDetail,
    userDetail, setUserDetail
  };
  return <AddContext.Provider value={value}>{children}</AddContext.Provider>;
}

