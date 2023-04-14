import React, { useEffect } from 'react';

import LmsLayout from '@/components/Layouts/LmsLayout';
import Breadcrumb from '@/components/lms/Breadcrumb';
import lms from '@/hooks/lmsroutes';
import axios  from '@/lib/axios';
import dynamic from "next/dynamic";
import { useState } from 'react';
import { useRef } from 'react';
import LmsTable from '@/components/LmsTable';
// import $ from "jquery";
// const LmsTable = dynamic(
//     () => {
//       return import("@/components/LmsTable");
//     },
//     { ssr: false }
//   );


const columns=[
    { data: "id",title:"ID"},
    { data: "name",title:"Name"},
    { data: "url",title:"Url"},
    { data: "active",title:"Active"},
];

const admin = () => {
const [datatable,setdatatable]= useState();
const tabledataref=useRef(0);
useEffect(() => {
    if(tabledataref.current==0){
    axios.get(lms.organisation.autocomplete).then(response=>{
        // console.log(response);
        setdatatable(response.data.organisations);
        // if (typeof window !== "undefined") {
        //     let lmstable = new DataTable('#organistions_admin', {data:response.data.organisations.data});
        // }
        // const organisationoptions=response.data.organisations.data.map((value,index)=>{
        //     return { value: value.id, label: value.name }
        // });
        // setOrganisations(organisationoptions);
        tabledataref.current=1;
    });
    }
}, []);


useEffect(() => {
    
    
}, []);
  return (
    <LmsLayout>
        
        <div className='container'>
        {(tabledataref.current==1)?(<LmsTable tabledata={datatable} columns={columns}></LmsTable>):''}
        
        </div>
    </LmsLayout>
  )
}

export default admin
