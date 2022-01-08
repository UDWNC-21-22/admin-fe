import { createContext, useContext, useState } from "react";
import cookie from 'react-cookies';

const AddContext = createContext();

export function useLocalContext() {
  return useContext(AddContext);
}

export function ContextProvider({ children }) {
  const [dataInfo, setDataInfo] = useState(cookie.load('user_data'));
  const [list_admin, setList_admin] = useState([]);
  const [list_user, setList_user] = useState([]);
  const [list_class, setList_class] = useState([]);
  const [authLogin, setAuthLogin] = useState(false)
  
  const [classId, setClassId]=useState('');

  const value = {
    dataInfo, setDataInfo,
    list_admin, setList_admin,
    list_user, setList_user,
    list_class, setList_class,
    authLogin, setAuthLogin,
    classId, setClassId,
  };
  return <AddContext.Provider value={value}>{children}</AddContext.Provider>;
}

