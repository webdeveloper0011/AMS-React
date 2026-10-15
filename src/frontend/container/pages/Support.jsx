import React from 'react'
import Breadcrumb from '../../shared/header/Breadcrumb'

const Support = () => {
  return (
   <>
   <Breadcrumb pgTitle="Support" />
    <div class="main-content-area white-bg">
    {/* <!-- Welcome area Start  --> */}
    <div class="welcome-area">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div class="text-sec">
                        <div class="title-sec">
                            <h4 class="httxt">WELCOME TO AMS SUPPORT</h4>
                        </div>
                        <div class="welcome-descp">
                            <p>This page is designed to help athletes and stakeholders understand common access-related messages, resolve them efficiently, and continue their journey of structured, scientific training on the AMS Core platform.</p>
                            <p>AMS Core operates on verified institutional assignments and role-based access. Most access-related issues are resolved through official center or batch mapping rather than technical intervention.</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div class="img-area observe-element zoom-in">
                        <img src="" alt="" class="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Welcome area End  --> */}
    {/* <!-- Messages and Resolution area start  --> */}
    <div class="messages-resolution-area light-blue-bg">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="title-sec">
                        <h4 class="httxt">COMMON ACCESS MESSAGES <span>&</span> RESOLUTIONS</h4>
                    </div>
                    <div class="messages-tab-sec">
                        <ul class="nav nav-pills" id="pills-tab" role="tablist">
                            <li class="nav-item observe-element left-in" role="presentation">
                                <button class="nav-link moving-brdr active" id="pills-home-screen-tab" data-bs-toggle="pill" data-bs-target="#pills-home-screen" type="button" role="tab" aria-controls="pills-home-screen" aria-selected="true"><span>Home Screen</span></button>
                            </li>
                            <li class="nav-item observe-element bottom-up" role="presentation">
                                <button class="nav-link moving-brdr" id="pills-training-objective-tab" data-bs-toggle="pill" data-bs-target="#pills-training-objective" type="button" role="tab" aria-controls="pills-training-objective" aria-selected="false"><span>Training Objective</span></button>
                            </li>
                            <li class="nav-item observe-element bottom-up" role="presentation">
                                <button class="nav-link moving-brdr" id="pills-calories-nutrition-tab" data-bs-toggle="pill" data-bs-target="#pills-calories-nutrition" type="button" role="tab" aria-controls="pills-calories-nutrition" aria-selected="false"><span>Target Calories & Nutrition</span></button>
                            </li>
                            <li class="nav-item observe-element right-in" role="presentation">
                                <button class="nav-link moving-brdr" id="pills-report-access-tab" data-bs-toggle="pill" data-bs-target="#pills-report-access" type="button" role="tab" aria-controls="pills-report-access" aria-selected="false"><span>Reports Access</span></button>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            {/* <!-- Home Screen Start  --> */}
                            <div class="tab-pane fade show active" id="pills-home-screen" role="tabpanel" aria-labelledby="pills-home-screen-tab">
                                <div class="tab-inner home-screen-sec">
                                    <div class="row">
                                        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <div class="img-area black-img">
                                                <img src="" alt="" class="img-fluid" />
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <div class="text-sec">
                                                <div class="sml-title-sec">
                                                    <h4 class="httxt"><i class="ri-mail-lock-fill"></i> No Center Assigned</h4>
                                                    <p>This message appears when your Training Center mapping is not yet updated in the AMS system.</p>
                                                </div>
                                                <div class="to-do-lst">
                                                    <div class="mdm-title-sec">
                                                        <h4 class="httxt"><img src="images/to-do-icon.svg" alt="" />TO DOS</h4>
                                                    </div>
                                                    <ul class="comn-list">
                                                        <li>Contact your respective SAI Training Center Coach</li>
                                                        <li>Request assignment to the appropriate training batch</li>
                                                    </ul>
                                                </div>
                                                <div class="enabled-ftrs-lst">
                                                    <div class="mdm-title-sec">
                                                        <h4 class="httxt"><img src="images/enable-feature-icon.svg" alt="" />ENABLED FEATURES</h4>
                                                    </div>
                                                    <ul class="comn-list">
                                                        <li>Submit Daily Wellness Questionnaires</li>
                                                        <li>Access personalized Daily Training Plans</li>
                                                        <li>Rate sessions using Perceived Exertion (RPE)</li>
                                                        <li>View exercise-wise programs with prescribed intensity</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Training Objective Start  --> */}
                            <div class="tab-pane fade" id="pills-training-objective" role="tabpanel" aria-labelledby="pills-training-objective-tab">
                                <div class="tab-inner training-objective-sec">

                                </div>
                            </div>
                            {/* <!-- Target Calories & Nutrition Start  --> */}
                            <div class="tab-pane fade" id="pills-calories-nutrition" role="tabpanel" aria-labelledby="pills-calories-nutrition-tab">
                                <div class="tab-inner calories-nutrition-sec">

                                </div>
                            </div>
                            {/* <!-- Reports Access Start  --> */}
                            <div class="tab-pane fade" id="pills-report-access" role="tabpanel" aria-labelledby="pills-report-access-tab">
                                <div class="tab-inner report-access-sec">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Messages and Resolution area End  --> */}
    {/* <!-- Frequently Asked Questions Area Start  --> */}
     <div class="frequently-ques-area white-bg">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="title-sec">
                        <h4 class="httxt">FREQUENTLY ASKED QUESTIONS</h4>
                    </div>
                    <div class="accordion comn-accordion questns-inner" id="accordionExample">
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                 {/* <!-- QUESTION -1  --> */}
                                <div class="accordion-item questn">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            Why am I seeing “No Batch Assigned” in one or more sections?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>This means your profile has not yet been mapped to a specific batch under the respective coach or sports science professional. Once mapping is completed by the SAI Center, access is enabled automatically.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- QUESTION -3  --> */}
                                 <div class="accordion-item questn">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Do I need to reinstall the app after updates?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>No. In most cases, logging out and logging back in, or refreshing the application, is sufficient.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- QUESTION -5  --> */}
                                <div class="accordion-item questn">
                                    <h2 class="accordion-header" id="heading5">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                            Do I need to reinstall the app after updates?
                                        </button>
                                    </h2>
                                    <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>No. In most cases, logging out and logging back in, or refreshing the application, is sufficient.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                {/* <!-- QUESTION -2  --> */}
                                 <div class="accordion-item questn">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Will my data become visible after assignment?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>Yes. Once assignment is completed, relevant data such as training plans, wellness inputs, nutrition plans, or reports will appear within AMS Core.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- QUESTION -4  --> */}
                                <div class="accordion-item questn">
                                    <h2 class="accordion-header" id="headingForth">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                            Do I need to reinstall the app after updates?
                                        </button>
                                    </h2>
                                    <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="headingForth" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>No. In most cases, logging out and logging back in, or refreshing the application, is sufficient.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- QUESTION -6  --> */}
                                <div class="accordion-item questn">
                                    <h2 class="accordion-header" id="heading6">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                            Do I need to reinstall the app after updates?
                                        </button>
                                    </h2>
                                    <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>No. In most cases, logging out and logging back in, or refreshing the application, is sufficient.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
    {/* <!-- Frequently Asked Questions Area End  --> */}
</div>
   </>
  )
}

export default Support
