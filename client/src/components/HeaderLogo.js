import React from 'react'
import logo from '../logo.png'; 

const HeaderLogo = () => {
    return (
        <div className="container-fluid">
                
                    <div className="row">
                        <div className="col-12 col-md-3 fh5co_padding_menu">
                            <img src={logo} alt="img" className="fh5co_logo_width"/>
                        </div>
                       
                    </div>
                
        </div>
    )
}

export default HeaderLogo
