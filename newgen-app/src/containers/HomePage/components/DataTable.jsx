
import { Table, Input } from "reactstrap";

function DataTable(props) {
    return (
        <Table
        >
            <thead>
                <tr>
                    {props.tableHeader && props.tableHeader.length > 0 && props.tableHeader.map((res, i) =>
                        <th key={i}>
                            {props.mode !== 'columns' && (
                                <Input type="checkbox" checked={props.selectedHeaders.indexOf(res) !== -1} onChange={() => props.headerChange(res, i)} />
                            )}
                            {res}
                        </th>
                    )}
                </tr>
            </thead>
            <tbody>
                {props.tableData && props.tableData.length > 0 && props.tableData.map((data, i) =>
                    <tr key={i}>
                        {data && data.length > 0 && data.map((res, j) =>
                            <th key={j} scope="row">
                                {props.selectedColumnIndex === j && (
                                    <Input type="checkbox" checked={props.selectedColumns.indexOf(res) !== -1} onChange={() => props.columnChange(res)} />
                                )} {res}
                            </th>
                        )}
                    </tr>

                )}
            </tbody>
        </Table>
    )
}

export default DataTable;