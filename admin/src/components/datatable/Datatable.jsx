import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../hooks/useFetch"
import { useEffect } from "react";
import axios from "axios";


const Datatable = () => {
 

  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState();
  const { data, loading, error } = useFetch(`http://localhost:3000/users`);

  useEffect(() => {
    setList(data);
    // console.log(data)
  }, [data]);

useEffect(()=>{
  console.log(data, loading)}
,[loading])
  const handleDelete = async (id) => {
    try {
      console.log("delete", id)
      await axios.delete(`http://localhost:3000/${path}/${id}`);
      setList(list.filter((item) => item._id !== id));
      console.log(list)
    } catch (err) {}
  };




  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
{  data ?     <DataGrid
        className="datagrid"
        rows={list}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row)=>row._id}
      />: <p>loading</p>}
    </div>
  );
};

export default Datatable;
