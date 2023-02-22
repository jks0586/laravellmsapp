import Cookies from "js-cookie";
import axios from "@/lib/axios";
import lms from "./lmsroutes";
import Error from "next/error";
export const useLogin=(email,password)=>{

    const user=axios.post(lms.auth.login,{'email':email,'password':password}).then((res)=>{
        console.log(res);;
    }).catch((error)=>{
        console.log(error);
    });

}