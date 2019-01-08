import React from 'react';
import './List.scss';

const List = props => (
    <ol className="list-group">
        { 
            props.items.map((item, index) => <li key={index} className="list-group-item"><span className="badge badge-secondary">{index}</span>{item}</li>)
        }
    </ol>
);

export default List;