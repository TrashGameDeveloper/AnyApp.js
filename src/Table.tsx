import * as React from 'react'
import {Entry, TableEntryProps, TableProps} from './type'

let TableEntry = ({entry} : TableEntryProps) => {
    return (
        <div className="columns">
            {Object.entries(entry).map(([_1, value], _2) => <div className="column">{value}</div>)}
        </div>
    );
}

const labels = ['Year', 'Country', 'Product', 'Activity']

let Table = ({entryList} : TableProps) => {
    return (
        <div className="container">
            <div className="columns">
                {labels.map((label : string) => <div className="column title">{label}</div>)}
            </div>
            {entryList.map((e : Entry) => <TableEntry entry={e}/>)}
        </div>
    );
}

export default Table