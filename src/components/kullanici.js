import React, {Component} from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

import { render } from "react-dom";
import { makeData, Tips } from "./Utils";

class Kullanici extends Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
                {
                  Header: "First Name",
                  accessor: "firstName"
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName
                },
                {
                  Header: "Age",
                  accessor: "age"
                },
                {
                  Header: "Status",
                  accessor: "status"
                },
                {
                  Header: "Visits",
                  accessor: "visits"
                }
          ]}
          defaultPageSize={12}
          className="-striped -highlight"
        />
        <br />
        <Tips />
      </div>
    );
  }
}

export default Kullanici
