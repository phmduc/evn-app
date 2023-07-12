import React, { useState , useEffect }  from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
// import Tabs from '~/components/tabs/tabs';
import { useNavigate } from "react-router-dom";
import "~/pages/authen/authen.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useDispatch, useSelector } from 'react-redux';
import { login } from "~/redux/authentication/actionCreator";
import actions from "~/redux/authentication/actions";



function Authen() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  useEffect(()=>{

  },[dispatch])
  const handleSubmit = (event) => {
    const values ={
      phone: phone,
      password: password,
    }
    dispatch(login(values, () => window.location.reload()))
  }

    return (
      <FooterOnly>
        <div className="authen">
          <div className="logo">
            <img src="image/logo.webp" />
          </div>

          <div className="form">
            <Tabs
              defaultActiveKey="đăng nhập"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="đăng nhập" title="Đăng nhập">
                <div className="list-input">
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={(e)=>{
                      setPhone(e.target.value)
                    }}
                    placeholder="Vui lòng nhập số điện thoại của bạn"
                  ></input>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e)=>{
                      setPassword(e.target.value)
                    }}
                    placeholder="Xin vui lòng nhập mật khẩu"
                  ></input>
                </div>
                <div className="list-btn">
                  <button onClick={handleSubmit}>Đăng nhập</button>
                  <button>Quên mật khẩu</button>
                  <button>Ngôn ngữ</button>
                </div>
              </Tab>

              <Tab eventKey="đăng kí" title="Đăng kí">
                <div className="list-input">
                  <input
                    type="text"
                    placeholder="Vui lòng nhập tài khoản của bạn"
                  ></input>
                  <input
                    type="password"
                    placeholder="Xin vui lòng nhập mật khẩu"
                  ></input>
                  <input
                    type="password"
                    placeholder="Xác nhận mật khẩu"
                  ></input>
                  <input
                    type="text"
                    placeholder="Vui lòng nhập mã mời của bạn"
                  ></input>
                  <input
                    type="text"
                    placeholder="Mã xác nhận"
                  ></input>
                </div>
                <div className="list-btn-res">
                  <button>Đăng ký ngay</button>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </FooterOnly>
    );
  }

export default Authen;
