import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import lms from './lmsroutes';
import loadCustomRoutes from 'next/dist/lib/load-custom-routes'
import Cookies from 'js-cookie';
export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter()

    // const user  = JSON.parse(Cookies.get('currentuser'))

    const { data: user, error, mutate } = useSWR('/api/user', () =>
        axios
            .get('/api/user')
            .then(res => JSON.parse(Cookies.get('currentuser'))
             )
            .catch(error => {

            }),
    )

    // const csrf = () => axios.get('/sanctum/csrf-cookie')

    const register = async ({ setErrors, ...props }) => {
        // await csrf()

        setErrors([])
        // console.log(lms.auth.register);
        // console.log(props);

        axios
            .post(lms.auth.register, props)
            .then((res) => {
                if(res.status){
                    Cookies.set('token',res.data.token);
                    Cookies.set('currentuser',JSON.stringify(res.data.user));
                    router.push('/dashboard')
                }
            })
            .catch(error => {
                console.log('aaaaaa');
                // if (error.response.status !== 422) throw error

                // setErrors(error.response.data.errors)
            })
    }

    const login = async ({ setErrors, setStatus, ...props }) => {
        
        setErrors([])
        setStatus(null)

        axios
            .post(lms.auth.login, props)
            .then((res) =>{
                
                if(res.status){
                    Cookies.set('token',res.data.token);
                    Cookies.set('currentuser',JSON.stringify(res.data.user));
                    router.push('/dashboard')
                }
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const forgotPassword = async ({ setErrors, setStatus, email }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/forgot-password', { email })
            .then(response => setStatus(response.data.status))
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resetPassword = async ({ setErrors, setStatus, ...props }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/reset-password', { token: router.query.token, ...props })
            .then(response =>
                router.push('/login?reset=' + btoa(response.data.status)),
            )
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resendEmailVerification = ({ setStatus }) => {
        axios
            .post('/email/verification-notification')
            .then(response => setStatus(response.data.status))
    }

    const logout = async () => {
        if (! error) {
            Cookies.remove('token');
            Cookies.remove('currentuser');
            // await axios.post('/logout').then(() => mutate())
        }

        window.location.pathname = '/login'
    }

    // useEffect(() => {
    //     if (middleware === 'guest' && redirectIfAuthenticated && user)
    //         router.push(redirectIfAuthenticated)
    //     if (
    //         window.location.pathname === '/verify-email' &&
    //         user?.email_verified_at
    //     )
    //         router.push(redirectIfAuthenticated)
    //     if (middleware === 'auth' && error) logout()
    // }, [user, error]);

    return {
        user,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
    }
}
