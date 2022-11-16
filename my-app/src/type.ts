type Entry = {
    year: number;
    country: string;
    product: string;
    activity: string;
}

type TableEntryProps = {
    entry: Entry
}

type TableProps = {
    entryList: Array<Entry>
}

export type {Entry, TableEntryProps, TableProps}