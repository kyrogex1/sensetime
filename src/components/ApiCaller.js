import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Typography } from '@material-ui/core';


const ApiCaller = props => {

    const [query, setQuery] = useState("https://jsonplaceholder.typicode.com/posts");
    const [data, setData] = useState({});

    // Handle Query API Button
    const handleClick = () => {
        fetch(query)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => {
            alert(error);
            setData({});
        });
    }

    // Button Component for Query API Button
    const submitBtn = (
        <Button 
        color="primary" 
        variant="contained" 
        onClick={handleClick}>
            Query
        </Button>
    )

    // Renders list for Sample API
    const renderList = () => {
        const items = [
            { description : "Sample.json from task 1", url : "https://kyrogex1.github.io/json/Sensetime/sample.json"},
            { description : "Tree.json from task 2", url : "https://kyrogex1.github.io/json/Sensetime/tree.json"},
            { description : "Posts", url : "https://jsonplaceholder.typicode.com/posts"},
        ]

        return items.map(item => {
            return (
            <ListItem>
                <ListItemText
                primary={item.description}
                secondary={item.url}
                />
                <Button
                variant="contained"
                color="primary"
                onClick={() => setQuery(item.url)}>Copy to Input</Button>
            </ListItem>
            )
        })


    }

    // Generate Pretty Printed JSON Response
    const prettyPrintedText = JSON.stringify(data, null, 2);

    return (
        <div>
            <TextField
                id="standard-name"
                label="API Url"
                value={query}
                fullWidth
                placeholder="Input API URL or click one of the sample URLs below"
                onChange={(e) => setQuery(e.target.value)}
                InputProps={{endAdornment: submitBtn}}
            />
            <Typography variant="h6">
                Sample API Urls
            </Typography>
            <List>
                {renderList()}
            </List>
            <pre>JSON Response Result</pre>
            <pre>{ prettyPrintedText === "{}" ? "" : prettyPrintedText }</pre>
        </div>
    )
}

export default ApiCaller;