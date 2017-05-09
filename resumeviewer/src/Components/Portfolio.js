import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
         <div className="row">
            <div className="twelve columns collapsed">
               <h1>Check Out Some of My Works.</h1>
               <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

             	   <div className="columns portfolio-item">
                     <div className="item-wrap">

                        <a href="#modal-01" title="">
                           <img alt="" src="images/portfolio/coffee.jpg" />
                           <div className="overlay">
                              <div className="portfolio-item-meta">
             					      <h5>Coffee</h5>
                                 <p>Illustrration</p>
             					   </div>
                           </div>
                           <div className="link-icon"><i className="icon-plus"></i></div>
                        </a>
                     </div>
             		</div>

                  <div className="columns portfolio-item">
                     <div className="item-wrap">

                        <a href="#modal-02" title="">
                           <img alt="" src="images/portfolio/console.jpg" />
                           <div className="overlay">
                              <div className="portfolio-item-meta">
             					      <h5>Console</h5>
                                 <p>Web Development</p>
             					   </div>
                           </div>
                           <div className="link-icon"><i className="icon-plus"></i></div>
                        </a>
                        </div>
                     </div>
             		</div>
   	      </div>
         </div>
      </section>
    );
  }
}

export default Portfolio;
