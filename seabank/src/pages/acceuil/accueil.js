// IMPORT CONFIG & DEPENDENCIES
import React, { } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";


// <!-- .site-wrap -->


const Accueil = () =>{
  return (

    

    <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">


    <Header/>

    <div class="site-blocks-cover overlay" style="background-image: url(images/hero_2.jpg);" data-aos="fade"
      id="home-section">

      <div class="container">
        <div class="row align-items-center justify-content-center">


          <div class="col-md-10 mt-lg-5 text-center">
            <div class="single-text owl-carousel">
              <div class="slide">
                <h1 class="text-uppercase" data-aos="fade-up">Banking Solutions</h1>
                <p class="mb-5 desc" data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Provident cupiditate suscipit, magnam libero velit esse sapiente officia inventore!
                </p>
                <div data-aos="fade-up" data-aos-delay="100">
                </div>
              </div>

              <div class="slide">
                <h1 class="text-uppercase" data-aos="fade-up">Financing Solutions</h1>
                <p class="mb-5 desc" data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Provident cupiditate suscipit, magnam libero velit esse sapiente officia inventore!
                </p>
              </div>

              <div class="slide">
                <h1 class="text-uppercase" data-aos="fade-up">Savings Accounts</h1>
                <p class="mb-5 desc" data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Provident cupiditate suscipit, magnam libero velit esse sapiente officia inventore!
                </p>
              </div>

            </div>
            <div class="border-light p-3 mb-4 grid">

              <div class="text-center">
                <a href="dashboard/pages/sign-in.html"><button type="button"
                    class="btn btn-primary">Sign-in</button></a>
                <a href="dashboard/pages/sign-up.html"><button type="button"
                    class="btn btn-primary">Sign-Up</button></a>
              </div>

            </div>
          </div>


        </div>

      </div>


      <a href="#next" class="mouse smoothscroll">
        <span class="mouse-icon">
          <span class="mouse-wheel"></span>
        </span>
      </a>
    </div>

    <div class="site-section" id="next">
      <div class="container">

        <div class="row">
          <div class="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="">
            <figure class="circle-bg">
              <img src="../../assets/img/about_2.jpg" alt="Free Website Template by Free-Template.co" class="img-fluid"/>
            </figure>
          </div>
          <div class="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="100">
            <div class="mb-4">
              <h3 class="h3 mb-4 text-black">Amortization Computation</h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            </div>

            <div class="mb-4">
              <ul class="list-unstyled ul-check success">
                <li>Officia quaerat eaque neque</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipisicing elit</li>
              </ul>

            </div>

            <div class="mb-4">
              <form action="#">
                <div class="form-group d-flex align-items-center">
                  <input type="text" class="form-control mr-2" placeholder="Enter your email"/>
                  <input type="submit" class="btn btn-primary" value="Submit Email"/>
                </div>
              </form>
            </div>



          </div>
        </div>
      </div>
    </div>


    <div class="site-section cta-big-image" id="about-section">
      <div class="container">
        <div class="row mb-5 justify-content-center">
          <div class="col-md-8 text-center">
            <h2 class="section-title mb-3" data-aos="fade-up" data-aos-delay="">About Us</h2>
            <p class="lead" data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Minus minima neque tempora reiciendis.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="">
            <figure class="circle-bg">
              <img src="./../assets/img/hero_1.jpg" alt="Free Website Template by Free-Template.co" class="img-fluid"/>
            </figure>
          </div>
          <div class="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="100">

            <h3 class="text-black mb-4">We Solve Your Financial Problem</h3>

            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
              ocean.</p>

            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

          </div>
        </div>

      </div>
    </div>


    <section class="site-section border-bottom" id="team-section">
      <div class="container">
        <div class="row mb-5 justify-content-center">
          <div class="col-md-8 text-center">
            <h2 class="section-title mb-3" data-aos="fade-up" data-aos-delay="">Meet Team</h2>
            <p class="lead" data-aos="fade-up" data-aos-delay="100">A small river named Duden flows by their place and
              supplies it with the necessary regelialia.</p>
          </div>
        </div>
        <div class="row">


          <div class="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="">
            <div class="team-member">
              <figure>
                <ul class="social">
                  <li><a href="#"><span class="icon-facebook"></span></a></li>
                  <li><a href="#"><span class="icon-twitter"></span></a></li>
                  <li><a href="#"><span class="icon-linkedin"></span></a></li>
                  <li><a href="#"><span class="icon-instagram"></span></a></li>
                </ul>
                <img src="./../assets/img/person_5.jpg" alt="Image" class="img-fluid"/>
              </figure>
              <div class="p-3">
                <h3>Kaiara Spencer</h3>
                <span class="position">Finance Manager</span>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div class="team-member">
              <figure>
                <ul class="social">
                  <li><a href="#"><span class="icon-facebook"></span></a></li>
                  <li><a href="#"><span class="icon-twitter"></span></a></li>
                  <li><a href="#"><span class="icon-linkedin"></span></a></li>
                  <li><a href="#"><span class="icon-instagram"></span></a></li>
                </ul>
                <img src="./../assets/img/person_6.jpg" alt="Image" class="img-fluid"/>
              </figure>
              <div class="p-3">
                <h3>Dave Simpson</h3>
                <span class="position">Marketing Manager</span>
              </div>
            </div>
          </div>



          <div class="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div class="team-member">
              <figure>
                <ul class="social">
                  <li><a href="#"><span class="icon-facebook"></span></a></li>
                  <li><a href="#"><span class="icon-twitter"></span></a></li>
                  <li><a href="#"><span class="icon-linkedin"></span></a></li>
                  <li><a href="#"><span class="icon-instagram"></span></a></li>
                </ul>
                <img src="./../assets/img/person_8.jpg" alt="Image" class="img-fluid"/>
              </figure>
              <div class="p-3">
                <h3>Kyla Stewart</h3>
                <span class="position">Accountant</span>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="">
            <div class="team-member">
              <figure>
                <ul class="social">
                  <li><a href="#"><span class="icon-facebook"></span></a></li>
                  <li><a href="#"><span class="icon-twitter"></span></a></li>
                  <li><a href="#"><span class="icon-linkedin"></span></a></li>
                  <li><a href="#"><span class="icon-instagram"></span></a></li>
                </ul>
                <img src="./../assets/img/person_1.jpg" alt="Image" class="img-fluid"/>
              </figure>
              <div class="p-3">
                <h3>Kaiara Spencer</h3>
                <span class="position">Accountant</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="site-section" id="gallery-section" data-aos="fade">


      <div class="container">

        <div class="row mb-3">
          <div class="col-12 text-center">
            <h2 class="section-title mb-3">Gallery</h2>
          </div>
        </div>

        <div class="row justify-content-center mb-5">
          <div id="filters" class="filters text-center button-group col-md-7">
            <button class="btn btn-primary active" data-filter="*">All</button>
            <button class="btn btn-primary" data-filter=".web">Events</button>
            <button class="btn btn-primary" data-filter=".design">Party</button>
            <button class="btn btn-primary" data-filter=".brand">Holidays</button>
          </div>
        </div>

        <div id="posts" class="row no-gutter">
          <div class="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="images/img_1.jpg" class="item-wrap fancybox">
              <span class="icon-search2"></span>
              <img class="img-fluid" src="./../assets/img/img_1.jpg"/>
            </a>
          </div>
          <div class="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="./../assets/img/img_2.jpg" class="item-wrap fancybox" data-fancybox="gallery2">
              <span class="icon-search2"></span>
              <img class="img-fluid" src="./../assets/img/img_2.jpg"/>
            </a>
          </div>

          <div class="item brand col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="images/img_3.jpg" class="item-wrap fancybox" data-fancybox="gallery2">
              <span class="icon-search2"></span>
              <img class="img-fluid" src="./../assets/img/img_3.jpg"/>
            </a>
          </div>

          <div class="item design col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">

            <a href="images/img_4.jpg" class="item-wrap fancybox" data-fancybox="gallery2">
              <span class="icon-search2"></span>
              <img class="img-fluid" src="images/img_4.jpg"/>
            </a>

          </div>

          <div class="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="images/img_5.jpg" class="item-wrap fancybox" data-fancybox="gallery2">
              <span class="icon-search2"></span>
              <img class="img-fluid" src="./../assets/img/img_5.jpg"/>
            </a>
          </div>

          <div class="item brand col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="images/img_1.jpg" class="item-wrap fancybox" data-fancybox="gallery2">
              <span class="icon-search2"></span>
              <img class="img-fluid" src="./../assets/img/img_1.jpg"/>
            </a>
          </div>

          <div class="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="images/img_2.jpg" class="item-wrap fancybox" data-fancybox="gallery2">
              <span class="icon-search2"></span>
              <img class="img-fluid" src="./../assets/img/img_2.jpg"/>
            </a>
          </div>

          <div class="item design col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="images/img_3.jpg" class="item-wrap fancybox" data-fancybox="gallery2">
              <span class="icon-search2"></span>
              <img class="img-fluid" src="./../assets/img/img_3.jpg"/>
            </a>
          </div>

          <div class="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="images/img_4.jpg" class="item-wrap fancybox" data-fancybox="gallery2">
              <span class="icon-search2"></span>
              <img class="img-fluid" src="./../assets/img/img_4.jpg"/>
            </a>
          </div>

          <div class="item design col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="images/img_5.jpg" class="item-wrap fancybox" data-fancybox="gallery2">
              <span class="icon-search2"></span>
              <img class="img-fluid" src="./../assets/img/img_5.jpg"/>
            </a>
          </div>

          <div class="item brand col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="images/img_1.jpg" class="item-wrap fancybox" data-fancybox="gallery2">
              <span class="icon-search2"></span>
              <img class="img-fluid" src="./../assets/img/img_1.jpg"/>
            </a>
          </div>

          <div class="item design col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href="images/img_2.jpg" class="item-wrap fancybox" data-fancybox="gallery2">
              <span class="icon-search2"></span>
              <img class="img-fluid" src="./../assets/img/img_2.jpg"/>
            </a>
          </div>


        </div>
      </div>

    </section>


    <section class="site-section">
      <div class="container">

        <div class="row mb-5 justify-content-center">
          <div class="col-md-7 text-center">
            <h2 class="section-title mb-3" data-aos="fade-up" data-aos-delay="">How It Works</h2>
            <p class="lead" data-aos="fade-up" data-aos-delay="100">A small river named Duden flows by their place and
              supplies it with the necessary regelialia.</p>
          </div>
        </div>

        <div class="row align-items-lg-center">
          <div class="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="">

            <div class="owl-carousel slide-one-item-alt">
              <img src="./../assets/img/slide_1.jpg" alt="Image" class="img-fluid"/>
              <img src="./../assets/img/slide_2.jpg" alt="Image" class="img-fluid"/>
              <img src="./../assets/img/slide_3.jpg" alt="Image" class="img-fluid"/>
            </div>
            <div class="custom-direction">
              <a href="#" class="custom-prev"><span><span class="icon-keyboard_backspace"></span></span></a><a href="#"
                class="custom-next"><span><span class="icon-keyboard_backspace"></span></span></a>
            </div>

          </div>
          <div class="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="100">

            <div class="owl-carousel slide-one-item-alt-text">
              <div>
                <h2 class="section-title mb-3">01. Online Applications</h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                  paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

                <p><a href="#" class="btn btn-primary mr-2 mb-2">Learn More</a></p>
              </div>
              <div>
                <h2 class="section-title mb-3">02. Get an approval</h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                  paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <p><a href="#" class="btn btn-primary mr-2 mb-2">Learn More</a></p>
              </div>
              <div>
                <h2 class="section-title mb-3">03. Card delivery</h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                  paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

                <p><a href="#" class="btn btn-primary mr-2 mb-2">Learn More</a></p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>


    <section class="site-section bg-light" id="contact-section" data-aos="fade">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center">
            <h2 class="section-title mb-3">Contact Us</h2>
          </div>
        </div>
        <div class="row mb-5">



          <div class="col-md-4 text-center">
            <p class="mb-4">
              <span class="icon-room d-block h2 text-primary"></span>
              <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
            </p>
          </div>
          <div class="col-md-4 text-center">
            <p class="mb-4">
              <span class="icon-phone d-block h2 text-primary"></span>
              <a href="#">+1 232 3235 324</a>
            </p>
          </div>
          <div class="col-md-4 text-center">
            <p class="mb-0">
              <span class="icon-mail_outline d-block h2 text-primary"></span>
              <a href="#">youremail@domain.com</a>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 mb-5">



            <form action="#" class="p-5 bg-white">

              <h2 class="h4 text-black mb-5">Contact Form</h2>

              <div class="row form-group">
                <div class="col-md-6 mb-3 mb-md-0">
                  <label class="text-black" for="fname">First Name</label>
                  <input type="text" id="fname" class="form-control"/>
                </div>
                <div class="col-md-6">
                  <label class="text-black" for="lname">Last Name</label>
                  <input type="text" id="lname" class="form-control"/>
                </div>
              </div>

              <div class="row form-group">

                <div class="col-md-12">
                  <label class="text-black" for="email">Email</label>
                  <input type="email" id="email" class="form-control"/>
                </div>
              </div>

              <div class="row form-group">

                <div class="col-md-12">
                  <label class="text-black" for="subject">Subject</label>
                  <input type="subject" id="subject" class="form-control"/>
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <label class="text-black" for="message">Message</label>
                  <textarea name="message" id="message" cols="30" rows="7" class="form-control"
                    placeholder="Write your notes or questions here..."></textarea>
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <input type="submit" value="Send Message" class="btn btn-primary btn-md text-white"/>
                </div>
              </div>


            </form>
          </div>

        </div>
      </div>
    </section>

    <Footer/>
  
 
</body>


  )
}
export default Accueil;