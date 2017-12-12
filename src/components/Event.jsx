import React, {Component} from 'react';

class Event extends Component {
  render() {
    return (
        <div className="event-container is-grid bor">
              
              <div className="event-img-container bor">event image container</div>
              
              <div className="event-info-container is-grid bor">
                  <div className="event-header-container is-grid bor-g">
                      <h2 className="event-title bor-g">event title</h2>
                      <h3 className="event-sub-title bor">event sub title</h3>
                  </div>
                  <div className="event-details-container is-grid">
                      <div className="event-date-container is-grid bor">Friday Jan 1, 2018</div>
                      <div className="event-time-price-container is-grid bor">
                          <div className="event-time-container is grid bor">
                              <div className="time-doors pad">Doors@8pm</div>
                              <div className="time-show pad">Show@9pm</div>
                          </div>
                          <div className="event-price-container is-grid bor">
                              <div className="event-price-adv pad">$15 advance</div>
                              <div className="event-price-door pad">$20@door</div>
                          </div>
                      </div>
                  </div>
                  <div className="event-desc-container is-grid">
                      <p className="desc">desc</p>
                  </div>            
              </div>

              <div className="event-links-container is-grid">
                  <div className="event-tic-btn is-grid bor">buy tickets</div>
                  
                  <div className="event-fb-rsvp-btn bor">rsvp fb</div>
                  
                  <div className="event-add-to-cal-btn bor">add to cal</div>
                  
                  <div className="share-btn-container is-grid bor">
                  {/* <h3 className="share-title bor">share</h3> */}
                      <div className="event-fb-share-btn bor">fb</div>
                      <div className="event-tw-share-btn bor">tw</div>
                  </div>
                  
              </div>
          </div>

    );
  }
}

export default Event;