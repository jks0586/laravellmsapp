import React, { useEffect, useRef } from "react"
import $ from 'jquery';
import "bootstrap/dist/css/bootstrap.min.css";
// import 'datatables.net-responsive-dt';
export default function LmsTable(props) {
    $.DataTable = require('datatables.net');
    const tableRef = useRef();

    useEffect(() => {
        // console.log(props);
        // console.log(tableRef.current)
        const table = $(tableRef.current).DataTable(
            {
                dom: '<"top"l><"bottom"rtip><"clear">',
                pageLength: 2,
                stateSave: true,
                // processing: true,
                serverSide: false,
                searching: false,
                responsive: true,
                data: props.tabledata.data,
                columns: props.columns,
                destroy: true  // I think some clean up is happening here
            }
        );

        $('#DataTables_Table_0 thead th').each( function () {
            var title = $('#DataTables_Table_0 thead th').eq( $(this).index() ).text();
            $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
        } );

        // Extra step to do extra clean-up.
        return function() {
            // console.log("Table destroyed")
            table.destroy()
        }
    },[]);

    return (
        <div className="lmstable">
            <table className="table table-striped" width="100%" ref={ tableRef }></table>
        </div>
         
    )
}
