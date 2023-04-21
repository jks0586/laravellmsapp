import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../node_modules/datatables.net-dt/css/jquery.dataTables.css";
// import 'datatables.net-responsive-dt';
const datatbaleId = "datatable_draw";
export default function LmsTable(props) {
  $.DataTable = require("datatables.net");
  const tableRef = useRef(0);
  const tabledata = useRef(0);

  useEffect(() => {
    // console.log(props);
    // console.log(tabledata.current)
    if (tabledata.current == 0) {
        console.log($("#" + datatbaleId + " thead tr"),'uuuu');
    //   $("#" + datatbaleId + " thead tr").clone(true).addClass("filters").appendTo("#" + datatbaleId + " thead");
        $('<tr class="filters"><th>jhkkhhhkkh</th><th></th><th></th><th></th></tr>').appendTo("#" + datatbaleId + " thead");
      tabledata.current = 1;
    }
    const table = $(tableRef.current).DataTable({
      dom: '<"top"l><"bottom"rtip><"clear">',
      pageLength: 2,
      orderCellsTop: true,
      fixedHeader: true,
      stateSave: true,
      responsive: true,
      serverSide: false,
      searching: false,
      responsive: true,
      data: props.tabledata.data,
      columns: props.columns,
      destroy: true,
      initComplete: function () {
        var api = this.api();
        // console.log(api);
        // For each column
        api
          .columns()
          .eq(0)
          .each(function (colIdx) {
            // console.log(colIdx,'hhh');
            // Set the header cell to contain the input element
            var cell = $(".filters th").eq(
              $(api.column(colIdx).header()).index()
            );
            var title = $(cell).text();
            $(cell).html('<input type="text" placeholder="' + title + '" />');

            // On every keypress in this input
            $(
              "input",
              $(".filters th").eq($(api.column(colIdx).header()).index())
            )
              .off("keyup change")
              .on("change", function (e) {
                // Get the search value
                $(this).attr("title", $(this).val());
                var regexr = "({search})"; //$(this).parents('th').find('select').val();

                var cursorPosition = this.selectionStart;
                // Search the column for that value
                api
                  .column(colIdx)
                  .search(
                    this.value != ""
                      ? regexr.replace("{search}", "(((" + this.value + ")))")
                      : "",
                    this.value != "",
                    this.value == ""
                  )
                  .draw();
              })
              .on("keyup", function (e) {
                e.stopPropagation();

                $(this).trigger("change");
                $(this)
                  .focus()[0]
                  .setSelectionRange(cursorPosition, cursorPosition);
              });
          });
      },
    });

    return function () {
      // console.log("Table destroyed")
      table.destroy();
    };

    // $('#DataTables_Table_0 thead th').each( function () {
    //     var title = $('#DataTables_Table_0 thead th').eq( $(this).index() ).text();
    //     $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    // } );

    // Extra step to do extra clean-up.
  }, []);

  return (
    <div className="lmstable">
      <table
        id={datatbaleId}
        className="table table-striped"
        width="100%"
        ref={tableRef}></table>
    </div>
  );
}
