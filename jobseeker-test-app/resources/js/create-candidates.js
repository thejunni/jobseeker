import ReactDOM from "react-dom";
import { Col, Row } from "reactstrap";
import MainNavbar from "./components/Navbar";

import CreateCandidate from "./components/CreateCandidate";

const CandidateListForm = () => {
    return (
        <Col>
            <MainNavbar />
            <Row>
                <Col sm="12">
                    <CreateCandidate />
                </Col>
            </Row>
        </Col>
    );
};

export default CandidateListForm;

if (document.getElementById("create-candidate")) {
    ReactDOM.render(
        <CandidateListForm />,
        document.getElementById("create-candidate")
    );
}
