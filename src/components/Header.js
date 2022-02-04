import React from 'react'

export default function Header(props) {
    return (
        //  {/* Gunakan style shadow-sm atau border-bottom  */}
         <div className="bg-light py-5 mb-5 border-bottom" style={{ marginTop: '-3rem' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>{props.title}</h3>
                        {/* <p className="text-secondary"> */}
                            {props.children}
                        {/* </p> */}
                    </div>
                </div>
            </div>
        </div> 
    )
}
