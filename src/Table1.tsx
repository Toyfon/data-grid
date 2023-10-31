import { DataGrid, GridColDef, GridColumnGroupingModel, GridRowsProp } from '@mui/x-data-grid'

export const Table1 = () => {


    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: ''
        },
        {
            field: 'brand',
            headerName: ''
        },


        { field: 'min', headerName: 'min', flex: 1 },
        { field: 'median', headerName: 'median', flex: 1 },
        { field: 'max', headerName: 'max', flex: 1 },
        { field: 'total', headerName: 'total', flex: 1 },

        { field: 'min1', headerName: 'min', flex: 1 },
        { field: 'median1', headerName: 'median', flex: 1 },
        { field: 'max1', headerName: 'max', flex: 1 },
        { field: 'total1', headerName: 'total', flex: 1 },

        { field: 'min2', headerName: 'min', flex: 1 },
        { field: 'median2', headerName: 'median', flex: 1 },
        { field: 'max2', headerName: 'max', flex: 1 },
        { field: 'total2', headerName: 'total', flex: 1 },
    ]

    const rows: GridRowsProp = [
        {
            id: 1,
            brand: 'Bosh',
            min: 100,
            median: 150,
            max: 165,
            total: 500,
            min1: 500,
            median1: 534,
            max1: 650,
            total1: 40,
            min2: 500,
            median2: 534,
            max2: 650,
            total2: 40
        },
        {
            id: 2,
            brand: 'Xiaomi',
            min: 89,
            median: 150,
            max: 165,
            total: 500,
            min1: 500,
            median1: 534,
            max1: 650,
            total1: 40,
            min2: 500,
            median2: 534,
            max2: 650,
            total2: 40
        }
    ]

    const columnsGroupModel: GridColumnGroupingModel = [
        {
            groupId: 'ID',
            description: '',
            children: [{ field: 'id', }]
        },
        {
            groupId: 'Brand',
            description: '',
            children: [{ field: 'brand' }]
        },
        {
            groupId: 'Characteristics',
            children: [
                {
                    groupId: 'metallic',
                    children: [{
                        groupId: 'red',
                        children: [{ field: 'min' }, { field: 'median' }, { field: 'max' }, { field: 'total' }]
                    }]
                },
                {
                    groupId: 'glass',
                    children: [{ field: 'min1' }, { field: 'median1' }, { field: 'max1' }, { field: 'total1' }]
                },
                {
                    groupId: 'plastic',
                    children: [{ field: 'min2' }, { field: 'median2' }, { field: 'max2' }, { field: 'total2' }]
                }
            ]
        }
    ]


    return (
        <DataGrid
            experimentalFeatures={{ columnGrouping: true }}
            columns={columns}
            rows={rows}
            columnGroupingModel={columnsGroupModel}
        />
    )
}


