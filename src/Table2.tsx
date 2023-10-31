import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'

export const Table2 = () => {

    const columns: GridColDef[] = [
        { field: 'id' }
    ]


    const rows: GridRowsProp = [
        { id: 1 }
    ]

    return (
        <DataGrid
            experimentalFeatures={{ columnGrouping: true }}
            columns={columns}
            rows={rows}
            //columnGroupingModel={columnsGroupModel}
        />
    )
}