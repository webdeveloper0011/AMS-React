import React from 'react'

const Breadcrumb = ({ pgTitle }) => {
    return (
        <>
            <div class="breadcrumb-area">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="breadcrumb-inner">
                                <div class="title-sec page-title">
                                    <h4 class="httxt">{pgTitle}</h4>
                                    <p class="ht-sub-txt">A centralized digital platform supporting structured.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Breadcrumb
