import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MaterialTable, { MTableToolbar } from "material-table";
import authApi from "../../apis/auth.api";
import { useLocalContext } from "../../context/context";
import cookie from "react-cookies";

const AdminList = () => {
  const navigate = useNavigate();
  const {list_admin,setListAdmin} = useLocalContext();
  const [tableData,setTableData] = useState(list_admin);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await authApi.getListAdmin();
        setListAdmin(response.data)
        setTableData(response.data)
        cookie.save('list_admin',response.data)

      } catch (e) {
        console.log(e.message)
      }
  }
  fetchData()
  }, [list_admin]);

  const columns = [
    {
      title: "ID",
      field: "id",
      sorting: false,
      filtering: false,
      render: (rowData) => (
        <div
          style={{
            width: "2rem",
          }}
        >
          {rowData.id.slice(0,5)}
        </div>
      ),
    },
    { title: "Full name", field: "fullname", sorting: false },
    { title: "Email", field: "email", sorting: false },
    {
      title: "Username",
      field: "username",
      align: "center",
      searchable: false,
      sorting: false,
    },
    {
      title: "Create Time",
      field: "createAt",
      align: "center",
      searchable: false,
      render: (rowData) => (
        <div>
          {!rowData.createAt ? "1/7/2022 03:24:00 PM" : rowData.createAt}
        </div>
      ),
    },
  ];

  return (
    <>
      {!list_admin ? (
        <></>
      ) : (
        <div>
          <h1 align="center">Admin List</h1>

          <MaterialTable
            columns={columns}
            data={tableData}
            onRowClick={(event, rowData) => {
              navigate(`${rowData.id}`);
              event.stopPropagation();
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
            components={{
              Toolbar: (props) => (
                <div>
                  <MTableToolbar {...props} />
                  <div style={{ padding: "1rem" }}>
                    <button
                      onClick={() => {
                        navigate("/create-admin");
                      }}
                    >
                      Create Admin Account
                    </button>
                  </div>
                </div>
              ),
            }}
          />
        </div>
      )}
    </>
  );
};

export default AdminList;
