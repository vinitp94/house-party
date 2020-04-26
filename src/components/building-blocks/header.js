import React    from 'react';

class Header extends React.Component {
  componentDidMount() {
    $('.welcome').addClass('selected');

    $(document).scroll(() => {
      let scrollTop = $(document).scrollTop();

      ['welcome', 'akash-room', 'patio', 'game-room', 'bathroom', 'bar', 'dance-floor'].forEach((item) => {
        $('.' + item).removeClass('selected');
      });

      if (scrollTop < 1400) {
        $('.welcome').addClass('selected');
      } else if (scrollTop < 2000) {
        $('.akash-room').addClass('selected');
      } else if (scrollTop < 2600) {
        $('.patio').addClass('selected');
      } else if (scrollTop < 3200) {
        $('.bathroom').addClass('selected');
      } else if (scrollTop < 3800) {
        $('.game-room').addClass('selected');
      } else if (scrollTop < 4400) {
        $('.bar').addClass('selected');
      } else {
        $('.dance-floor').addClass('selected');
      }

      if (scrollTop < 300) {
        let scalingFactor = scrollTop / 300;

        $('.mv-header').height(100 - (50 * scalingFactor));
        $('.header-logo').height(40 - (20 * scalingFactor));
      }
    });
  }

  scrollToPosition(targetElement) {
    let positionToScroll = 0;

    if (targetElement !== 'mv-welcome') {
      positionToScroll = $('.' + targetElement).offset().top - 70;
    }

    window.scroll({
      top: positionToScroll,
      left: 0,
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <div className="mv-header">
        <div className="header-container">
          <div className="left-content">
            <img className="header-logo" src="src/assets/icons/stonks.png" alt="Logo" />
            <div>BURTHDAY PARTI</div>
          </div>

          <div className="nav">
            <div className="welcome" onClick={ this.scrollToPosition.bind(this, 'mv-welcome') }>Home</div>
            <div className="akash-room" onClick={ this.scrollToPosition.bind(this, 'mv-akash-room') }>Akash's Bedroom</div>
            <div className="patio" onClick={ this.scrollToPosition.bind(this, 'mv-patio') }>Patio</div>
            <div className="bathroom" onClick={ this.scrollToPosition.bind(this, 'mv-bathroom') }>Bathroom</div>
            <div className="game-room" onClick={ this.scrollToPosition.bind(this, 'mv-game-room') }>Game Room</div>
            <div className="bar" onClick={ this.scrollToPosition.bind(this, 'mv-bar') }>Bar</div>
            <div className="dance-floor" onClick={ this.scrollToPosition.bind(this, 'mv-dance-floor') }>Dance Floor</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
