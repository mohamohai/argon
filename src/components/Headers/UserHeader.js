/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const UserHeader = () => {
  const test = [{
    "name":"이종현",
    "profilepic":"ab.jpg",
    "profileback":"bc.jpg",
    "id":"ahwjs1022",
    "password":"asdasd",
    "phone":"01015151515",
    "age":"28",
    "friend":["accont","bvbbdd"],
    "status message":"i.....want......coffee...",
  }]
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage: `url(https://jonghyunportfolio.s3.ap-northeast-2.amazonaws.com/${test[0].profileback})`,
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
          
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
