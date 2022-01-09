import {AxiosBasic} from "../services/api";
import urls from './urls'

const login = async ({username, password}) => {
    return AxiosBasic({
        url: urls.login,
        method: 'POST',
        data:{
            username,
            password,
        }
    })
}

const register = async ({username, password, fullname, email}) => {
    return AxiosBasic({
        url: urls.register,
        method: 'POST',
        data:{
            username,
            password,
            fullname,
            email
        }
    })
}

const logout = async () => {
    return AxiosBasic({
        url: urls.logout,
        method: 'GET'
    })
}

const getInfo = async () => {
    return AxiosBasic({
        url: urls.info,
        method: 'GET'
    })
}

const getListAdmin = async () => {
    return AxiosBasic({
        url: urls.getListAdmin,
        method: 'GET'
    })
}

const getListUser = async () => {
    return AxiosBasic({
        url: urls.getListUser,
        method: 'GET'
    })
}

const getListClass = async () => {
    return AxiosBasic({
        url: urls.getListClass,
        method: 'GET'
    })
}

const authApi = {
    login,
    register,
    logout,
    getInfo,
    getListAdmin,
    getListClass,
    getListUser
}

export default authApi