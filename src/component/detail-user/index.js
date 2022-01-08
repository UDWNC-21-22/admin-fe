import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MaterialTable from "material-table";
import "./index.css";
import { list_user } from "../../dummy-data/user";

const UserDetail = () => {
  const { userId } = useParams();
  const user = list_user.find((acc) => (acc.id === userId));
  const fullname = user?.fullname;
  const email = user?.email;
  const username = user?.username;
  const createAt = user?.createAt;
  const list_class = user?.list_class;

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
            width: "2rem",
          }}
        >
          {rowData.id}
        </div>
      ),
    },
    { title: "Class Name", field: "className", sorting: false },
    {
      title: "Teacher",
      field: "owner",
      render: (
        rowData //rowData.owner ? rowData.owner.join(', ') : 'null',
      ) => (
        <div>
          {rowData?.owner.map((item) => {
            return <li>{item.name}</li>;
          })}
        </div>
      ),
      searchable: false,
    },
  ];

  return (
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
          padding:'2rem'
        }}
      >
        <MaterialTable
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
            showTitle: false,
            rowStyle: (data, index) =>
              index % 2 === 0 ? { background: "#f5f5f5" } : null,
            headerStyle: { background: "#f44336", color: "#fff" },
          }}
        />
      </div>
    </div>
  );
};

export default UserDetail;
