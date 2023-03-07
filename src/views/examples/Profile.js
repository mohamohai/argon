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
import './Profile.css';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";

import { useEffect, useState, useMemo } from "react";


const Profile = () => {
  const [userData,setuserData]=useState([])
  const [userDataHit, setuserDataHit]=useState(false)

  const [password,setpassword]=useState("");
  const [password2,setpassword2]=useState("0");
  const [passwordcheck,setpasswordcheck]=useState(false)

  useEffect(()=>{
    console.log("패스워드변환중",password," + ",password2)
    
    if(password===password2)
      setpasswordcheck(true);
    else{
      setpasswordcheck(false);
    }
  },[password,password2])

const test = [{
  "name":"이종현",
  "myex":"이 구역이 뭘 넣어야 할 지 몰라서 빼자니 너무 비어보이고 뭘 넣자니 대충 인삿말은 위에 있고 해서 본인에 대한 간략한 소개글 같은걸 일단 넣어놓자",
  "profilepic":"ab.jpg",
  "profileback":"bc.jpg",
  "id":"ahwjs1022",
  "password":"asdasd",
  "phone":"01015151515",
  "age":"28",
  "friend":["accont","bvbbdd","토토로"],
  "write":["나는가끔눈물을흘린다","오늘 저녁은 짜파게티야"],
  "statusmessage":"i.....want......coffee...",
  "like":"120",
  "interest":["해시태그용","요리","밥","한식","일식","게임","버튜버","만화","가렌","말자하","갈리오"]
}]


const test2 = [{
  "name":"루피",
  "myex":"스포일러 조심",
  "profilepic":"cd.jpg",
  "profileback":"para.png",
  "id":"nika11",
  "password":"zxczxc",
  "phone":"0101584545",
  "age":"20",
  "friend":["조로","상디","나미","크로커다일"],
  "write":["총난타","쵸파"],
  "statusmessage":"배고파",
  "like":"180", //여긴 나중에 데이터 받는걸로 치고
  "interest":["쵸파","크로커다일","로빈","샹크스","도플라밍고",]
}]

  useEffect(()=>{
   
   // console.log(test[0].)
  },[])

  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">

                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={`https://jonghyunportfolio.s3.ap-northeast-2.amazonaws.com/${test2[0].profilepic}`}
                      />
                      
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  <Button
                    className="mr-4"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    follow
                  </Button>
                  <Button
                    className="float-right"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Message

                  </Button>
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span className="heading">{test2[0].friend.length}</span>
                        <span className="description">Friends</span>
                      </div>
                      <div>
                        <span className="heading">{test2[0].write.length}</span>
                        <span className="description">Post</span>
                      </div>
                      <div>
                        <span className="heading">{test2[0].like}</span>
                        <span className="description">Like</span>
                      </div>
                   
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h3>
                    {test2[0].name}
                    <span className="font-weight-light">, {test2[0].age}</span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin " />
                    {test2[0]["status message"]}
                  </div>
                  {test2[0].interest.map((row,key)=>{
                    return(<span className="hashtag"> <a href='#'>#{row}</a></span>)
                  })}
                  <hr className="my-4" />
                  <p>
                    {test2[0].myex}
                  </p>
               
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
              <h6 className="heading-small text-muted mb-4">About me</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>About Me</label>
                      <Input
                        className="form-control-alternative"
                        placeholder={`${test2[0].myex}`}
                        defaultValue={`${test2[0].myex}`}
                        rows="4"
                        type="textarea"
                      />
                    </FormGroup>
                    <Row>
                      <Col lg="4">
                      <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            상태 메시지
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={test2[0].statusmessage}
                            id="input-address"
                            placeholder={test2[0].statusmessage}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />

                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Username
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={`${test2[0].name}`}
                            id="input-username"
                            placeholder={`${test2[0].name}`}
                            type="text"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Phone
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            defaultValue={`${test2[0].phone}`}
                            placeholder={`${test2[0].phone}`}
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            비밀번호
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-first-name"
                            placeholder="비밀번호"
                            type="password"
                            onChange={(e)=>{setpassword(e.target.value)}}

                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            비밀번호 확인
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-last-name"
                            placeholder="비밀번호 확인"
                            type="password"
                            onChange={(e)=>{setpassword2(e.target.value)}}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="12">
                        {passwordcheck ? <span style={{color:"green"}}>비밀번호가 일치합니다.</span>:<span style={{color:"red"}}>비밀번호가 일치하지 않습니다.</span>}
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Contact information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            id="input-address"
                            placeholder="Home Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                   
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="New York"
                            id="input-city"
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="United States"
                            id="input-country"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Postal code
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-postal-code"
                            placeholder="Postal code"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
          
                  {/* Description */}
                
                </Form>
              </CardBody>
            </Card>
          </Col>
     
        </Row>
      </Container>
    </>
  );
};

export default Profile;
