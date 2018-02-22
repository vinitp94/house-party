import React from 'react';

import Header from '../building-blocks/header';
import Footer from '../building-blocks/footer';

export default function Coupons() {
  return (
    <div className="mv-coupons">
      <Header activePage={'coupons'}></Header>

      <div className="main">
        Coupons
      </div>

      <Footer></Footer>
    </div>
  );
}
