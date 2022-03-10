import React from 'react'
import App from '../layouts/App'

export default function Home() {
    return (
        <App title="Kudang Koding">
            <div>
                <section className="h-100 w-100 bg-white" style={{boxSizing: 'border-box'}}>
                <style dangerouslySetInnerHTML={{__html: "\n      @import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\n\n      .header-2-2 .modal-item.modal {\n        top: 2rem;\n      }\n\n      .header-2-2 .navbar,\n      .header-2-2 .hero {\n        padding: 3rem 2rem;\n      }\n\n      .header-2-2 .navbar-light .navbar-nav .nav-link {\n        font: 300 18px/1.5rem Poppins, sans-serif;\n        color: #1d1e3c;\n        transition: 0.3s;\n      }\n\n      .header-2-2 .navbar-light .navbar-nav .nav-link:hover {\n        font: 600 18px/1.5rem Poppins, sans-serif;\n        color: #1d1e3c;\n        transition: 0.3s;\n      }\n\n      .header-2-2 .navbar-light .navbar-nav .active>.nav-link,\n      .header-2-2 .navbar-light .navbar-nav .nav-link.active,\n      .header-2-2 .navbar-light .navbar-nav .nav-link.show,\n      .header-2-2 .navbar-light .navbar-nav .show>.nav-link {\n        font-weight: 600;\n        transition: 0.3s;\n      }\n\n      .header-2-2 .navbar-light .navbar-toggler-icon {\n        background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n      }\n\n      .header-2-2 .btn:focus,\n      .header-2-2 .btn:active {\n        outline: none !important;\n      }\n\n      .header-2-2 .btn-fill {\n        font: 600 18px / normal Poppins, sans-serif;\n        background-color: #27c499;\n        border-radius: 12px;\n        padding: 12px 32px;\n        transition: 0.3s;\n      }\n\n      .header-2-2 .btn-fill:hover {\n        --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\n          0 4px 6px -2px rgba(0, 0, 0, 0.05);\n        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),\n          var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n        transition: 0.3s;\n      }\n\n      .header-2-2 .btn-no-fill {\n        font: 300 18px/1.75rem Poppins, sans-serif;\n        color: #1d1e3c;\n        padding: 12px 32px;\n        transition: 0.3s;\n      }\n\n      .header-2-2 .modal-item .modal-dialog .modal-content {\n        border-radius: 8px;\n        transition: 0.3s;\n      }\n\n      .header-2-2 .responsive li a {\n        padding: 1rem;\n        transition: 0.3s;\n      }\n\n      .header-2-2 .text-caption {\n        font: 600 0.875rem/1.625 Poppins, sans-serif;\n        margin-bottom: 2rem;\n        color: #27c499;\n      }\n\n      .header-2-2 .left-column {\n        margin-bottom: 2.75rem;\n        width: 100%;\n      }\n\n      .header-2-2 .right-column {\n        width: 100%;\n      }\n\n      .header-2-2 .title-text-big {\n        font: 600 2.25rem/2.5rem Poppins, sans-serif;\n        margin-bottom: 2rem;\n        color: #272e35;\n      }\n\n      .header-2-2 .btn-try {\n        font: 600 1rem/1.5rem Poppins, sans-serif;\n        padding: 1rem 1.5rem;\n        border-radius: 0.75rem;\n        background-color: #27c499;\n        transition: 0.3s;\n      }\n\n      .header-2-2 .btn-try:hover {\n        --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\n          0 4px 6px -2px rgba(0, 0, 0, 0.05);\n        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),\n          var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n        transition: 0.3s;\n      }\n\n      .header-2-2 .btn-outline {\n        font: 400 1rem/1.5rem Poppins, sans-serif;\n        border: 1px solid #555b61;\n        color: #555b61;\n        padding: 1rem 1.5rem;\n        border-radius: 0.75rem;\n        background-color: transparent;\n        transition: 0.3s;\n      }\n\n      .header-2-2 .btn-outline:hover {\n        border: 1px solid #27c499;\n        color: #27c499;\n        transition: 0.3s;\n      }\n\n      .header-2-2 .btn-outline:hover div path {\n        fill: #27c499;\n        transition: 0.3s;\n      }\n\n      @media (min-width: 576px) {\n        .header-2-2 .modal-item .modal-dialog {\n          max-width: 95%;\n          border-radius: 12px;\n        }\n\n        .header-2-2 .navbar {\n          padding: 3rem 2rem;\n        }\n\n        .header-2-2 .hero {\n          padding: 3rem 2rem 5rem;\n        }\n\n        .header-2-2 .title-text-big {\n          font-size: 3rem;\n          line-height: 1.2;\n        }\n      }\n\n      @media (min-width: 768px) {\n        .header-2-2 .navbar {\n          padding: 3rem 4rem;\n        }\n\n        .header-2-2 .hero {\n          padding: 3rem 4rem 5rem;\n        }\n\n        .header-2-2 .left-column {\n          margin-bottom: 3rem;\n        }\n      }\n\n      @media (min-width: 992px) {\n        .header-2-2 .navbar-expand-lg .navbar-nav .nav-link {\n          padding-right: 1.25rem;\n          padding-left: 1.25rem;\n        }\n\n        .header-2-2 .navbar {\n          padding: 3rem 6rem;\n        }\n\n        .header-2-2 .hero {\n          padding: 3rem 6rem 5rem;\n        }\n\n        .header-2-2 .left-column {\n          width: 50%;\n          margin-bottom: 0;\n        }\n\n        .header-2-2 .right-column {\n          width: 50%;\n        }\n\n        .header-2-2 .title-text-big {\n          font-size: 3.75rem;\n          line-height: 1.2;\n        }\n      }\n    " }} />
                <div className="container-xxl mx-auto p-0  position-relative header-2-2" style={{fontFamily: '"Poppins", sans-serif'}}>
                    
                    <div>
                    <div className="mx-auto d-flex flex-lg-row flex-column hero">
                        <div className="left-column d-flex flex-lg-grow-1 flex-column align-items-lg-start text-lg-start align-items-center text-center">
                        
                        <h1 className="title-text-big">
                            The best way<br className="d-lg-block d-none" />
                            to organizing your online learning
                        </h1>
                        <div className="d-flex flex-sm-row flex-column align-items-center mx-lg-0 mx-auto justify-content-center gap-3">
                            <button className="btn d-inline-flex mb-md-0 btn-try text-white">
                            Try it free
                            </button>
                            <button className="btn btn-outline">
                            <div className="d-flex align-items-center">
                                <svg className="me-2" width={13} height={12} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.9293 7.99988L6.66668 5.15788V10.8419L10.9293 7.99988ZM12.9173 8.27722L5.85134 12.9879C5.80115 13.0213 5.74283 13.0404 5.6826 13.0433C5.62238 13.0462 5.5625 13.0327 5.50934 13.0042C5.45619 12.9758 5.41175 12.9334 5.38075 12.8817C5.34976 12.83 5.33337 12.7708 5.33334 12.7105V3.28922C5.33337 3.22892 5.34976 3.16976 5.38075 3.11804C5.41175 3.06633 5.45619 3.02398 5.50934 2.99552C5.5625 2.96706 5.62238 2.95355 5.6826 2.95644C5.74283 2.95932 5.80115 2.97848 5.85134 3.01188L12.9173 7.72255C12.963 7.75299 13.0004 7.79423 13.0263 7.84261C13.0522 7.89099 13.0658 7.94501 13.0658 7.99988C13.0658 8.05475 13.0522 8.10878 13.0263 8.15716C13.0004 8.20553 12.963 8.24678 12.9173 8.27722Z" fill="#555B61" />
                                </svg>
                                Watch the video
                            </div>
                            </button>
                        </div>
                        </div>
                        {/* Right Column */}
                        <div className="right-column text-center d-flex justify-content-center pe-0">
                        <img id="img-fluid" className="h-auto mw-100" src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header2/Header-2-1.png" alt="" />
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </div>

            <div>

      
        <section className="h1-00 w-100 bg-white" style={{boxSizing: 'border-box'}}>
          <style dangerouslySetInnerHTML={{__html: "\n      @import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\n\n      .content-3-2 .btn:focus,\n      .content-3-2 .btn:active {\n        outline: none !important;\n      }\n\n      .content-3-2 {\n        padding: 5rem 2rem;\n      }\n\n      .content-3-2 .img-hero {\n        width: 100%;\n        margin-bottom: 3rem;\n      }\n\n      .content-3-2 .right-column {\n        width: 100%;\n      }\n\n      .content-3-2 .title-text {\n        font: 600 1.875rem/2.25rem Poppins, sans-serif;\n        margin-bottom: 2.5rem;\n        letter-spacing: -0.025em;\n        color: #121212;\n      }\n\n      .content-3-2 .title-caption {\n        font: 500 1.5rem/2rem Poppins, sans-serif;\n        margin-bottom: 1.25rem;\n        color: #121212;\n      }\n\n      .content-3-2 .circle {\n        font: 500 1.25rem/1.75rem Poppins, sans-serif;\n        height: 3rem;\n        width: 3rem;\n        margin-bottom: 1.25rem;\n        border-radius: 9999px;\n        background-color: #27c499;\n      }\n\n      .content-3-2 .text-caption {\n        font: 400 1rem/1.75rem Poppins, sans-serif;\n        letter-spacing: 0.025em;\n        color: #565656;\n      }\n\n      .content-3-2 .btn-learn {\n        font: 600 1rem/1.5rem Poppins, sans-serif;\n        padding: 1rem 2.5rem;\n        background-color: #27c499;\n        transition: 0.3s;\n        letter-spacing: 0.025em;\n        border-radius: 0.75rem;\n      }\n\n      .content-3-2 .btn:hover {\n        background-color: #45dbb2;\n        transition: 0.3s;\n      }\n\n      @media (min-width: 768px) {\n        .content-3-2 .title-text {\n          font: 600 2.25rem/2.5rem Poppins, sans-serif;\n        }\n      }\n\n      @media (min-width: 992px) {\n        .content-3-2 .img-hero {\n          width: 50%;\n          margin-bottom: 0;\n        }\n\n        .content-3-2 .right-column {\n          width: 50%;\n        }\n\n        .content-3-2 .circle {\n          margin-right: 1.25rem;\n          margin-bottom: 0;\n        }\n      }\n    " }} />
          <div className="content-3-2 container-xxl mx-auto  position-relative" style={{fontFamily: '"Poppins", sans-serif'}}>
            <div className="d-flex flex-lg-row flex-column align-items-center">
              
              <div className="img-hero text-center justify-content-center d-flex">
                <img id="hero" className="img-fluid" src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-1.png" alt="" />
              </div>
              
              <div className="right-column d-flex flex-column align-items-lg-start align-items-center text-lg-start text-center">
                <h2 className="title-text">3 Keys Benefit</h2>
                <ul style={{padding: 0, margin: 0}}>
                  <li className="list-unstyled" style={{marginBottom: '2rem'}}>
                    <h4 className="title-caption d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
                      <span className="circle text-white d-flex align-items-center justify-content-center">
                        1
                      </span>
                      Trusted Mentor
                    </h4>
                    <p className="text-caption">
                      We have provided highly experienced mentors<br className="d-sm-inline d-none" />
                      for several years.
                    </p>
                  </li>
                  <li className="list-unstyled" style={{marginBottom: '2rem'}}>
                    <h4 className="title-caption d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
                      <span className="circle text-white d-flex align-items-center justify-content-center">
                        2
                      </span>
                      Access Forever
                    </h4>
                    <p className="text-caption">
                      Are you busy at work so it's hard to consult? don't<br className="d-sm-inline d-none" />
                      worry because you can access anytime.
                    </p>
                  </li>
                  <li className="list-unstyled" style={{marginBottom: '4rem'}}>
                    <h4 className="title-caption d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
                      <span className="circle text-white d-flex align-items-center justify-content-center">
                        3
                      </span>
                      Halfpenny
                    </h4>
                    <p className="text-caption">
                      We provide economical packages for those of you<br className="d-sm-inline d-none" />
                      who are still in school or workers.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section> 
      </div>

      <div>
        <section className="h-100 w-100" style={{boxSizing: 'border-box', backgroundColor: '#f2f6ff'}}>
          <style dangerouslySetInnerHTML={{__html: "\n      @import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\n\n      .content-3-7 .btn:focus,\n      .content-3-7 .btn:active {\n        outline: none !important;\n      }\n\n      .content-3-7 {\n        padding: 5rem 2rem 7rem;\n      }\n\n      .content-3-7 .title-text {\n        font: 800 1.875rem/2.25rem Poppins, sans-serif;\n        letter-spacing: 0.05em;\n        margin-bottom: 0.75rem;\n        color: #2e3a53;\n      }\n\n      .content-3-7 .caption-text {\n        font: 400 1rem/1.5rem Poppins, sans-serif;\n        letter-spacing: 0.025em;\n        color: #8e8fad;\n        margin-bottom: 0;\n      }\n\n      .content-3-7 .card-item {\n        transition: 0.4s;\n        top: 0px;\n        left: 0px;\n        padding: 1rem 0;\n      }\n\n      .content-3-7 .card-item:hover {\n        top: -3px;\n        left: -3px;\n        transition: 0.4s;\n      }\n\n      .content-3-7 .card-item-outline {\n        border: 1px solid #e5ebf9;\n        padding: 2rem 2.75rem;\n        border-radius: 1rem;\n      }\n\n      .content-3-7 .price-title {\n        font: 500 1.25rem/1.75rem Poppins, sans-serif;\n        color: #141c2e;\n        letter-spacing: 0.025em;\n        margin-bottom: 0.75rem;\n      }\n\n      .content-3-7 .price-value {\n        font: 500 2.25rem/2.5rem Poppins, sans-serif;\n        letter-spacing: 0.025em;\n        margin-bottom: 0.75rem;\n        color: #2e3a53;\n      }\n\n      .content-3-7 .price-duration {\n        font: 400 1rem/1.5rem Poppins, sans-serif;\n        margin: 0.625rem;\n        color: #9e9e9e;\n      }\n\n      .content-3-7 .price-caption {\n        font: 400 1rem/1.5rem Poppins, sans-serif;\n        letter-spacing: 0.025em;\n        margin-bottom: 2.5rem;\n        color: #c3c3c8;\n      }\n\n      .content-3-7 .price-list .check {\n        font: 400 0.875rem/1.25rem Poppins, sans-serif;\n        color: #2e3a53;\n        letter-spacing: 0.025em;\n        margin-bottom: 1.75rem;\n      }\n\n      .content-3-7 .price-list .no-check {\n        font: 400 0.875rem/1.25rem Poppins, sans-serif;\n        color: #e1e1e1;\n        letter-spacing: 0.025em;\n        margin-bottom: 1.75rem;\n      }\n\n      .content-3-7 .span-icon {\n        width: 1rem;\n        height: 1rem;\n        margin-right: 0.75rem;\n      }\n\n      .content-3-7 .btn-outline {\n        border: 1px solid #2ec49c;\n        color: #2ec49c;\n        padding-top: 1rem;\n        padding-bottom: 1rem;\n        font-weight: 500;\n        letter-spacing: 0.025em;\n        border-radius: 0.5rem;\n      }\n\n      .content-3-7 .btn-outline:hover {\n        background-color: #2ec49c;\n        color: #ffffff;\n      }\n\n      .content-3-7 .btn-fill {\n        background-image: linear-gradient(rgba(91, 203, 173, 1),\n            rgba(39, 194, 153, 1));\n        padding-top: 1rem;\n        padding-bottom: 1rem;\n        font-weight: 500;\n        letter-spacing: 0.025em;\n        border-radius: 0.5rem;\n      }\n\n      .content-3-7 .btn-fill:hover {\n        background-image: linear-gradient(#29b18d, #29b18d);\n      }\n\n      @media (min-width: 576px) {\n        .content-3-7 .title-text {\n          font: 800 2.25rem/2.5rem Poppins, sans-serif;\n        }\n\n        .content-3-7 .card-item {\n          padding: 1rem;\n        }\n      }\n\n      @media (min-width: 768px) {\n        .content-3-7 {\n          padding-left: 3.5rem;\n          padding-right: 3.5rem;\n        }\n      }\n\n      @media (min-width: 992px) {\n        .content-3-7 .caption-text {\n          width: 66.666667%;\n        }\n\n        .content-3-7 .card-item {\n          width: 33.333333%;\n        }\n      }\n\n      @media (min-width: 1200px) {\n        .content-3-7 {\n          padding-left: 9rem;\n          padding-right: 9rem;\n        }\n      }\n    " }} />
          <div className="content-3-7 overflow-hidden container-xxl mx-auto position-relative" style={{fontFamily: '"Poppins", sans-serif'}}>
            <div className="container mx-auto">
              <div className="d-flex flex-column text-center w-100" style={{marginBottom: '2.25rem'}}>
                <h2 className="title-text">Pricing That Everyone Works</h2>
                <p className="caption-text mx-auto">
                  Choose one of our friendly pricing that suitable<br />
                  for your business to grow bigger
                </p>
              </div>
              <div className="d-flex flex-wrap">
                <div className="mx-auto card-item position-relative">
                  <div className="card-item-outline bg-white d-flex flex-column position-relative overflow-hidden h-100">
                    <h2 className="price-title">Startup</h2>
                    <h2 className="price-value d-flex align-items-center">
                      <span>$29</span>
                      <span className="price-duration">/Month</span>
                    </h2>
                    <p className="price-caption">
                      Suitable for those of you<br />
                      who are beginners
                    </p>
                    <div className="price-list">
                      <p className="d-flex align-items-center check">
                        <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                          <img className="img-fluid" src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-4.png" alt="" /> </span>Chat Support
                      </p>
                      <p className="d-flex align-items-center check">
                        <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                          <img className="img-fluid" src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-4.png" alt="" /> </span>Optimize Projects
                      </p>
                      <p className="d-flex align-items-center no-check">
                        <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                          <img className="img-fluid" src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-3.png" alt="" /> </span>300+ Unique Project
                      </p>
                      <p className="d-flex align-items-center no-check">
                        <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                          <img className="img-fluid" src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-3.png" alt="" /> </span>Own Analytics Platform
                      </p>
                      <p className="d-flex align-items-center no-check">
                        <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                          <img className="img-fluid" src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-3.png" alt="" /> </span>Unlimited User
                      </p>
                    </div>
                    <button className="btn btn-outline d-flex justify-content-center align-items-center w-100">
                      Choose Plan
                    </button>
                  </div>
                </div>
                <div className="mx-auto card-item position-relative">
                  <div className="card-item-outline bg-white d-flex flex-column position-relative overflow-hidden h-100">
                    <h2 className="price-title">Steady</h2>
                    <h2 className="price-value d-flex align-items-center">
                      <span>$49</span>
                      <span className="price-duration">/Month</span>
                    </h2>
                    <p className="price-caption">
                      Suitable for those of you<br />
                      who want to grow
                    </p>
                    <div className="price-list">
                      <p className="d-flex align-items-center check">
                        <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                          <img className="img-fluid" src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-4.png" alt="" /> </span>Chat Support
                      </p>
                      <p className="d-flex align-items-center check">
                        <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                          <img className="img-fluid" src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-4.png" alt="" /> </span>Optimize Projects
                      </p>
                      <p className="d-flex align-items-center check">
                        <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                          <img className="img-fluid" src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-4.png" alt="" /> </span>300+ Unique Project
                      </p>
                      <p className="d-flex align-items-center no-check">
                        <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                          <img className="img-fluid" src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-3.png" alt="" /> </span>Own Analytics Platform
                      </p>
                      <p className="d-flex align-items-center no-check">
                        <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                          <img className="img-fluid" src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-3.png" alt="" /> </span>Unlimited User
                      </p>
                    </div>
                    <button className="btn btn-outline d-flex justify-content-center align-items-center w-100">
                      Choose Plan
                    </button>
                  </div>
                </div>
                <div className="mx-auto card-item position-relative">
                  <div className="card-item-outline d-flex flex-column position-relative overflow-hidden h-100" style={{backgroundColor: '#2e3a53'}}>
                    <h2 className="price-title text-white">Enterprise</h2>
                    <h2 className="price-value d-flex align-items-center text-white">
                      <span>$99</span>
                      <span className="price-duration" style={{color: '#8997b5'}}>/Month</span>
                    </h2>
                    <p className="price-caption" style={{color: '#7987a6'}}>
                      Suitable to make your<br />
                      company grow rapidly
                    </p>
                    <div className="price-list">
                      <p className="d-flex align-items-center check text-white">
                        <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                          <img className="img-fluid" src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-6.png" alt="" /> </span>Chat Support
                      </p>
                      <p className="d-flex align-items-center check text-white">
                        <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                          <img className="img-fluid" src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-6.png" alt="" /> </span>Optimize Projects
                      </p>
                      <p className="d-flex align-items-center check text-white">
                        <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                          <img className="img-fluid" src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-6.png" alt="" /> </span>300+ Unique Project
                      </p>
                      <p className="d-flex align-items-center check text-white">
                        <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                          <img className="img-fluid" src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-6.png" alt="" /> </span>Own Analytics Platform
                      </p>
                      <p className="d-flex align-items-center check text-white">
                        <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                          <img className="img-fluid" src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-6.png" alt="" /> </span>Unlimited User
                      </p>
                    </div>
                    <button className="btn btn-fill text-white d-flex justify-content-center align-items-center w-100">
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> 
      </div>
        </App>
    )
}
