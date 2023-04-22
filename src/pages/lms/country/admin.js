import React,{ useState, useRef, useEffect, useMemo, useCallback} from 'react';
import axios from '@/lib/axios';
import lms from '@/hooks/lmsroutes';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
function admin() {

    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);

    const gridRef = useRef();
    const [rowData, setRowData] = useState();

    // Each Column Definition results in one Column.
    const [columnDefs, setColumnDefs] = useState([
        {field: 'code', filter: true},
        {field: 'name', filter: true}
    ]);

    // DefaultColDef sets props common to all Columns
    const defaultColDef = useMemo( ()=> ({
        sortable: true
    }));

    // Example of consuming Grid Event
    const cellClickedListener = useCallback( event => {
        console.log('cellClicked', event);
    }, []);


    // Example using Grid's API
    const buttonListener = useCallback( e => {
        gridRef.current.api.deselectAll();
    }, []);


    const onGridReady = useCallback((params) => {
        // console.log('dddddd');
        axios.get(lms.country.autocomplete).then((response)=>{
            console.log(response.data);
            setRowData(response.data);
        }).catch((error)=>{
            console.log(error);
        });

        gridRef.current.api.sizeColumnsToFit({
            defaultMinWidth: 100,
            columnLimits: [{ key: 'country', minWidth: 900 }],
        });

    });

  return (

    <div style={containerStyle}>
        <div className="ag-theme-alpine" style={gridStyle}>
        
        </div>
    </div>
  )
}

export default admin
