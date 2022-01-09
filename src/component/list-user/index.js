import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Block } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useLocalContext } from "../../context/context";
import authApi from "../../apis/auth.api";

const UserList = () => {
  const navigate = useNavigate();
  const { list_user, setListUser } = useLocalContext();
  const { userDetail, setUserDetail } = useLocalContext();

  const [tableData, setTableData] = useState(list_user);

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
            width: "2rem",
          }}
        >
          {rowData.id.slice(0, 5)}
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
      editable: false,
    },
    {
      title: "Create Time",
      field: "createAt",
      align: "center",
      searchable: false,
      editable: false,
      render: (rowData) => (
        <div
          style={{
            borderRadius: "4px",
            width: "20rem",
            margin: "auto",
            alignItems: "center",
          }}
        >
          {!rowData.createAt ? "1/7/2022 03:24:00 PM" : rowData.createAt}
        </div>
      ),
    },
    {
      title: "Status",
      field: "status",
      align: "center",
      render: (rowData) => (
        <div
          style={{
            background:
              rowData.status === "blocked" ? "#f90000aa" : "#008000aa",
            borderRadius: "4px",
            width: "5rem",
            margin: "auto",
            alignItems: "center",
          }}
        >
          {!rowData.status ? "active" : rowData.status}
        </div>
      ),
      searchable: false,
      editable: false,
    },
  ];

  return (
    <>
      {!list_user ? (
        <></>
      ) : (
        <div>
          <h1 align="center">User List</h1>

          <MaterialTable
            columns={columns}
            data={tableData}
            editable={{
              onRowUpdate: async (newRow, oldRow) => {
                const updatedData = [...tableData];
                updatedData[oldRow.tableData.id] = newRow;

                try {
                  const user = { id: updatedData[oldRow.tableData.id].id };
                  const studentId = updatedData[oldRow.tableData.id].studentId;

                  const response = await authApi.updateStudentId({
                    user,
                    studentId,
                  });

                  setTableData(updatedData);
                  setListUser(updatedData);
                } catch (e) {
                  console.log(e.message);
                }
              },
            }}
            actions={[
              {
                icon: () => <Block />,
                tooltip: "Lock/Unlock account",
                onClick: async (event, rowData) => {
                  const updatedData = [...tableData];
                  if (updatedData[rowData.tableData.id].status === "blocked") {
                    updatedData[rowData.tableData.id].status = "active";
                  } else {
                    updatedData[rowData.tableData.id].status = "blocked";
                  }

                  try {
                    const user = { id: updatedData[rowData.tableData.id].id };
                    const status = updatedData[rowData.tableData.id].status;

                    const response = await authApi.updateStatus({
                      user,
                      status,
                    });

                    setTableData(updatedData);
                    setListUser(updatedData);
                  } catch (e) {
                    console.log(e.message);
                  }
                },
              },
            ]}
            onRowClick={async (event, rowData) => {
              try {
                const response = await authApi.getDetailUser(rowData.id);
                setUserDetail(response.data);
                navigate(`${rowData.id}`);
                event.stopPropagation();
              } catch (e) {
                console.log(e.message);
              }
            }}
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
              headerStyle: { background: "#8ad138", color: "#fff" },
            }}
          />
        </div>
      )}
    </>
  );
};

export default UserList;
