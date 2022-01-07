import React, { useState } from "react";
import MaterialTable from "material-table";

import { list_class } from "../../dummy-data/class";
const ClassList = () => {
  const [tableData, setTableData] = useState(list_class);
  const columns = [
    {
      title: "ID",
      field: "id",
      sorting: false,
      filtering: false,
      render: (rowData) => (
        <div
          style={{
            width: "2rem"
          }}
        >
          {rowData.id}
        </div>
      ),
    },
    { title: "Class name", field: "name", sorting: false },
    { title: "Description", field: "description", align: "center", searchable: false, sorting: false },
    { title: "Create Time", field: "createAt", align: "center", searchable: false },
  ]

  return (
    <div>
      <h1 align="center">Admin List</h1>

      <MaterialTable
        columns={columns}
        data={tableData}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setTableData([...tableData, newRow]);

              setTimeout(() => resolve(), 500);
            }),
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData[oldRow.tableData.id] = newRow;
              setTableData(updatedData);
              setTimeout(() => resolve(), 500);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData.splice(selectedRow.tableData.id, 1);
              setTableData(updatedData);
              setTimeout(() => resolve(), 1000);
            }),
        }}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true,
          search: true,
          searchFieldAlignment: "right",
          searchAutoFocus: true,
          searchFieldVariant: "standard",
          filtering: false,
          paging: true,
          pageSizeOptions: [5, 10, 50],
          pageSize: 5,
          paginationType: "stepped",
          addRowPosition: "first",
          actionsColumnIndex: -1,
          selection: false,
          showSelectAllCheckbox: false,
          showTextRowsSelected: false,
          grouping: false,
          columnsButton: true,
          showTitle: false,
          rowStyle: (data, index) =>
            index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "#f44336", color: "#fff" },
        }}
      />
    </div>
  )
};

export default ClassList;
