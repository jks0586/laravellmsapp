import React, { useRef ,useEffect } from 'react'
import $ from "jquery";
// import DataTables from 'datatables.net';
$.DataTable = require('datatables.net');
function LmsTable1({tabledata}) {
    const tableref=useRef(0);
    useEffect(()=>{
        if(tableref.current==0){
           const datatable = $('#datatable').dataTable({
                data:tabledata,
                paging: false,
                searching: false
            });
        }
    },[]);


  return (
    <div>
        <table id="datatable" class="display"  width="100%"></table>
    </div>
  )
}

export default LmsTable1
