import React, { Component } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import Tabs from "~/components/tabs/tabs";
import "~/pages/profile/profile.css";
import image from "~/assets/images//EVN-logo.9702d7df.webp";
import image1 from "~/assets/images//tải xuống.webp";
import image2 from "~/assets/images//tixian.370c1ff2.webp";
import image3 from "~/assets/images//tải xuống (1).webp";

class Profile extends Component {
  render() {
    return (
      <FooterOnly>
        <div className="profile">
          <div className="infoProfile">
            <div className="title text-center">Trung tâm cá nhân</div>
            <div className="user d-flex align-items-center justify-content-start">
              <div className="avatar">
                <img src={image} alt="" className="img-fluid" />
              </div>
              <div className="nameUser">
                <div className="name">
                  <b>092****226</b>
                </div>
                <div className="level">
                  <span>VIP0</span>
                </div>
              </div>
            </div>
            <div className="assets d-flex align-items-center justify-content-around text-center">
              <div className="itemAssets">
                <p>Tổng tài sản</p>
                <div>
                  <b>₫ 0</b>
                </div>
              </div>
              <div className="itemAssets">
                <p>Số tiền có thể rút</p>
                <div>
                  <b>₫ 10.000</b>
                </div>
              </div>
            </div>
          </div>
          <div className="listMoney d-flex align-items-center justify-content-around">
            <a href="# " className="itemMoney">
              <div className="bgImg">
                <img src={image1} alt="" className="img-fluid" />
              </div>
              <p>Nạp tiền</p>
            </a>
            <a href="# " className="itemMoney">
              <div className="bgImg">
                <img src={image2} alt="" className="img-fluid" />
              </div>
              <p>Rút tiền</p>
            </a>
            <a href="# " className="itemMoney">
              <div className="bgImg">
                <img src={image3} alt="" className="img-fluid" />
              </div>
              <p>Đăng nhập</p>
            </a>
          </div>
          <div className="listDetails">
            <a href="# " className="text-center">
              <div className="bgIcon">
                <i class="bi bi-clipboard-minus-fill"></i>
              </div>
              <p>Nhật ký</p>
            </a>
            <a href="# " className="text-center">
              <div className="bgIcon">
                <i class="bi bi-database-fill-gear"></i>
              </div>
              <p>Chi tiết tài khoản</p>
            </a>
            <a href="# " className="text-center">
              <div className="bgIcon">
                <i class="bi bi-bar-chart-line-fill"></i>
              </div>
              <p>Đầu tư của tôi</p>
            </a>
            <a href="# " className="text-center">
              <div className="bgIcon">
                <i class="bi bi-currency-exchange"></i>
              </div>
              <p>Chi tiết số tiền cá nhân</p>
            </a>
            <a href="# " className="text-center">
              <div className="bgIcon">
                <i class="bi bi-wallet2"></i>
              </div>
              <p>Phương thức thanh toán</p>
            </a>
            <a href="# " className="text-center">
              <div className="bgIcon">
                <i class="bi bi-shop-window"></i>
              </div>
              <p>Trung tâm mua sắm</p>
            </a>
            <a href="# " className="text-center">
              <div className="bgIcon">
                <i class="bi bi-person-fill-gear"></i>
              </div>
              <p>Thiết lập cá nhân</p>
            </a>
            <a href="# " className="text-center">
              <div className="bgIcon">
                <i class="bi bi-envelope-paper-heart-fill"></i>
              </div>
              <p>Mã mời</p>
            </a>
            <a href="# " className="text-center">
              <div className="bgIcon">
                <i class="bi bi-box-arrow-right"></i>
              </div>
              <p>Đăng xuất</p>
            </a>
          </div>
        </div>
      </FooterOnly>
    );
  }
}

export default Profile;
