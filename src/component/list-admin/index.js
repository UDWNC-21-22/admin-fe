import React, { useState } from "react";
import { Launch } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import MaterialTable,{ MTableToolbar } from "material-table";
import { list_admin } from "../../dummy-data/admin";

const AdminList = () => {
  const navigate = useNavigate()

  const [tableData, setTableData] = useState(list_admin);
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
    { title: "Full name", field: "fullName", sorting: false },
    { title: "Email", field: "email", sorting: false },
    { title: "Username", field: "username", align: "center", searchable: false, sorting: false },
    { title: "Password", field: "password", align: "center", searchable: false, sorting: false },
    { title: "Create Time", field: "createAt", align: "center", searchable: false },
  ]

  return (
    <div>
      <h1 align="center">Admin List</h1>

      <MaterialTable
        columns={columns}
        data={tableData}
        editable={{
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
        actions={[
          {
            icon: () => <Launch />,
            tooltip: 'More detail',
            onClick: (event, rowData) => {
              navigate(`${rowData.id}`)
            }                
          }
        ]}
        onRowClick={(event,rowData)=>{
          navigate(`${rowData.id}`)
          event.stopPropagation()
        }}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true,
          search: true,
          searchFieldAlignment: "left",
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
          columnsButton: true,
          showTitle: false,
          rowStyle: (data, index) =>
            index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "#f44336", color: "#fff" },
        }}
        components={{
          Toolbar: props => (
            <div>
              <MTableToolbar {...props} />
              <div style={{padding: '1rem'}}>
                <button onClick={()=>{navigate('/create-admin')}}>Create Admin Account</button>
              </div>
            </div>
          ),
        }}
      />
    </div>
  )
};

export default AdminList;
