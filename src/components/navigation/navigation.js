import React, { Component } from "react";
import "~/components/navigation/navigation.css";

class Navigation extends Component {
  render() {
    return (
      <div className="listNavigation">
        <a href="# " className="item text-center">
          <div className="bgIcon">
            <i class="bi bi-currency-exchange"></i>
          </div>
          <p>Tôi muốn nạp tiền</p>
        </a>
        <a href="# " className="item text-center">
          <div className="bgIcon">
            <i class="bi bi-wallet2"></i>
          </div>
          <p>Tôi muốn rút tiền</p>
        </a>
        <a href="# " className="item text-center">
          <div className="bgIcon">
            <i class="bi bi-pencil-square"></i>
          </div>
          <p>Điểm danh</p>
        </a>
        <a href="# " className="item text-center">
          <div className="bgIcon">
            <i class="bi bi-bar-chart-line-fill"></i>
          </div>
          <p>Đầu tư của tôi</p>
        </a>
        <a href="# " className="item text-center">
          <div className="bgIcon">
            <i class="bi bi-volume-up-fill"></i>
          </div>
          <p>Thông báo nền tảng</p>
        </a>
        <a href="# " className="item text-center">
          <div className="bgIcon">
            <i class="bi bi-newspaper"></i>
          </div>
          <p>Tin tức nền tảng</p>
        </a>
        <a href="# " className="item text-center">
          <div className="bgIcon">
            <i class="bi bi-headset"></i>
          </div>
          <p>CSKH</p>
        </a>
        <a href="# " className="item text-center">
          <div className="bgIcon">
            <i class="bi bi-envelope-paper-heart-fill"></i>
          </div>
          <p>Mã mời</p>
        </a>
      </div>
    );
  }
}

export default Navigation;
