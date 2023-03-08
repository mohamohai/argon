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
import { useEffect, useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

import "./pop.css";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  UncontrolledTooltip,
} from "reactstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1"); //기본에 있던거라 대기
  const [ImageModal, setImageModal] = useState(false); //모달창 대기
  const [check, setcheck] = useState(480); //나중에 push나 다른걸로 데이터 넣으면 state를 바꿔줘야 렌더링 되기 때문에 단순 랜더링용 state
  const [scrollcheck, setscrollcheck] = useState(0);
  const [data, setdata] = useState([]); //가운데 데이터 관련 항목 데이터 영역
  const [datahit, setdatahit] = useState(false); //처음에 랜더링 될 때 이걸 삼항연산자용으로 쓰기 때문에 중요 false일 때 스켈레톤 ui나 빈껍데기 몇개 넣을 예정 혹은 최신 데이터 같은거나 기본 데이터들

  const [modalShow, setModalShow] = useState(false);
  const [imgarr, setimgarr] = useState([]);
  const [imgarrcnt, setimgarrcnt] = useState(0);

  function imgarrin(inarr) {
    setimgarr(inarr);
    setModalShow(true);
  }
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="testModal">
            <span
              onClick={() => {
                goPrev(imgarr);
              }}
            >
              abc
            </span>
            <div>
              <img
                style={{ objectFit: "cover" }}
                onClick={() => setModalShow(false)}
                src={`https://jonghyunportfolio.s3.ap-northeast-2.amazonaws.com/${imgarr[imgarrcnt]}`}
              ></img>
            </div>
            <span onClick={() => gonext(imgarr)}>ab</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function goPrev(arrL) {
    if (imgarrcnt === 0) {
      setimgarrcnt(arrL.length - 1);
    } else {
      setimgarrcnt(imgarrcnt - 1);
    }
  }
  function gonext(arrL) {
    if (imgarrcnt < arrL.length - 1) {
      setimgarrcnt(imgarrcnt + 1);
    } else {
      setimgarrcnt(0);
    }
  }

  const test = [
    // 추후 api로 데이터 가져오는 거 대신해서 임시용으로 쓰는 데이터 항목
    {
      time: `${new Date()}`,
      content: "여기가 텍스트 영역입니다.",
      picsrc: ["para.png"],
      title: "제목",
    },
    {
      time: `${new Date()}`,
      content: "여기가 텍스트 영역입니다.",
      picsrc: ["mybg.jpg", "city-removebg-preview.png"],
      title: "제목",
    },
    {
      time: `${new Date()}`,
      content: "여기가 텍스트 영역입니다.",
      picsrc: ["dotart.gif"],
      title: "제목",
    },
    {
      time: `${new Date()}`,
      content: "여기가 텍스트 영역입니다.",
      picsrc: ["ab.jpg", "bc.jpg", "짱.jpg", "cd.jpg"],
      title: "제목",
    },
    {
      time: `${new Date()}`,
      content: "여기가 텍스트 영역입니다.",
      picsrc: ["짱.jpg"],
      title: "제목",
    },
    {
      time: `${new Date()}`,
      content: "여기가 텍스트 영역입니다.",
      picsrc: ["cd.jpg"],
      title: "제목",
    },
    {
      time: `${new Date()}`,
      content: "여기가 텍스트 영역입니다.",
      picsrc: ["배.jpg"],
      title: "제목",
    },
  ];

  const friend = [
    //추후 친구관련 api에 쓸 임시 데이터 항목
    {
      name: "악동",
      pic: "ab.jpg",
      sound: "뭐라고 우냐 얘는",
    },
    {
      name: "마자용",
      pic: "마자용.jpg",
      sound: "마짜아아용",
    },
    {
      name: "유리",
      pic: "짱.jpg",
      sound: "사람말 합니다.",
    },
    {
      name: "거북왕",
      pic: "거북왕.jpg",
      sound: "거부욱",
    },
    {
      name: "푸린",
      pic: "푸린.jpg",
      sound:
        "푸루루푸푸린푸루린푸루루푸푸린푸루린푸루루푸푸린푸루린푸루루푸푸린푸루린푸루루푸푸린푸루린루루푸푸린푸루린푸루루푸푸린푸루린푸루루푸푸린푸루린루루푸푸린푸루린푸루루푸푸린푸루린푸루루푸푸린푸루린루루푸푸린푸루린푸루루푸푸린푸루린푸루루푸푸린푸루린루루푸푸린푸루린푸루루푸푸린푸루린푸루루푸푸린푸루린루루푸푸린푸루린푸루루푸푸린푸루린푸루루푸푸린푸루린",
    },
  ];

  if (window.Chart) {
    //그..원래 있던거라
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };

  function testarrpush() {
    //맨 아래로 스크롤 할 경우 추가로 데이터를 들여올 때 쓰여지는 항목 set
    const arr = {
      time: `${new Date()}`,
      content: "새로 추가 된 데이터입니다.",
      picsrc: ["arrpush.png"],
      title: "새로 추가 이하 생략",
    };
    const arr2 = {
      time: `${new Date()}`,
      content: "새로 추가 된 데이터입니다.",
      picsrc: ["arrpush.png"],
      title: check,
    };

    // test.push(arr);
    // data.push(arr)

    // console.log("") 이게 바닐라버전..?
    setcheck((check) => check + 1); //이게 react 버전
    setdata((data) => [...data, arr2]); //이게 react 버전
  }

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight; //doc height
    const scrollTop = document.documentElement.scrollTop; //내위치 이거는 계속 바뀜
    const clientHeight = document.documentElement.clientHeight; //대충 클라규격 height

    if (scrollTop + clientHeight >= scrollHeight) {
      testarrpush();
    }
    setscrollcheck(check + 1);
  };

  useEffect(() => {
    setdata(test);
    setdatahit(true);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header></Header>

      <MyVerticallyCenteredModal //모달 파트
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          setimgarrcnt(0);
        }}
      />
      <Container className="mt--7 " fluid>
        <div style={{ position: "fixed", top: "50px" }}></div>
        <Row>
          <Col xl="2"></Col>
          <Col xl="6">
            {datahit
              ? data.map((row, key) => {
                  if (row.picsrc.length > 2) {
                    //이제 한 화면에 두개 나오게
                    console.log("2개 뽑기");
                  }
                  return (
                    <Col className="mb-5 mb-xl-0 " xl="12" key={key}>
                      {/*이거 크기 조절인데 어케할지 생각해보자 크게크게해서 안에 이미지를 줄이는게 낫나 아니면 보통사이즈로해서 최대한 덜 쪼개지게 하는게 맞나*/}
                      <Card className="my-2 bg-secondary shadow border-1">
                        <CardImg
                          alt="Card image cap"
                          src={`https://jonghyunportfolio.s3.ap-northeast-2.amazonaws.com/${row.picsrc[0]}`}
                          style={{
                            width: "100%",
                          }}
                          onClick={() => imgarrin(row.picsrc)}
                        />
                        <CardBody>
                          <CardTitle tag="h5">
                            Card Title
                            {row.title}
                          </CardTitle>
                          <CardText>{row.content}</CardText>
                          <CardText>
                            <small className="text-muted">{row.time}</small>
                          </CardText>
                          <i className="ni ni-favourite-28 hoverEffect"></i>
                        </CardBody>
                      </Card>
                    </Col>
                  );
                })
              : "스켈레톤 준비! 악! 같은 양식으로 이미지나 있는 부분에 저저저 저 저 뭐냐 색 해서 animation효과만 넣어서 멈춘거 아니다 보여주는 용도로"}
          </Col>
          <Col xl="1"></Col>
          <Col
            xl="3"
            className="position-fixed d-none d-xl-block"
            style={{ right: "0px", bottom: "10px" }}
          >
            <Row>추가로 뭘 넣을 영역</Row>
            <Row>
              <Table borderless>
                <tbody>
                  {friend.map((row, key) => {
                    return (
                      <tr key={key}>
                        <td>
                          <Media className="align-items-center">
                            <a
                              className="avatar rounded-circle mr-3"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={`https://jonghyunportfolio.s3.ap-northeast-2.amazonaws.com/${row.pic}`}
                                style={{ width: "50px", maxHeight: "50px" }}
                              />
                            </a>
                            <div
                              className="media-body"
                              style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              <h5 className="mt-0">{row.name}</h5>
                              {row.sound}
                            </div>
                          </Media>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Row>
          </Col>
        </Row>

        {/* 
        <Row>
          <Col className="mb-5 mb-xl-0 " xl="8">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                    <h2 className="text-white mb-0">Sales value</h2>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Month</span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2
                          })}
                          data-toggle="tab"
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                          <span className="d-none d-md-block">Week</span>
                          <span className="d-md-none">W</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                Chart
                <div className="chart">
                  <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Performance
                    </h6>
                    <h2 className="mb-0">Total orders</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                Chart
                <div className="chart">
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Page visits</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Page name</th>
                    <th scope="col">Visitors</th>
                    <th scope="col">Unique users</th>
                    <th scope="col">Bounce rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">/argon/</th>
                    <td>4,569</td>
                    <td>340</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/index.html</th>
                    <td>3,985</td>
                    <td>319</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                      46,53%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/charts.html</th>
                    <td>3,513</td>
                    <td>294</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                      36,49%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/tables.html</th>
                    <td>2,050</td>
                    <td>147</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 50,87%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/profile.html</th>
                    <td>1,795</td>
                    <td>190</td>
                    <td>
                      <i className="fas fa-arrow-down text-danger mr-3" />{" "}
                      46,53%
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Social traffic</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Referral</th>
                    <th scope="col">Visitors</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Facebook</th>
                    <td>1,480</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">60%</span>
                        <div>
                          <Progress
                            max="100"
                            value="60"
                            barClassName="bg-gradient-danger"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Facebook</th>
                    <td>5,480</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">70%</span>
                        <div>
                          <Progress
                            max="100"
                            value="70"
                            barClassName="bg-gradient-success"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Google</th>
                    <td>4,807</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">80%</span>
                        <div>
                          <Progress max="100" value="80" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Instagram</th>
                    <td>3,678</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">75%</span>
                        <div>
                          <Progress
                            max="100"
                            value="75"
                            barClassName="bg-gradient-info"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">twitter</th>
                    <td>2,645</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">30%</span>
                        <div>
                          <Progress
                            max="100"
                            value="30"
                            barClassName="bg-gradient-warning"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row> */}
      </Container>
    </>
  );
};

export default Index;
