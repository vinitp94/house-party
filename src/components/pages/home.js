import React from 'react';
import _ from 'lodash';

import Header  from '../building-blocks/header';
import Welcome from '../building-blocks/welcome';
import Patio   from '../building-blocks/patio';
import AkashRoom from '../building-blocks/akash-room';
import Bathroom from '../building-blocks/bathroom';
import Bar from '../building-blocks/bar';
import DanceFloor from '../building-blocks/dance-floor';
import Footer  from '../building-blocks/footer';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mv-home">
        <Header></Header>
        <Welcome></Welcome>
        <AkashRoom></AkashRoom>
        <Patio></Patio>
        <Bathroom></Bathroom>
        <Bar></Bar>
        <DanceFloor></DanceFloor>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
