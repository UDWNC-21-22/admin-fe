import React, { useState } from "react";
import MaterialTable from "material-table";
import "./index.css";
import { useLocalContext } from "../../context/context";

const UserDetail = () => {
  const { userDetail, setUserDetail } = useLocalContext();

  const user = userDetail?.info;
  const fullname = user?.fullname;
  const email = user?.email;
  const username = user?.username;
  let createAt = user?.createAt;
  if (!createAt){
    createAt = "1/7/2022 03:24:00 PM"
  }
  const classMember = userDetail?.classMember;
  const classOwner = userDetail?.classOwner;

  const [tableData, setTableData] = useState(classMember);

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
    { title: "Class Name", field: "name", sorting: false },
    {
      title: "Teacher",
      field: "owner",
      render: (
        rowData //rowData.owner ? rowData.owner.join(', ') : 'null',
      ) => (
        <div>
          {rowData?.owner.map((item) => {
            return <li>{item.fullname}</li>;
          })}
        </div>
      ),
      searchable: false,
    },
  ];

  const [tableData1, setTableData1] = useState(classOwner);

  const columns1 = [
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
    { title: "Class Name", field: "name", sorting: false },
    {
      title: "Teacher",
      field: "owner",
      render: (
        rowData //rowData.owner ? rowData.owner.join(', ') : 'null',
      ) => (
        <div>
          {rowData?.owner.map((item) => {
            return <li>{item.fullname}</li>;
          })}
        </div>
      ),
      searchable: false,
    },
    {
      title: "Student",
      field: "member",
      render: (
        rowData //rowData.owner ? rowData.owner.join(', ') : 'null',
      ) => (
        <div>
          {rowData?.member.map((item) => {
            return <li>{item.fullname}</li>;
          })}
        </div>
      ),
      searchable: false,
    },
  ];

  return (
    <>
      {!userDetail ? (
        <></>
      ) : (
        <div>
          <h1 align="center">User Detail</h1>

          <div className="detail-container">
            <div className="information">
              <p className="title">Full name</p>
              <p className="info">{fullname}</p>
            </div>

            <div className="information">
              <p className="title">Username</p>
              <p className="info">{username}</p>
            </div>

            <div className="information">
              <p className="title">Email</p>
              <p className="info">{email}</p>
            </div>

            <div className="information">
              <p className="title">Create at</p>
              <p className="info">{createAt}</p>
            </div>
          </div>

          <div
            style={{
              borderRadius: "4px",
              width: "80%",
              margin: "auto",
              padding: "2rem",
            }}
          >
            <MaterialTable
              title="List Class Owner"
              columns={columns1}
              data={tableData1}
              options={{
                sorting: true,
                search: false,
                filtering: false,
                paging: false,
                actionsColumnIndex: -1,
                selection: false,
                showSelectAllCheckbox: false,
                showTextRowsSelected: false,
                grouping: false,
                columnsButton: false,
                rowStyle: (data, index) =>
                  index % 2 === 0 ? { background: "#f5f5f5" } : null,
                headerStyle: { background: "#8ad138", color: "#fff" },
              }}
            />
          </div>

          <div
            style={{
              borderRadius: "4px",
              width: "80%",
              margin: "auto",
              padding: "2rem",
            }}
          >
            <MaterialTable
              title="List Class Member"
              columns={columns}
              data={tableData}
              options={{
                sorting: true,
                search: false,
                filtering: false,
                paging: false,
                actionsColumnIndex: -1,
                selection: false,
                showSelectAllCheckbox: false,
                showTextRowsSelected: false,
                grouping: false,
                columnsButton: false,
                rowStyle: (data, index) =>
                  index % 2 === 0 ? { background: "#f5f5f5" } : null,
                headerStyle: { background: "#8ad138", color: "#fff" },
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default UserDetail;
