// IMPORT CONFIG & DEPENDENCIES
import React, { } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import BackgrounImage from "../../assets/img/hero_2.jpg"
import BackgroundAbout from "../../assets/img/about_2.jpg"
import BackgroundHero_1 from "../../assets/img/hero_1.jpg"
import Image1 from "../../assets/img/img_1.jpg"
import Image2 from "../../assets/img/img_2.jpg"
import Image3 from "../../assets/img/img_3.jpg"
import Image4 from "../../assets/img/img_4.jpg"
import Image5 from "../../assets/img/img_5.jpg"

import BackgroundImag_2 from "../../assets/img/img_2.jpg"
import BackgroundPerson1 from "../../assets/img/person_1.jpg"
import BackgroundPerson from "../../assets/img/person_2.jpg"
import BackgroundPerson6 from "../../assets/img/person_6.jpg"
import BackgroundPerson8 from "../../assets/img/person_8.jpg"
import ImageSlide1 from "../../assets/img/slide_1.jpg"
import ImageSlide2 from "../../assets/img/slide_2.jpg"
import ImageSlide3 from "../../assets/img/slide_3.jpg"

// <!-- .site-wrap -->


const Accueil = () =>{
  return (

    

    <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300">


    <Header/>

   

    <div className="site-blocks-cover overlay" style={{backgroundImage: `url(${BackgrounImage})`}} data-aos="fade"
      id="home-section">

      <div className="container">
        <div className="row align-items-center justify-content-center">


          <div className="col-md-10 mt-lg-5 text-center">
            <div className="single-text owl-carousel">
              <div className="slide">
                <h1 className="text-uppercase" data-aos="fade-up">Banking Solutions</h1>
                <p className="mb-5 desc" data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Provident cupiditate suscipit, magnam libero velit esse sapiente officia inventore!
                </p>
                <div data-aos="fade-up" data-aos-delay="100">
                </div>
              </div>

              <div className="slide">
                <h1 className="text-uppercase" data-aos="fade-up">Financing Solutions</h1>
                <p className="mb-5 desc" data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Provident cupiditate suscipit, magnam libero velit esse sapiente officia inventore!
                </p>
              </div>

              <div className="slide">
                <h1 className="text-uppercase" data-aos="fade-up">Savings Accounts</h1>
                <p className="mb-5 desc" data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Provident cupiditate suscipit, magnam libero velit esse sapiente officia inventore!
                </p>
              </div>

            </div>
            <div className="border-light p-3 mb-4 grid">

              <div className="text-center">
                <Link to='/login'><button type="button"
                    className="btn btn-primary">Sign-in</button></Link>
                <Link to='signup'><button type="button"
                    className="btn btn-primary">Sign-Up</button></Link>
              </div>

            </div>
          </div>


        </div>

      </div>


      <a href="#next" className="mouse smoothscroll">
        <span className="mouse-icon">
          <span className="mouse-wheel"></span>
        </span>
      </a>
    </div>

    <div className="site-section" id="next">
      <div className="container">

        <div className="row">
          <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="">
            <figure className="circle-bg">
              <img src={BackgroundAbout} alt="Free Website Template by Free-Template.co" className="img-fluid"/>
            </figure>
          </div>
          <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="100">
            <div className="mb-4">
              <h3 className="h3 mb-4 text-black">Amortization Computation</h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            </div>

            <div className="mb-4">
              <ul className="list-unstyled ul-check success">
                <li>Officia quaerat eaque neque</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipisicing elit</li>
              </ul>

            </div>

            <div className="mb-4">
              <form action="#">
                <div className="form-group d-flex align-items-center">
                  <input type="text" className="form-control mr-2" placeholder="Enter your email"/>
                  <input type="submit" className="btn btn-primary" value="Submit Email"/>
                </div>
              </form>
            </div>



          </div>
        </div>
      </div>
    </div>


    <div className="site-section cta-big-image" id="about-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="section-title mb-3" data-aos="fade-up" data-aos-delay="">About Us</h2>
            <p className="lead" data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Minus minima neque tempora reiciendis.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="">
            <figure className="circle-bg">
              <img src={BackgroundPerson} alt="Free Website Template by Free-Template.co" className="img-fluid"/>
            </figure>
          </div>
          <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="100">

            <h3 className="text-black mb-4">We Solve Your Financial Problem</h3>

            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
              ocean.</p>

            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

          </div>
        </div>

      </div>
    </div>


    <section className="site-section border-bottom" id="team-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="section-title mb-3" data-aos="fade-up" data-aos-delay="">Meet Team</h2>
            <p className="lead" data-aos="fade-up" data-aos-delay="100">A small river named Duden flows by their place and
              supplies it with the necessary regelialia.</p>
          </div>
        </div>
        <div className="row">


          <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="">
            <div className="team-member">
              <figure>
                <ul className="social">
                  <li><a href="#"><span className="icon-facebook"></span></a></li>
                  <li><a href="#"><span className="icon-twitter"></span></a></li>
                  <li><a href="#"><span className="icon-linkedin"></span></a></li>
                  <li><a href="#"><span className="icon-instagram"></span></a></li>
                </ul>
                <img src={BackgroundPerson1} alt="Image" className="img-fluid"/>
              </figure>
              <div className="p-3">
                <h3>Kaiara Spencer</h3>
                <span className="position">Finance Manager</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="team-member">
              <figure>
                <ul className="social">
                  <li><a href="#"><span className="icon-facebook"></span></a></li>
                  <li><a href="#"><span className="icon-twitter"></span></a></li>
                  <li><a href="#"><span className="icon-linkedin"></span></a></li>
                  <li><a href="#"><span className="icon-instagram"></span></a></li>
                </ul>
                <img src={BackgroundPerson6} alt="Image" className="img-fluid"/>
              </figure>
              <div className="p-3">
                <h3>Dave Simpson</h3>
                <span className="position">Marketing Manager</span>
              </div>
            </div>
          </div>



          <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="team-member">
              <figure>
                <ul className="social">
                  <li><a href="#"><span className="icon-facebook"></span></a></li>
                  <li><a href="#"><span className="icon-twitter"></span></a></li>
                  <li><a href="#"><span className="icon-linkedin"></span></a></li>
                  <li><a href="#"><span className="icon-instagram"></span></a></li>
                </ul>
                <img src={BackgroundPerson8} alt="Image" className="img-fluid"/>
              </figure>
              <div className="p-3">
                <h3>Kyla Stewart</h3>
                <span className="position">Accountant</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="">
            <div className="team-member">
              <figure>
                <ul className="social">
                  <li><a href="#"><span className="icon-facebook"></span></a></li>
                  <li><a href="#"><span className="icon-twitter"></span></a></li>
                  <li><a href="#"><span className="icon-linkedin"></span></a></li>
                  <li><a href="#"><span className="icon-instagram"></span></a></li>
                </ul>
                <img src={BackgroundPerson1} alt="Image" className="img-fluid"/>
              </figure>
              <div className="p-3">
                <h3>Kaiara Spencer</h3>
                <span className="position">Accountant</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="site-section" id="gallery-section" data-aos="fade">


      <div className="container">

        <div className="row mb-3">
          <div className="col-12 text-center">
            <h2 className="section-title mb-3">Gallery</h2>
          </div>
        </div>

        <div className="row justify-content-center mb-5">
          <div id="filters" className="filters text-center button-group col-md-7">
            <button className="btn btn-primary active" data-filter="*">All</button>
            <button className="btn btn-primary" data-filter=".web">Events</button>
            <button className="btn btn-primary" data-filter=".design">Party</button>
            <button className="btn btn-primary" data-filter=".brand">Holidays</button>
          </div>
        </div>

        <div id="posts" className="row no-gutter">
          <div className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="#" className="item-wrap fancybox">
              <span className="icon-search2"></span>
              <img className="img-fluid" src={Image1}/>
            </a>
          </div>
          <div className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="./../assets/img/img_2.jpg" className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src={Image2}/>
            </a>
          </div>

          <div className="item brand col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="images/img_3.jpg" className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src={Image3}/>
            </a>
          </div>

          <div className="item design col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">

            <a href="images/img_4.jpg" className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src={Image4}/>
            </a>

          </div>

          <div className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="images/img_5.jpg" className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src={Image5}/>
            </a>
          </div>

          <div className="item brand col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="images/img_1.jpg" className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src={Image1}/>
            </a>
          </div>

          <div className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="images/img_2.jpg" className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src={Image2}/>
            </a>
          </div>

          <div className="item design col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="images/img_3.jpg" className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src={Image3}/>
            </a>
          </div>

          <div className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="images/img_4.jpg" className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src={Image4}/>
            </a>
          </div>

          <div className="item design col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="images/img_5.jpg" className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src={Image5}/>
            </a>
          </div>

          <div className="item brand col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="images/img_1.jpg" className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src={Image1}/>
            </a>
          </div>

          <div className="item design col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="images/img_2.jpg" className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src={Image2}/>
            </a>
          </div>


        </div>
      </div>

    </section>


    <section className="site-section">
      <div className="container">

        <div className="row mb-5 justify-content-center">
          <div className="col-md-7 text-center">
            <h2 className="section-title mb-3" data-aos="fade-up" data-aos-delay="">How It Works</h2>
            <p className="lead" data-aos="fade-up" data-aos-delay="100">A small river named Duden flows by their place and
              supplies it with the necessary regelialia.</p>
          </div>
        </div>

        <div className="row align-items-lg-center">
          <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="">

            <div className="owl-carousel slide-one-item-alt">
              <img src={ImageSlide1} alt="Image" className="img-fluid"/>
              <img src={ImageSlide2} alt="Image" className="img-fluid"/>
              <img src={ImageSlide3} alt="Image" className="img-fluid"/>
            </div>
            <div className="custom-direction">
              <a href="#" className="custom-prev"><span><span className="icon-keyboard_backspace"></span></span></a><a href="#"
                className="custom-next"><span><span className="icon-keyboard_backspace"></span></span></a>
            </div>

          </div>
          <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="100">

            <div className="owl-carousel slide-one-item-alt-text">
              <div>
                <h2 className="section-title mb-3">01. Online Applications</h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                  paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

                <p><a href="#" className="btn btn-primary mr-2 mb-2">Learn More</a></p>
              </div>
              <div>
                <h2 className="section-title mb-3">02. Get an approval</h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                  paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <p><a href="#" className="btn btn-primary mr-2 mb-2">Learn More</a></p>
              </div>
              <div>
                <h2 className="section-title mb-3">03. Card delivery</h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                  paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

                <p><a href="#" className="btn btn-primary mr-2 mb-2">Learn More</a></p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>


    <section className="site-section bg-light" id="contact-section" data-aos="fade">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="section-title mb-3">Contact Us</h2>
          </div>
        </div>
        <div className="row mb-5">



          <div className="col-md-4 text-center">
            <p className="mb-4">
              <span className="icon-room d-block h2 text-primary"></span>
              <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
            </p>
          </div>
          <div className="col-md-4 text-center">
            <p className="mb-4">
              <span className="icon-phone d-block h2 text-primary"></span>
              <a href="#">+1 232 3235 324</a>
            </p>
          </div>
          <div className="col-md-4 text-center">
            <p className="mb-0">
              <span className="icon-mail_outline d-block h2 text-primary"></span>
              <a href="#">youremail@domain.com</a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-5">



            <form action="#" className="p-5 bg-white">

              <h2 className="h4 text-black mb-5">Contact Form</h2>

              <div className="row form-group">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="text-black" for="fname">First Name</label>
                  <input type="text" id="fname" className="form-control"/>
                </div>
                <div className="col-md-6">
                  <label className="text-black" for="lname">Last Name</label>
                  <input type="text" id="lname" className="form-control"/>
                </div>
              </div>

              <div className="row form-group">

                <div className="col-md-12">
                  <label className="text-black" for="email">Email</label>
                  <input type="email" id="email" className="form-control"/>
                </div>
              </div>

              <div className="row form-group">

                <div className="col-md-12">
                  <label className="text-black" for="subject">Subject</label>
                  <input type="subject" id="subject" className="form-control"/>
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <label className="text-black" for="message">Message</label>
                  <textarea name="message" id="message" cols="30" rows="7" className="form-control"
                    placeholder="Write your notes or questions here..."></textarea>
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <input type="submit" value="Send Message" className="btn btn-primary btn-md text-white"/>
                </div>
              </div>


            </form>
          </div>

        </div>
      </div>
    </section>

    <Footer/>
  
 
</div>


  )
}
export default Accueil;
