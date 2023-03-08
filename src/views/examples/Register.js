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
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
import { useEffect,useState } from "react";
const Register = () => {
  const [inid,setinid]=useState('');
  const [inpw,setinpw]=useState('');
  const [inpw2,setinpw2]=useState('oh hi');

  const [inbirth,setinbirth]=useState('')
  const [age,setage]=useState('')
  const [inphone,setinphone]=useState('')

  function SignUpCheck(){
    if(true){
      console.log(`
        1. 아이디 글자수 혹은 특문
        2. 비번확인코너에서 같은 비번으로 했는가
        3. 생년월일인데 이건 주민번호나 인증할 때 확인하면 될 거 같고
        4. 나이는 생년월일 받은거에서 date함수로 체크하면 되는거고
        5. 휴대폰번호는 기본 11자리 / 국가코드에 따라 달라지....나?
        6. 비번 보안을 위해 뭐 특문 정규식 같은걸로 다 막아두자 지금
      `)
    }
  }

  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Or sign up with credentials</small>
            </div>
            <Form role="form">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="id"  pattern="[0-9]" title="숫자만입력" type="text" onChange={(e)=>{setinid(e.target.value)}} />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    onChange={(e)=>{setinpw(e.target.value)}}
                    required 
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup  className=" mb-1">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password2"
                    type="password"
                    autoComplete="new-password"
                    onChange={(e)=>{setinpw2(e.target.value)}}
                    required 
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-muted font-italic mb-3">
                <small>
                  password check:{" "}
                  <span className={`text-${inpw===inpw2?"success" :"danger"} font-weight-50`}>{inpw===inpw2?"비밀번호가 일치합니다." :"비밀번호가 일치하지 않습니다."}</span>
                </small>
              </div>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-calendar-grid-58" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="date"
                    autoComplete="new-email"
                    max="9999-12-31"
                    onChange={(e)=>setinbirth(e.target.value)}
                    required 
                  />
                </InputGroup>
              </FormGroup>
              
              <Row className="my-4">
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheckRegister"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckRegister"
                    >
                      <span className="text-muted">
                        I agree with the{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>
                </Col>
              </Row>
              <div className="text-center">
                <Button className="mt-4" color="primary" type="button">
                  Create account
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
