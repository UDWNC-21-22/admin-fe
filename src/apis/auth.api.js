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

const updateStudentId = async (user, studentId) => {
    return AxiosBasic({
        url: urls.updateStudentId,
        method: 'POST',
        data:{
            user: user,
            studentId: studentId
        }
    })
}

const getDetailClass = async (id) => {
    return AxiosBasic({
        url: urls.getDetailClass +id,
        method: 'GET'
    })
}

const getDetailUser = async (id) => {
    return AxiosBasic({
        url: urls.getDetailUser + id,
        method: 'GET'
    })
}

const authenticate = ()=>{
    return AxiosBasic({
        url: urls.authenticate,
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
    getListUser,
    getDetailUser,
    getDetailClass,
    updateStudentId,
    authenticate
}

export default authApi