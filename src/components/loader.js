import React from 'react';

const Loader = () => {

    return (
        <div className="page-loader-wrapper">
          <div className="loader">
              <div className="preloader">
                  <div className="spinner-layer pl-red">
                      <div className="circle-clipper left">
                          <div className="circle"></div>
                      </div>
                      <div className="circle-clipper right">
                          <div className="circle"></div>
                      </div>
                  </div>
              </div>
              <p>Lütfen Bekleyiniz...</p>
          </div>
        </div>
    )
}

export default Loader;
