import React, { useState } from "react";
import MaterialTable from "material-table";
import { Block } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import cookie from "react-cookies";

const UserList = () => {
  const navigate=useNavigate()
  const list_user = cookie.load("list_user");

  const [tableData, setTableData] = useState(list_user);
  console.log(list_user);

  const columns = [
    {
      title: "ID",
      field: "id",
      sorting: false,
      filtering: false,
      editable: false,
      render: (rowData) => (
        <div
          style={{
            width: "2rem"
          }}
        >
          {rowData.id.slice(0,5)}
        </div>
      ),
    },
    { title: "Student ID", field: "studentId", sorting: false },
    { title: "Full name", field: "fullname", sorting: false, editable: false },
    { title: "Email", field: "email", sorting: false, editable: false },
    {
      title: "Username",
      field: "username",
      align: "center",
      searchable: false,
      sorting: false,
      editable: false
    },
    { title: "Create Time", field: "createAt", align: "center", searchable: false, editable: false,
    render: (rowData) => (
      <div
        style={{
          borderRadius: "4px",
          width: '20rem',
          margin:'auto',
          alignItems:'center'
        }}
      >
          {!rowData.createAt ? "1/7/2022 03:24:00 PM" : rowData.createAt}
      </div>
    ), },
    {
      title: "Status",
      field: "status",
      align: "center",
      render: (rowData) => (
        <div
          style={{
            background: rowData.status === "blocked" ? "#f90000aa" : "#008000aa",
            borderRadius: "4px",
            width: '5rem',
            margin:'auto',
            alignItems:'center'
          }}
        >
          {rowData.status}
        </div>
      ),
      searchable: false,
      editable: false
    },
  ];

  return (
    <>
    {!list_user ? (
      <></>
    ) : (
      <div>
      <h1 align="center">User List</h1>

      {/* <MaterialTable
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
        }}
        actions={[
          {
            icon: () => <Block />,
            tooltip: 'Lock/Unlock account',
            onClick: (event, rowData) => {
              const updatedData = [...tableData];
              if (updatedData[rowData.tableData.id].status==='blocked'){
                updatedData[rowData.tableData.id].status = 'active';
              }
              else{
                updatedData[rowData.tableData.id].status = 'blocked';
              }
              setTableData(updatedData);
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
          columnsButton: false,
          showTitle: false,
          rowStyle: (data, index) =>
            index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "#f44336", color: "#fff" },
        }}
      /> */}
    </div>
    )}
  </>
  );
};

export default UserList;
