import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import _ from 'lodash';

const Table = props => {

    useEffect(() => {
        fetch("https://kyrogex1.github.io/json/Sensetime/sample.json")
        .then(response => response.json())
        .then(data => setData(data.table))
    }, [])

    const columns = [
        { title : "ID", field : "id", editable : false},
        { title : "Type", field : 'type'},
        { title : "Name", field : 'name'},
        { title : "Ppu", field : "ppu"},
        { title : "Student", field : "student"}
    ]

    const [data, setData] = useState([]);

    return (
        <div>
            <MaterialTable
            title="Sensetime Table"
            data={data}
            columns={columns}
            options={{
                filtering : true,
                actionsColumnIndex : -1,
                pageSize : 10
            }}
            editable={{
                onRowAdd : (newData) => new Promise((resolve, reject) => {
                    newData = {id : Math.ceil(Math.random() * 1e9), ...newData};
                    setData([...data, newData])
                    resolve()
                }),
                onRowDelete : (deletedData) => new Promise((resolve, reject) => {
                    setData(data.filter(row => row.id !== deletedData.id))
                    console.log(deletedData);
                    resolve();
                }),
                onRowUpdate : (newData, oldData) => new Promise((resolve, reject) => {
                    const dataUpdate = [...data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setData([...dataUpdate]);
                    resolve();
                })
            }}
            actions={[
                {
                    icon : "not_interested",
                    tooltip : "Remove Duplicate ppu",
                    isFreeAction : true,
                    onClick : () => {
                        const uniqueRows = _.uniqBy(data, 'ppu');
                        setData(uniqueRows);
                    }
                }
            ]}
            />
        </div>
    )
}

export default Table;