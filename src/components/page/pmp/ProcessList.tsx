import * as React from "react";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import {
  processListAsync,
  selectProcessList,
} from "../../../redux/features/pmp/processListSlice";
import Table from "react-bootstrap/Table";
import { Button, Container, Nav } from "react-bootstrap";
import { setProcessId } from "../../../redux/features/pmp/ittoSlice";
import { useHistory, withRouter } from "react-router-dom";

export const ProcessList: React.FC = () => {
  const processList = useAppSelector(selectProcessList);
  const dispatch = useAppDispatch();
  const history = useHistory();

  React.useEffect(() => {
    void dispatch(processListAsync(processList.knowledgeAreaId));
  }, [processList.knowledgeAreaId]);

  const onClickItto = (id: string) => {
    dispatch(setProcessId(id));
    history.push("/pmp/IttoList");
  };

  return (
    <Container>
      <Nav className="justify-content-end">
        <Nav.Link>
          <label onClick={() => history.goBack()}>戻る</label>
        </Nav.Link>
      </Nav>
      <Table>
        <thead>
          <tr>
            <th>知識エリア名</th>
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
                    onClick={() => onClickItto(process.id)}
                  >
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
