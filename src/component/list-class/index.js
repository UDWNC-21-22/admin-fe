import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Launch } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { list_class } from "../../dummy-data/class";
const ClassList = () => {
  const navigate=useNavigate()

  useEffect(
    async function fetchData () {

    }
  )
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
        onRowClick={(event,rowData)=>{
          navigate(`${rowData.id}`)
          event.stopPropagation()
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
          actionsColumnIndex: -1,
          selection: false,
          showSelectAllCheckbox: false,
          showTextRowsSelected: false,
          grouping: false,
          columnsButton: false,
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
