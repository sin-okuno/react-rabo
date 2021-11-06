import * as React from "react";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import {
  ittoListAsync,
  selectIttoListState,
} from "../../../redux/features/pmp/ittoSlice";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { useHistory, withRouter } from "react-router";
import { Nav } from "react-bootstrap";
import { selectProcessListState } from "../../../redux/features/pmp/processListSlice";

export const IttoList: React.FC = () => {
  const processListState = useAppSelector(selectProcessListState);
  const ittoListState = useAppSelector(selectIttoListState);
  const dispatch = useAppDispatch();
  const history = useHistory();

  React.useEffect(() => {
    void dispatch(ittoListAsync(
      {
        knowledgeAreaId:processListState.knowledgeArea.id,
        processId:ittoListState.process.id
      }));
  }, [ittoListState.process]);

  return (
    <Container>
      <Nav className="justify-content-end">
        <Nav.Link>
          <label onClick={() => history.goBack()}>戻る</label>
        </Nav.Link>
      </Nav>
      <h2>{ittoListState.process.name}</h2>
      <Table>
        <thead>
          <tr>
            <th>インプット</th>
            <th>toolと技法</th>
            <th>アウトプット</th>
          </tr>
        </thead>
        <tbody>
          {/* ittoListの後?をつけることで、nullがきても大丈夫 */}
          {ittoListState?.value.map((process) => {
            return (
              <tr key={process.id}>
                <td>{process.input}</td>
                <td>{process.tool}</td>
                <td>{process.output}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};
export default withRouter(IttoList);
