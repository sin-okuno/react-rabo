import * as React from "react";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import {
  knowledgeAreaAsync,
  selectknowledgeArea,
} from "../../../redux/features/pmp/knowledgeAreaSlice";
import { Container, ListGroup, Nav } from "react-bootstrap";
import { Link, useHistory, withRouter } from "react-router-dom";
import { setKnowledgeAreaId } from "../../../redux/features/pmp/processListSlice";

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
      <ListGroup as="ul" numbered>
        {knowledgeAreaList?.map((knowledgeArea) => {
          return (
            <ListGroup.Item
              key={knowledgeArea.id}
              as="li">
              <Link
                className="fw-bold"
                to="/pmp/ProcessList"
                onClick={() => dispatch(setKnowledgeAreaId(knowledgeArea.id))}>
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
