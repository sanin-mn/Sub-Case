import React from 'react'
import Table from 'react-bootstrap/Table';

function TableModal() {
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td>Language</td>
                        <td>Malayalam</td>
                    </tr>
                    <tr>
                        <td>Director</td>
                        <td>Sanin</td>
                    </tr>
                    <tr>
                        <td>Transalator</td>
                        <td>Jhpne</td>
                    </tr>
                    <tr>
                        <td>genere</td>
                        <td>Thriller</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default TableModal




