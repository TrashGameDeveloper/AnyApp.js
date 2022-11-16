import * as React from 'react'
import {Entry, TableEntryProps, TableProps} from './type'

let TableEntry = ({entry} : TableEntryProps) => {
    return (
        <div className="columns">
            {Object.entries(entry).map(([_1, value], _2) => <div className="column">{value}</div>)}
        </div>
    );
}

let Table = ({entryList} : TableProps) => {
    return (
        <React.Fragment>
            <section className="section">
                <h1 className="title">
                    Random Entries
                </h1>
            </section>
            <div className="container">
                <div className="columns">
                    <div className="column title">Year</div>
                    <div className="column title">Country</div>
                    <div className="column title">Product</div>
                    <div className="column title">Activity</div>
                </div>
                {entryList.map((e : Entry) => <TableEntry entry={e}/>)}
            </div>
        </React.Fragment>
    );
}

export default Table