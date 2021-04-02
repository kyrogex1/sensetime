import React, { useEffect, useState } from 'react';
import 'react-tree-graph/dist/style.css';
import TreeGraph from 'react-tree-graph';

const Tree = props => {

    const [data, setData] = useState({ name : "root", children : []});

    useEffect(() => {
        fetch("https://kyrogex1.github.io/json/Sensetime/tree.json")
        .then(response => response.json())
        .then(data => {
            data = JSON.stringify(data);
            data = data.replaceAll('id', 'name');
            data = JSON.parse(data);
            data = {
                name : "root",
                children : data
            };
            setData(data);
        })
    }, [])

    return (
        <div>
            <TreeGraph
            data={data}
            height={500}
            width={500}
            pathFunc={(x1, y1, x2, y2) =>
                `M${y1},${x1} ${y2},${x2}`}
            />
            <pre>{ JSON.stringify(data, null, 2) }</pre>
        </div>
    )
}


export default Tree