import './App.css'
import { Table1 } from './Table1.tsx'

function App() {


    // {
    //     groupId: 'Basic info',
    //         children: [
    //     {
    //         groupId: 'Full name',
    //         children: [{ field: 'lastName' }, { field: 'firstName' }],
    //     },
    //     { field: 'age' },
    // ],
    // },

    return (
        <div className="content">
            <div style={{marginBottom: '10px', height: '500px'}}>
                <Table1/>
            </div>


            {/*<div style={{marginBottom: '10px', height: '500px'}}>*/}
            {/*    <Table2/>*/}
            {/*</div>*/}

        </div>
    )
}

export default App
