import React from 'react'

const Home = () => {
    return (
    <>
            {/* <!-- Banner Area Start  --> */}
            <div class="banner-area">
                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        {/* <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button> */}
                        {/* <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            {/* <img src="..." class="d-block w-100" alt="..."> */}
                            <div class="video-box"></div>
                            <div class="carousel-caption">
                                <h5 class="wow zoomIn"><span>ATHLETE</span><span> MANAGEMENT</span><span> SYSTEM</span></h5>
                                <p>A centralized digital platform supporting structured, scientific athlete development across the Indian
                                    sports ecosystem.</p>
                            </div>
                        </div>
                        {/* <div class="carousel-item" data-bs-interval="2000">
          <img src="..." class="d-block w-100" alt="...">
          <div class="carousel-caption">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="..." class="d-block w-100" alt="...">
          <div class="carousel-caption">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div> -->
      </div>
      {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button> */}
                    </div>
                </div>
                {/* <!-- Banner Area Start  -->    */}

                {/* <!-- Purpose Area Start  --> */}
                <div class="purpose-area ">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="purpose-inner-box white-box observe-element bottom-up">
                                    <div class="img-box">
                                        <img src="images/purpose.png" alt="" class="observe-element flip-left" />
                                    </div>
                                    <div class="content-sec">
                                        <div class="title-sec">
                                            <h4 class="httxt">
                                                PURPOSE
                                            </h4>
                                        </div>
                                        <div class="title-descrp-wt-icon">
                                            <p>
                                                <span class="icon-box">
                                                    <img src="images/icon-two-hands.svg" alt="Icon" />
                                                </span>
                                                Designed to enable consistent monitoring, planning, and evaluation of athlete development through
                                                data-led processes and standardized, role-based workflows.
                                            </p>
                                            <p>
                                                <span class="icon-box">
                                                    <img src="images/icon-two-hands.svg" alt="Icon" />
                                                </span>
                                                Built to support athletes, coaches, and sports science professionals, AMS Core brings training,
                                                wellness, nutrition, and performance data into a unified, governed system.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Purpose Area End  --> */}

                {/* <!-- Target Audience Area Start  --> */}
                <div class="target-audience-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="title-sec">
                                    <h4 class="httxt">TARGET AUDIENCE</h4>
                                    <p class="ht-sub-txt">Serves stakeholders across the structured athlete development lifecycle</p>
                                </div>
                                <div id="target-audience-slider" class="owl-carousel owl-theme audience-sldr">
                                    <div class="card">
                                        <span class="icon-box ">
                                            <img src="images/card-icon-athlete.svg" alt="" />
                                        </span>
                                        <div class="card-body">
                                            <h5 class="card-title">ATHLETES</h5>
                                            <p class="card-text">Track training, wellness, nutrition, and recovery within a structured digital environment.</p>
                                            <a href="" class="card-link">EXPLORE<i class="fa-solid fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <span class="icon-box ">
                                            <img src="images/card-icon-coach.svg" alt="" />
                                        </span>
                                        <div class="card-body">
                                            <h5 class="card-title">COACHES</h5>
                                            <p class="card-text">Plan, monitor, and evaluate training programs with athlete-specific insights.</p>
                                            <a href="" class="card-link">EXPLORE<i class="fa-solid fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <span class="icon-box ">
                                            <img src="images/card-icon-sport-science.svg" alt="" />
                                        </span>
                                        <div class="card-body">
                                            <h5 class="card-title">SPORTS SCIENCE PROFESSIONALS</h5>
                                            <p class="card-text">Conduct discipline-specific assessments & generate scientific reports.</p>
                                            <a href="" class="card-link">EXPLORE<i class="fa-solid fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <span class="icon-box ">
                                            <img src="images/card-icon-training.svg" alt="" />
                                        </span>
                                        <div class="card-body">
                                            <h5 class="card-title">TRAINING CENTERS <span>&</span>  ADMINISTRATORS</h5>
                                            <p class="card-text">Enable standardized workflows, centralized oversight, & institutional data consistency across programs.</p>
                                            <a href="" class="card-link">EXPLORE<i class="fa-solid fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Target Audience Area End  --> */}

                {/* <!-- AMS Core Area Start  --> */}
                <div class="ams-core-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="title-sec">
                                    <h4 class="httxt">WHAT AMS CORE ENABLES ?</h4>
                                    <p class="ht-sub-txt">Supports a systematic approach to athlete development through the following pillars:</p>
                                </div>
                                <div class="core-inner">

                                    <div class="ams-container">

                                        <div class="core-card top-left">
                                            <h4 class="card-title">Training <span>&</span> Load Monitoring</h4>
                                            <p>Structured session planning, perceived exertion tracking, and controlled workload validation.</p>
                                            <div class="dot"></div>
                                            <div class="line"></div>
                                        </div>
                                        <div class="core-card top-right">
                                            <h4 class="card-title">WELLNESS <span>&</span> RECOVERY</h4>
                                            <p>Daily wellness inputs aligned with training cycles and recovery phases.</p>
                                            <div class="dot"></div>
                                            <div class="line"></div>
                                        </div>
                                        <div class="core-title-circle observe-element zoom-in ">
                                            <img src="images/amc-core-logo.png" alt="" />
                                        </div>
                                        <div class="core-card bottom-left">
                                            <h4 class="card-title">NUTRITION INTEGRATION</h4>
                                            <p>Meal planning and nutrition guidance mapped to training objectives.</p>
                                            <div class="dot"></div>
                                            <div class="line"></div>
                                        </div>
                                        <div class="core-card bottom-right">
                                            <h4 class="card-title">DATA CONTINUITY</h4>
                                            <p>Longitudinal athlete records maintained across training phases and seasons.</p>
                                            <div class="dot"></div>
                                            <div class="line"></div>
                                        </div>
                                        <div class="core-card bottom-center">
                                            <h4 class="card-title">SCIENTIFIC REPORTING</h4>
                                            <p>Access to discipline-specific scientific assessments and reports generated by authorized Sports Science Professionals.</p>
                                            <div class="dot"></div>
                                            <div class="line"></div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- AMS Core Area End  --> */}

                {/* <!-- Indian Sport EcoSystem Area Start  --> */}
                <div class="sport-ecosystem-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div class="img-area">
                                    <img src="" alt="" class="img-fluid" />
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div class="inner-text-area">
                                    <div class="title-sec">
                                        <h4 class="httxt">INDIAN SPORTS ECOSYSTEM</h4>
                                    </div>
                                    <div class="ecosystem-descp">
                                        <p>AMS Core is developed with consideration for institutional workflows and governance requirements within the Indian sports ecosystem.</p>
                                        <p>It supports structured athlete mapping, role-based access, and governance-driven data handling to ensure consistency, integrity, and continuity across training centers, programs and development pathways.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Indian Sport EcoSystem Area End  --> */}

                {/* <!-- GOVERNANCE & TRUST Area Start --> */}
                <div class="gov-trust-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="gov-trust-inner white-box observe-element bottom-up">
                                    <div class="text-area">
                                        <div class="title-sec">
                                            <h4 class="httxt">GOVERNANCE <span>&</span> TRUST</h4>
                                            <p class="ht-sub-txt">AMS Core follows defined data governance principles, including:</p>
                                        </div>
                                        <div class="goven-principles">
                                            <a href="javascript:void(0)" class="govrn-princpl">
                                                <img src="images/govern-icon-1.png" alt="" class="observe-element flip-left" />
                                                <p>Role-based access control</p>
                                            </a>
                                            <a href="javascript:void(0)" class="govrn-princpl">
                                                <img src="images/govern-icon-2.png" alt="" class="observe-element flip-left" />
                                                <p>Secure data handling practices</p>
                                            </a>
                                            <a href="javascript:void(0)" class="govrn-princpl">
                                                <img src="images/govern-icon-3.png" alt="" class="observe-element flip-left" />
                                                <p>Review-based account deletion workflows</p>
                                            </a>
                                            <a href="javascript:void(0)" class="govrn-princpl">
                                                <img src="images/govern-icon-4.png" alt="" class="observe-element flip-left" />
                                                <p>Alignment with applicable institutional data policies</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="img-area">
                                        <img src="images/governance.png" alt="" class="img-fluid observe-element zoom-in" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- GOVERNANCE & TRUST Area End --> */}

                {/* <!-- Support and Assistence Area Start   --> */}
                <div class="support-assistence-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div class="img-area">
                                    <img src="images/support-assistence.png" alt="" class="img-fluid" />
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div class="inner-text-area">
                                    <div class="title-sec">
                                        <h4 class="httxt  observe-element bottom-up">SUPPORT <span>&</span> ASSISTANCE</h4>
                                    </div>
                                    <div class="title-descrp-wt-icon">
                                        <p>
                                            <span class="gradient-icon-box"></span>
                                            For access-related queries, technical support, or platform guidance, users can visit the AMS Support section or contact the official helpdesk.
                                        </p>
                                        <p>
                                            <span class="gradient-icon-box"></span>
                                            Clear resolution pathways are provided to ensure minimal disruption to athlete engagement and workflows.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Support and Assistence Area End   --> */}
            </div>
            </>
            )
}

export default Home
