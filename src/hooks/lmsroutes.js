const lms={
    organisation:{
        autocomplete:process.env.NEXT_PUBLIC_BACKEND_URL+'/api/organisation/autocomplete',
        create:process.env.NEXT_PUBLIC_BACKEND_URL+'/api/organisation/create',
        store:process.env.NEXT_PUBLIC_BACKEND_URL+'/api/organisation/store',
    },
    timezone:{
        autocomplete:process.env.NEXT_PUBLIC_BACKEND_URL+'/api/timezone/autocomplete',
        create:process.env.NEXT_PUBLIC_BACKEND_URL+'/api/timezone/create',
        store:process.env.NEXT_PUBLIC_BACKEND_URL+'/api/timezone/store',
    },
    auth:{
        register:process.env.NEXT_PUBLIC_BACKEND_URL+'/api/register',
        login:process.env.NEXT_PUBLIC_BACKEND_URL+'/api/login',
    },
    country:{
        autocomplete:process.env.NEXT_PUBLIC_BACKEND_URL+'/api/country/autocomplete',
        create:process.env.NEXT_PUBLIC_BACKEND_URL+'/api/country/create',
        store:process.env.NEXT_PUBLIC_BACKEND_URL+'/api/country/store',
    }

}

export default lms;
