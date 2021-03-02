<template>
  <div id="bg">
    <div class="page-wraper">
      <!-- Header -->
      <header class="site-header header-transparent text-black mo-left">
        <!-- Main Header -->
        <div class="sticky-header main-bar-wraper navbar-expand-lg">
          <div class="main-bar clearfix ">
            <div class="container clearfix">
              <!-- Website Logo -->
              <div class="logo-header mostion logo-dark">
                <a href="index.html">
                  <img src="~/assets/LandingStyle/images/logo.png" alt="">
                </a>
              </div>
              <!-- Nav Toggle Button -->
              <button class="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
              </button>
              <!-- Extra Nav -->
              <div class="extra-nav">
                <div class="extra-cell">
                  <a href="contact-us-1.html" class="btn btn-link d-inline-flex align-items-center"><i class="fa fa-angle-right m-r10"></i>Get A Quote</a>
                </div>
              </div>
              <div class="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown">
                <div class="logo-header">
                  <a href="index.html"><img src="~/assets/LandingStyle/images/logo.png" alt=""></a>
                </div>
                <ul class="nav navbar-nav navbar">
                  <li class="active">
                    <router-link to="/home/timeline"><span>Home</span></router-link>
                  </li>
                  <li>
                    <nuxt-link to="/auth/signup"><span>Sign up</span></nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/auth/login"><span>Log in</span></nuxt-link>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
        <!-- Main Header End -->
      </header>
      <!-- Header End -->

      <div class="page-content bg-white">

        <!-- Slider -->
        <div class="banner-one">
          <div class="container">
            <div class="banner-inner">
              <div class="img1"><img src="~/assets/LandingStyle/images/main-slider/slider1/pic3.png" alt=""></div>
              <div class="img2"><img src="~/assets/LandingStyle/images/main-slider/slider1/pic4.png" alt=""></div>
              <div class="row align-items-center" style="padding-top: 10px">
                <div class="col-md-6">
                  <div class="banner-content">
                    <h6 data-wow-duration="1s" data-wow-delay="0.5s" class="wow fadeInUp sub-title text-primary">We Create Ideas</h6>
                    <h1 data-wow-duration="1.2s" data-wow-delay="1s" class="wow fadeInUp ">Build Stunning <span class="text-primary">Website</span> With Slack Agency</h1>
                    <p  data-wow-duration="1.4s" data-wow-delay="1.5s" class="wow fadeInUp m-b30">Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus.</p>
                    <a  data-wow-duration="1.6s" data-wow-delay="2s" class="wow fadeInUp btn btn-link d-inline-flex align-items-center" href="about-us-1.html" ><i class="fa fa-angle-right m-r10"></i>Learn More</a>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="dz-media move-box wow fadeIn" data-wow-duration="1.6s" data-wow-delay="0.8s" >
                    <img class="move-1" src="~/assets/LandingStyle/images/move/pic1.png" alt=""/>
                    <img class="move-2" src="~/assets/LandingStyle/images/move/pic2.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Service -->
        <section class="content-inner-2" style="background: url('~assets/LandingStyle/images/background/bg2.png');">
          <div class="container">
            <div class="section-head style-1 text-center">
              <h6 class="sub-title bgl-primary m-b20 text-primary">Services</h6>
              <h2 class="title">Provide Awesome Service To You</h2>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                <div class="icon-bx-wraper style-1 box-hover text-center m-b30">
                  <div class="icon-bx-md radius bg-yellow shadow-yellow">
                    <a href="javascript:void(0);" class="icon-cell">
                      <i class="flaticon-office"></i>
                    </a>
                  </div>
                  <div class="icon-content">
                    <h4 class="dlab-title">Strategy & Research</h4>
                    <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                <div class="icon-bx-wraper style-1 box-hover active text-center m-b30">
                  <div class="icon-bx-md radius bg-red shadow-red">
                    <a href="javascript:void(0);" class="icon-cell">
                      <i class="flaticon-website"></i>
                    </a>
                  </div>
                  <div class="icon-content">
                    <h4 class="dlab-title">Web Development</h4>
                    <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                <div class="icon-bx-wraper style-1 box-hover text-center m-b30">
                  <div class="icon-bx-md radius bg-green shadow-green">
                    <a href="javascript:void(0);" class="icon-cell">
                      <i class="flaticon-pie-charts"></i>
                    </a>
                  </div>
                  <div class="icon-content">
                    <h4 class="dlab-title">Web Solution</h4>
                    <p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- About Us -->
        <section class="content-inner">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                <div class="dz-media">
                  <img src="~/assets/LandingStyle/images/about/img4.png" class="move-1" alt="">
                </div>
              </div>
              <div class="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                <div class="section-head style-1 mb-4">
                  <h6 class="sub-title bgl-primary m-b20 text-primary">About Us</h6>
                  <h2 class="title">How We Can Help You Achieve Your Business Goal</h2>
                </div>
                <p>Integer pretium molestie nisl, non blandit lectus suscipit in. Vivamus tellus diam, iaculis eget nulla sit amet, tincidunt consectetur sem. Suspendisse laoreet, quam sed faucibus feugiat, tortor velit suscipit orci, sed consectetur ante eros id urna. Mauris luctus nulla ut pharetra tempor.</p>
                <p class="m-b30">Mauris egestas eleifend sapien eu malesuada. Phasellus at metus eget sapien tristique accumsan non sit amet augue.</p>
                <img src="~/assets/LandingStyle/images/sign.png" alt="">
                <h4 class="m-b30">CEO Jhone Doe</h4>
                <a href="about-us-1.html" class="btn btn-link d-inline-flex align-items-center"><i class="fa fa-angle-right m-r10"></i>Learn More</a>
              </div>
            </div>
          </div>
        </section>
        <!-- Fetures -->
        <section class="content-inner-2">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xl-6 col-lg-7 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                <div class="section-head style-1">
                  <h6 class="sub-title bgl-primary m-b20 text-primary">Fetures</h6>
                  <h2 class="title">Our Working Process To Help Your Boost Your Business</h2>
                </div>
                <div class="section-wraper-one">
                  <div class="icon-bx-wraper style-2 left m-b30">
                    <div class="icon-bx-md radius bg-white text-red">
                      <a href="javascript:void(0);" class="icon-cell">
                        <i class="flaticon-idea"></i>
                      </a>
                    </div>
                    <div class="icon-content">
                      <h4 class="dlab-title">Idea & Analysis Gathering</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </div>
                  <div class="icon-bx-wraper style-2 left m-b30">
                    <div class="icon-bx-md radius bg-white text-yellow">
                      <a href="javascript:void(0);" class="icon-cell">
                        <i class="flaticon-line-graph"></i>
                      </a>
                    </div>
                    <div class="icon-content">
                      <h4 class="dlab-title">Designing & Developing</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    </div>
                  </div>
                  <div class="icon-bx-wraper style-2 left m-b30">
                    <div class="icon-bx-md radius bg-white text-green">
                      <a href="javascript:void(0);" class="icon-cell">
                        <i class="flaticon-rocket"></i>
                      </a>
                    </div>
                    <div class="icon-content">
                      <h4 class="dlab-title">Testing & Lunching</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-5 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                <div class="dlab-media">
                  <img src="~/assets/LandingStyle/images/about/img5.png" class="move-2" alt="">
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Projects -->
        <section class="content-inner">
          <div class="container">
            <div class="section-head style-1 text-center">
              <h6 class="sub-title bgl-primary m-b20 text-primary">Projects</h6>
              <h2 class="title">Take A Look At Our Latest Portfolio</h2>
            </div>
            <div class="site-filters style-1 clearfix center m-b40">
              <ul class="filters" data-toggle="buttons">
                <li class="btn active">
                  <input type="radio">
                  <a href="javascript:void(0);">All</a>
                </li>
                <li data-filter=".web_design" class="btn">
                  <input type="radio">
                  <a href="javascript:void(0);">Web Design</a>
                </li>
                <li data-filter=".web_development" class="btn">
                  <input type="radio">
                  <a href="javascript:void(0);">Web Development</a>
                </li>
                <li data-filter=".branding" class="btn">
                  <input type="radio">
                  <a href="javascript:void(0);">Branding</a>
                </li>
                <li data-filter=".mobile_app" class="btn">
                  <input type="radio">
                  <a href="javascript:void(0);">Mobile App</a>
                </li>
                <li data-filter=".seo" class="btn">
                  <input type="radio">
                  <a href="javascript:void(0);">SEO</a>
                </li>
              </ul>
            </div>
            <div class="clearfix">
              <ul id="masonry"  class="row lightgallery">
                <li class="card-container col-lg-4 col-md-6 col-sm-6 web_design wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                  <div class="dlab-box dlab-overlay-box style-1 m-b30">
                    <div class="dlab-media dlab-img-overlay1 primary">
                      <img src="~/assets/LandingStyle/images/projects/pic1.jpg" alt="">
                    </div>
                    <div class="dlab-info">
                      <h4 class="title"><a href="javascript:void(0);">Web Design</a></h4>
                      <span data-exthumbimage="~/assets/LandingStyle/images/projects/pic1.jpg" data-src="~/assets/LandingStyle/images/projects/pic1.jpg" class="lightimg icon-link" title="Web Design">
										<i class="fa fa-link"></i>
									</span>
                    </div>
                  </div>
                </li>
                <li class="card-container col-lg-4 col-md-6 col-sm-6 web_development wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                  <div class="dlab-box dlab-overlay-box style-1 m-b30">
                    <div class="dlab-media dlab-img-overlay1 primary">
                      <img src="~/assets/LandingStyle/images/projects/pic4.jpg" alt="">
                    </div>
                    <div class="dlab-info">
                      <h4 class="title"><a href="javascript:void(0);">Web Development</a></h4>
                      <span data-exthumbimage="~/assets/LandingStyle/images/projects/pic4.jpg" data-src="~/assets/LandingStyle/images/projects/pic4.jpg" class="lightimg icon-link" title="Web Design">
										<i class="fa fa-link"></i>
									</span>
                    </div>
                  </div>
                </li>
                <li class="card-container col-lg-4 col-md-6 col-sm-6 branding wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                  <div class="dlab-box dlab-overlay-box style-1 m-b30">
                    <div class="dlab-media dlab-img-overlay1 primary">
                      <img src="~/assets/LandingStyle/images/projects/pic2.jpg" alt="">
                    </div>
                    <div class="dlab-info">
                      <h4 class="title"><a href="javascript:void(0);">Branding</a></h4>
                      <span data-exthumbimage="~/assets/LandingStyle/images/projects/pic2.jpg" data-src="~/assets/LandingStyle/images/projects/pic2.jpg" class="lightimg icon-link" title="Web Design">
										<i class="fa fa-link"></i>
									</span>
                    </div>
                  </div>
                </li>
                <li class="card-container col-lg-4 col-md-6 col-sm-6 mobile_app wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">
                  <div class="dlab-box dlab-overlay-box style-1 m-b30">
                    <div class="dlab-media dlab-img-overlay1 primary">
                      <img src="~/assets/LandingStyle/images/projects/pic5.jpg" alt="">
                    </div>
                    <div class="dlab-info">
                      <h4 class="title"><a href="javascript:void(0);">Mobile App</a></h4>
                      <span data-exthumbimage="~/assets/LandingStyle/images/projects/pic5.jpg" data-src="~/assets/LandingStyle/images/projects/pic5.jpg" class="lightimg icon-link" title="Web Design">
										<i class="fa fa-link"></i>
									</span>
                    </div>
                  </div>
                </li>
                <li class="card-container col-lg-4 col-md-6 col-sm-6 seo wow fadeInUp" data-wow-duration="2s" data-wow-delay="1.0s">
                  <div class="dlab-box dlab-overlay-box style-1 m-b30">
                    <div class="dlab-media dlab-img-overlay1 primary">
                      <img src="~/assets/LandingStyle/images/projects/pic6.jpg" alt="">
                    </div>
                    <div class="dlab-info">
                      <h4 class="title"><a href="javascript:void(0);">Seo</a></h4>
                      <span data-exthumbimage="~/assets/LandingStyle/images/projects/pic6.jpg" data-src="~/assets/LandingStyle/images/projects/pic6.jpg" class="lightimg icon-link" title="Web Design">
										<i class="fa fa-link"></i>
									</span>
                    </div>
                  </div>
                </li>
                <li class="card-container col-lg-4 col-md-6 col-sm-6 web_development wow fadeInUp" data-wow-duration="2s" data-wow-delay="1.2s">
                  <div class="dlab-box dlab-overlay-box style-1 m-b30">
                    <div class="dlab-media dlab-img-overlay1 primary">
                      <img src="~/assets/LandingStyle/images/projects/pic3.jpg" alt="">
                    </div>
                    <div class="dlab-info">
                      <h4 class="title"><a href="javascript:void(0);">Web Development</a></h4>
                      <span data-exthumbimage="~/assets/LandingStyle/images/projects/pic3.jpg" data-src="~/assets/LandingStyle/images/projects/pic3.jpg" class="lightimg icon-link" title="Web Design">
										<i class="fa fa-link"></i>
									</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Newsletter -->
        <section class="content-inner-3 bg-primary">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-4 col-md-5 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                <div class="dlab-media m-b30">
                  <img src="~/assets/LandingStyle/images/about/img9.png" class="move-2" alt="">
                </div>
              </div>
              <div class="col-lg-8 col-md-7 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                <div class="section-head style-1 text-white">
                  <h6 class="sub-title bgl-light m-b20">Newsletter</h6>
                  <h2 class="title m-b15">Subscribe To Our Newsletter For Latest Update Of Finanical Services </h2>
                  <p>Curabitur eleifend nibh sit amet ex posuere, vel malesuada turpis pretium. Quisque et tincidunt risus, a tempor massa. Cras tempor egestas libero, eu laoreet enim pharetra non.</p>
                </div>
                <div class="dlab-subscribe style-2 max-w500">
                  <form class="dzSubscribe" action="https://samar.dexignzone.com/xhtml/script/mailchamp.php" method="post">
                    <div class="dzSubscribeMsg"></div>
                    <div class="form-group">
                      <div class="input-group">
                        <input name="dzEmail" required="required" type="email" class="form-control" placeholder="Email Address">
                        <div class="input-group-addon">
                          <button name="submit" value="Submit" type="submit" class="btn rounded-xl shadow btn-primary">Subscribe Now</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Get A Quote -->
        <section class="content-inner">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xl-6 col-lg-7 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                <div class="section-head style-1">
                  <h6 class="sub-title bgl-primary m-b20 text-primary">Contact Us</h6>
                  <h2 class="title">We Love To Help Great Companies To Enlarge Their Revenues.</h2>
                </div>
                <form class="dlab-form dzForm" method="POST" action="https://samar.dexignzone.com/xhtml/script/contact.php">
                  <div class="dzFormMsg"></div>
                  <input type="hidden" class="form-control" name="dzToDo" value="Contact" >
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"><i class="la la-user"></i></span>
                        </div>
                        <input name="dzName" type="text" required class="form-control" placeholder="First Name">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"><i class="la la-user"></i></span>
                        </div>
                        <input name="dzOther[last_name]" type="text" class="form-control" required placeholder="Last Name">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"><i class="la la-envelope"></i></span>
                        </div>
                        <input name="dzEmail" type="text" required class="form-control" placeholder="Email Address">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"><i class="la la-phone"></i></span>
                        </div>
                        <input name="dzOther[phone]" type="text" required class="form-control" placeholder="Phone No.">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"><i class="la la-file-alt"></i></span>
                        </div>
                        <input name="dzOther[project_title]" type="text" class="form-control" required placeholder="Project Title">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"><i class="la la-list"></i></span>
                        </div>
                        <select name="dzOther[choose_service]" class="form-control" required>
                          <option selected>Choose Service</option>
                          <option value="1">Web Development</option>
                          <option value="2">Web Design</option>
                          <option value="3">Strategy & Research</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"><i class="la la-sms"></i></span>
                        </div>
                        <textarea name="dzMessage" required class="form-control" placeholder="Message"></textarea>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="input-group">
                        <div class="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                        <input class="form-control d-none" style="display:none;" data-recaptcha="true" required data-error="Please complete the Captcha">
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <button name="submit" type="submit" value="Submit" class="btn btn-link d-inline-flex align-items-center"><i class="fa fa-angle-right m-r10"></i>Submit Now</button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-xl-6 col-lg-5 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                <div class="dlab-media cf-r-img">
                  <img src="~/assets/LandingStyle/images/about/img2.png" class="move-1" alt="">
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <!-- Footer -->
      <footer class="site-footer style-1" id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="footer-info wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
              <div class="row align-items-center">
                <div class="col-xl-6 col-md-4">
                  <div class="footer-logo">
                    <a href="index.html"><img src="~/assets/LandingStyle/images/logo-white.png" alt=""/></a>
                  </div>
                </div>
                <div class="col-xl-3 col-md-4 col-sm-6">
                  <div class="icon-bx-wraper left m-b10">
                    <div class="icon-lg">
                      <a href="javascript:void(0);" class="icon-cell">
                        <i class="flaticon-email"></i>
                      </a>
                    </div>
                    <div class="icon-content">
                      <p>+91 987-654-3210<br/>info@example.com</p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-4 col-sm-6">
                  <div class="icon-bx-wraper left m-b10">
                    <div class="icon-lg">
                      <a href="javascript:void(0);" class="icon-cell">
                        <i class="flaticon-location"></i>
                      </a>
                    </div>
                    <div class="icon-content">
                      <p>Marmora Road Chi Minh City, Vietnam</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-3 col-lg-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                <div class="widget widget_about">
                  <h5 class="footer-title">About Us</h5>
                  <p>Maecenas pellentesque placerat quam, in finibus nisl tincidunt sed. Aliquam magna augue, malesuada ut feugiat eget, cursus eget felis.</p>
                  <div class="dlab-social-icon">
                    <ul>
                      <li><a class="fa fa-facebook" href="javascript:void(0);"></a></li>
                      <li><a class="fa fa-instagram" href="javascript:void(0);"></a></li>
                      <li><a class="fa fa-twitter" href="javascript:void(0);"></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-2 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                <div class="widget widget_services">
                  <h5 class="footer-title">Our links</h5>
                  <ul>
                    <li><a href="javascript:void(0);">Home</a></li>
                    <li><a href="javascript:void(0);">About Us</a></li>
                    <li><a href="javascript:void(0);">Services</a></li>
                    <li><a href="javascript:void(0);">Team</a></li>
                    <li><a href="javascript:void(0);">Blog</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                <div class="widget widget_services">
                  <h5 class="footer-title">Our Services</h5>
                  <ul>
                    <li><a href="javascript:void(0);">Strategy & Research</a></li>
                    <li><a href="javascript:void(0);">Web Development</a></li>
                    <li><a href="javascript:void(0);">Web Solution</a></li>
                    <li><a href="javascript:void(0);">Digital Marketing</a></li>
                    <li><a href="javascript:void(0);">App Design </a></li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
                <div class="widget widget_services">
                  <h5 class="footer-title">Other links</h5>
                  <ul>
                    <li><a href="javascript:void(0);">FAQ</a></li>
                    <li><a href="javascript:void(0);">Portfolio</a></li>
                    <li><a href="javascript:void(0);">Privacy Policy</a></li>
                    <li><a href="javascript:void(0);">Terms & Conditions</a></li>
                    <li><a href="javascript:void(0);">Support </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- footer bottom part -->
        <div class="footer-bottom wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 text-center">
                <span class="copyright-text">Copyright © 2021 <a href="https://dexignzone.com/" target="_blank">DexignZone</a>. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <!-- Footer End -->
      <button class="scroltop icon-up" type="button"><i class="fa fa-arrow-up"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  layout:"LandingLayout/landing"
}
</script>

<style scoped>

@import '~assets/LandingStyle/css/style.css';

.content-inner, .content-inner-2, .bg-primary, .content-inner-3,.site-footer,.more-about{
  background-repeat: no-repeat;
  background-size: cover;
}

.content-inner, .content-inner-2, .bg-primary, .content-inner-3{
  background-image: url('~assets/LandingStyle/images/background/bg3.png');
  padding-top: 0px;
}

.site-footer{
  background-image: url('~assets/LandingStyle/images/background/bg14.png');
}

.banner-one{
  background-image: url('~assets/LandingStyle/images/main-slider/slider1/pic2.png');
}

</style>
