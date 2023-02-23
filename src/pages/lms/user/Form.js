import lms from '@/hooks/lmsroutes';
import axios from '@/lib/axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Select from 'react-select';
const Form = () => {
const [organisations, setOrganisations] = useState();
const [timezoneoptions, setTimezoneoptions] = useState();
const { data, setData,register, handleSubmit, post, processing, errors, reset } = useForm();

const submit = (e) => {
    e.preventDefault();
}

useEffect(() => {
    axios.get(lms.organisation.autocomplete).then(response=>{
        // console.log(response.data);
        setOrganisations(response.data.organisations.data);
    });
    axios.get(lms.timezone.autocomplete).then(response=>{
        // console.log(response.data);
        const timezones=response.data.timezones.data.map((value,index)=>{
            return { value: value.time_zone, label: value.time_zone }
        });
        setTimezoneoptions(timezones);
    });
}, []);



const onChangeOrganisation = (data) => {
    console.log(data);
   
}

return (
    <div className="p-3">
    <form className="w-full"  onSubmit={submit}>
                    
    </form>
    </div>
)
}

export default Form
