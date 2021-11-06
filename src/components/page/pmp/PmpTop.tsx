import * as React from "react";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import {
  knowledgeAreaAsync,
  selectknowledgeArea,
} from "../../../redux/features/pmp/knowledgeAreaSlice";
import { Container, ListGroup, Nav } from "react-bootstrap";
import { Link, useHistory, withRouter } from "react-router-dom";
import { setKnowledgeArea } from "../../../redux/features/pmp/processListSlice";

export const PmpTop: React.FC = () => {
  const knowledgeAreaList = useAppSelector(selectknowledgeArea);
  const dispatch = useAppDispatch();
  const history = useHistory();

  React.useEffect(() => {
    void dispatch(knowledgeAreaAsync());
  }, []);

  return (
    <Container>
      <Nav className="justify-content-end">
        <Nav.Link>
          <label onClick={() => history.goBack()}>戻る</label>
        </Nav.Link>
      </Nav>
      <ListGroup as="ul"  >
        {knowledgeAreaList?.map((knowledgeArea) => {
          return (
            <ListGroup.Item
              key={knowledgeArea.id}
              as="li">
              <Link
                className="fw-bold"
                to="/pmp/ProcessList"
                onClick={() => dispatch(setKnowledgeArea({id:knowledgeArea.id,name:knowledgeArea.knowledgeArea}))}>
                {knowledgeArea.knowledgeArea}
              </Link>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Container>
  );
};
export default withRouter(PmpTop);
