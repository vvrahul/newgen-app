import { useState } from "react";
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from "reactstrap";
import ColumnModal from "./ColumnModal";
import DataTable from "./DataTable";

function DataTableModal(props) {
  const [selectedHeaders, setSelectedHeaders] = useState([]);
  const [isColumnModalOpen, setColumnModal] = useState(false);
  const [selectedColumnIndex, setSelectedColumnIndex] = useState('');
  const [selectedColumns, setSelectedColumns] = useState([]);

  const headerChange = (event, i) => {
    const newSelectedHeaders = [...selectedHeaders];
    const newResult = [...props.newgenResult]
    const filteredResult = newResult.filter(res => res.header !== event)
    if (newSelectedHeaders.indexOf(event) === -1) {
      newSelectedHeaders.push(event);
    }
    setSelectedColumnIndex(i);
    setSelectedHeaders(newSelectedHeaders);
    console.log(filteredResult[0])
    setSelectedColumns(filteredResult[0] && filteredResult[0].values || selectedColumns)
    setColumnModal(true);
  }

  const submitColumnChange = (columns) => {
    const newResult = [...props.newgenResult]
    const headerValue = props.csvData[0].filter((res, i) => i === selectedColumnIndex)[0];
    const filteredResult = newResult.filter(res => res.header !== headerValue)
    let resultObj = {
      header: headerValue,
      values: columns
    }
    filteredResult.push(resultObj);
    props.setNewgenResult(filteredResult);
    setSelectedColumns(columns);
    setColumnModal(false);
  }

  return (
    <Modal
      isOpen={props.isTableModalOpen}
    >
      <ModalHeader>
        Data Table
      </ModalHeader>
      <ModalBody>
        <DataTable
          selectedHeaders={selectedHeaders}
          headerChange={headerChange}
          tableData={props.csvData.slice(1, props.csvData.length)}
          tableHeader={props.csvData[0]}
        />
        {isColumnModalOpen && (
          <ColumnModal
            isColumnModalOpen={isColumnModalOpen}
            setColumnModal={setColumnModal}
            selectedColumns={selectedColumns}
            submitColumnChange={submitColumnChange}
            selectedColumnIndex={selectedColumnIndex}
            selectedHeaders={selectedHeaders}
            tableData={props.csvData.slice(1, props.csvData.length)}
            tableHeader={props.csvData[0]}
          />
        )}

      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={() => props.submitHeaderChange(selectedHeaders)}
        >
          Submit
        </Button>
        {' '}
        <Button onClick={() => {
          props.setTableModal(false);
          setSelectedHeaders([]);
          props.submitHeaderChange([]);
          props.setNewgenResult([]);

        }}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default DataTableModal;
