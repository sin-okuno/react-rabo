import * as React from "react";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import {
  processListAsync,
  selectProcessListState,
} from "../../../redux/features/pmp/processListSlice";
import Table from "react-bootstrap/Table";
import { Button, Container, Nav } from "react-bootstrap";
import { setProcess } from "../../../redux/features/pmp/ittoSlice";
import { useHistory, withRouter } from "react-router-dom";

export const ProcessList: React.FC = () => {
  const processList = useAppSelector(selectProcessListState   );
  const dispatch = useAppDispatch();
  const history = useHistory();

  React.useEffect(() => {
    void dispatch(processListAsync(processList.knowledgeArea.id));
  }, [processList.knowledgeArea]);

  const onClickItto = (param:{id:string,name:string}) => {
    dispatch(setProcess(param));
    history.push("/pmp/IttoList");
  };

  return (
    <Container>
      <Nav className="justify-content-end">
        <Nav.Link>
          <label onClick={() => history.goBack()}>戻る</label>
        </Nav.Link>
      </Nav>
      <h2>{processList.knowledgeArea.name}</h2>
      <Table>
        <thead>
          <tr>
            <th>プロセス名称</th>
            <th>プロセス群</th>
            <th>ITTO</th>
          </tr>
        </thead>
        <tbody>
          {/* processListの後?をつけることで、nullがきても大丈夫 */}
          {processList?.value.map((process) => {
            return (
              <tr key={process.id}>
                <td>{process.processName}</td>
                <td>{process.processGroup}</td>
                <td>
                  <Button
                    variant="info"
                    onClick={() => onClickItto({id:process.id,name:process.processName})}>
                    ITTO
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};
export default withRouter(ProcessList);
