import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { list_class } from "../../dummy-data/class";
import MaterialTable from "material-table";

const ClassDetail = () => {
  const { classId } = useParams();
  const classroom = list_class.find((acc) => acc.id === classId);

  const name = classroom?.name;
  const description = classroom?.description;
  const createAt = classroom?.createAt;
  const member = classroom?.member;
  const owner = classroom?.owner;

  const [tableData, setTableData] = useState(member);

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
    { title: "Full name", field: "fullname", sorting: false },
    { title: "Username", field: "username", sorting: false },
    { title: "Email", field: "email", sorting: false },
  ];

  const [tableData1, setTableData1] = useState(owner);

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
          {rowData.id}
        </div>
      ),
    },
    { title: "Full name", field: "fullname", sorting: false },
    { title: "Username", field: "username", sorting: false },
    { title: "Email", field: "email", sorting: false },
  ];

  return (
    <div>
      <h1 align="center">Class Detail</h1>
      <div className="detail-container">
        <div className="information">
          <p className="title">Class name</p>
          <p className="info">{name}</p>
        </div>

        <div className="information">
          <p className="title">Description</p>
          <p className="info">{description}</p>
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
          title="List Teacher"
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
            headerStyle: { background: "#f44336", color: "#fff" },
          }}
        />
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
          title="List Student"
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
            headerStyle: { background: "#f44336", color: "#fff" },
          }}
        />
      </div>
    </div>
  );
};

export default ClassDetail;
