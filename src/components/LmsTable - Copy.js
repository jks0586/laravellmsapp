import React, { Component } from 'react';
import PropTypes from 'prop-types';
const $ = require('jquery');
$.DataTable = require('datatables.net');

class LmsTable extends Component {
    constructor(props) {
        super(props);
        // console.log(props,'uuuu');
    }


    componentDidMount() {
        
        // console.log(this.el)
        this.$el = $(this.el)
        this.$el.DataTable(
            {
                pageLength: 30,
                stateSave: true,
                processing: true,
                serverSide: false,
                data:this.props.tabledata.data,
                columns: [
                    { data: "id",title:"ID"},
                    { data: "name",title:"Name"},
                    { data: "url",title:"Url"},
                    { data: "active",title:"Active"},
                ]
            }
        );
    }


    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }


    componentDidUpdate(prevProps, prevState) {

    }


    render() {
        return (
            <div>
            <table className="display table table-striped nowrap" width="100%" ref = { el => this.el = el}></table>
            </div>
        );
    }
}

LmsTable.propTypes = {

};

export default LmsTable;
 
// export class LmsTable extends Component {
//     componentDidMount() {
//         console.log(this.el)
//         this.$el = $(this.el)
//         // this.$el.DataTable(
//         //     {
                
//         //         columns: [
//         //             { title: "Name"},
//         //             { title: "Position"},
//         //             { title: "Office"},
//         //             { title: "Extn."},
//         //             { title: "Start data"},
//         //             { title: "Salary"}
//         //         ]
//         //     }
//         // )
//     }
 
//     componentWillUnmount() {
 
//     }
 
//     render() {
//         return <div>
//             <table className="display" width="100%" ref = { el => this.el = el}></table>
//         </div>
//     }
// }