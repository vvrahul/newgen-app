import { useEffect, useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { fetchCsvData } from './actions';
import DataTableModal from './components/DataTableModal';
import { useSelector, useDispatch } from 'react-redux';

function NewgenForm() {
  const [isTableModalOpen, setTableModal] = useState(false);
  const [newgenResult, setNewgenResult] = useState([]);
  const [headers, setHeaders] = useState('');
  const csvData = useSelector(state => state.newGenReducer.csvData);
  const dispatch = useDispatch();

  const submitHeaderChange = (selectedHeaders) => {
    let header = selectedHeaders.join(',');
    setHeaders(header);
    setTableModal(false);
  }

  useEffect(() => {
    fetchCsvData(dispatch);
  }, [])

  return (
    <>
      {csvData && (
        <DataTableModal
          isTableModalOpen={isTableModalOpen}
          csvData={csvData}
          newgenResult={newgenResult}
          setNewgenResult={setNewgenResult}
          setTableModal={setTableModal}
          submitHeaderChange={submitHeaderChange}
        />
      )}

      <Form>
        <FormGroup>
          <Label for="headerBox">
            Select Header
          </Label>
          <Input
            id="hederBox"
            name="headerBox"
            value={headers}
            placeholder="Select Header"
            type="text"
            onClick={() => setTableModal(!isTableModalOpen)}
          />

        </FormGroup>
        {newgenResult.length > 0 && !isTableModalOpen && (
          <Label for="sampleResult" style={{width: "300px"}}>
            {JSON.stringify(newgenResult)}
          </Label>
        )}

      </Form>
    </>
  );
}

export default NewgenForm;
