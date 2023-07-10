import React, { Component } from 'react';
import FooterOnly from '~/layouts/FooterOnly/FooterOnly.js';
import Tabs from '~/components/tabs/tabs';
import '~/pages/blogs/blogs.css';

class Blogs extends Component {
  render() {
    return (
        <FooterOnly>
          <div className='blogs'>
            <h6>Tin tức nền tảng</h6>
            <div className='list-item'>
              <a href='#' className='item d-flex justify-content-between align-items-center'>
                <div className='item-title d-flex'>
                  <p>Tập đoàn Điện lực Việt Nam</p>
                </div>
                <span><i class="bi bi-chevron-right"></i></span>
              </a>
            </div>
          </div>
        </FooterOnly>
    );
  }
}

export default Blogs;