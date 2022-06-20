import { useState } from "react";
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from "reactstrap";
import DataTable from "./DataTable";


function ColumnModal(props) {
  const [selectedColumns, setSelectedColumns] = useState([]);

  const columnChange = (event) => {
    const newSelectedColumns = [...selectedColumns];
    if (newSelectedColumns.indexOf(event) === -1) {
      newSelectedColumns.push(event);
    } else {
      newSelectedColumns.splice(newSelectedColumns.indexOf(event), 1);
    }
    setSelectedColumns(newSelectedColumns);
  }
console.log(props.selectedColumns)
  return (
    <Modal
      isOpen={props.isColumnModalOpen}
    >
      <ModalHeader>
        Data Columns
      </ModalHeader>
      <ModalBody>
        <DataTable
          mode={'columns'}
          columnChange={columnChange}
          selectedColumnIndex={props.selectedColumnIndex}
          selectedColumns={selectedColumns}
          headerChange={props.headerChange}
          tableData={props.tableData}
          tableHeader={props.tableHeader}
        />
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={() => props.submitColumnChange(selectedColumns)}
        >
          Submit
        </Button>
        {' '}
        <Button onClick={() => props.setColumnModal(false)}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ColumnModal;
