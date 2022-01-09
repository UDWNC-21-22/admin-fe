import React, { useState } from "react";
import MaterialTable from "material-table";
import { useNavigate } from "react-router-dom";
import cookie from "react-cookies";

const ClassList = () => {
  const navigate = useNavigate();
  const list_class = cookie.load("list_class");

  const [tableData] = useState(list_class);
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
          {rowData.id.slice(0, 5)}
        </div>
      ),
    },
    { title: "Class name", field: "name", sorting: false },
    {
      title: "Description",
      field: "description",
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
      {!list_class ? (
        <></>
      ) : (
        <div>
          <h1 align="center">Class List</h1>

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
      )}
    </>
  );
};

export default ClassList;
