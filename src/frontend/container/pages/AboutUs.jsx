import React from 'react'
import Breadcrumb from '../../shared/header/Breadcrumb'

const AboutUs = () => {
  return (
    <>
    <Breadcrumb pgTitle="About Us"/>
    <div className="container">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="about-us text-center py-5">
                    <h1>About Us</h1>
                    <p>This is the About Us page of our application. Here we provide information about our company, mission, and values.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutUs
