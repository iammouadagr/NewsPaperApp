import React from 'react'
import '../style/headLineSection.css'
import img from '../480x320.jpg'; 
import HeadlineMainSection from './HeadlineMainSection'
import HeadlineBusiness from './HeadLineBusiness'

const HeadLineSection = () => {
    return (
        <div className="head-line-section">
            <div className="container-fluid paddding mb-5">
                <div className="row mx-0">
                    <div className="col-md-6 col-12 paddding animate-box" data-animate-effect="fadeIn">
                        <HeadlineMainSection />
                        
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6 col-6 paddding animate-box" data-animate-effect="fadeIn">
                                <HeadlineBusiness />
                            </div>
                            <div className="col-md-6 col-6 paddding animate-box" data-animate-effect="fadeIn">
                                <div className="article-medium"><img src="images/science-578x362.jpg" alt="img"/>
                                    <div className="article-medium content">
                                        <div className=""><a href="#" className="color_fff"> <i class="fa fa-clock-o"></i>&nbsp;&nbsp;Oct
                                            28,2017 </a></div>
                                        <div className=""><a className="article-medium link" href="#"> After all is said and done,more is said than done </a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-6 paddding animate-box" data-animate-effect="fadeIn">
                                <div className="article-medium"><img src="images/science-578x362.jpg" alt="img"/>
                                    <div className="article-medium content">
                                        <div className=""><a href="#" className="color_fff"> <i class="fa fa-clock-o"></i>&nbsp;&nbsp;Oct
                                            28,2017 </a></div>
                                        <div className=""><a className="article-medium link" href="#"> After all is said and done,more is said than done </a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-6 paddding animate-box" data-animate-effect="fadeIn">
                                <div className="article-medium"><img src="images/science-578x362.jpg" alt="img"/>
                                    <div className="article-medium content">
                                        <div className=""><a href="#" className="color_fff"> <i class="fa fa-clock-o"></i>&nbsp;&nbsp;Oct
                                            28,2017 </a></div>
                                        <div className=""><a className="article-medium link" href="#"> After all is said and done,more is said than done </a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                
            </div>
                
        </div>
        
    )
}

export default HeadLineSection
