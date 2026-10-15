import React from 'react'
import Breadcrumb from '../../shared/header/Breadcrumb'

const PageNotFound = () => {
  return (
  <>
    <Breadcrumb pgTitle="Page Not Found"/>
    <div className="container">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="page-not-found text-center py-5">
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                </div>
            </div>
        </div>
    </div>
  </>
  )
}

export default PageNotFound
