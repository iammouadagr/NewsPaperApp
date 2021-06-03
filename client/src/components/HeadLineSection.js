import React from 'react'
import '../style/headLineSection.css'
import HeadlineMainSection from './HeadlineMainSection'
import HeadlineBusiness from './HeadLineBusiness'
import HeadlineSports from './HeadLineSports'
import HeadlineHealth from './HeadlineHealth'
import HeadlineEntertainment from './HeadlineEntertainment'

const HeadLineSection = () => {
    return (
        <div className="head-line-section">
            <div className="container-fluid mt-40 mb-50">
                <div className="row mx-0">
                    <div className="col-md-6 col-12 paddding animate-box" data-animate-effect="fadeIn">
                        <HeadlineMainSection />
                        
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6 col-6 paddding animate-box" data-animate-effect="fadeIn">
                                <HeadlineHealth />
                            </div>
                            <div className="col-md-6 col-6 paddding animate-box" data-animate-effect="fadeIn">
                                 <HeadlineSports />
                            </div>
                            <div className="col-md-6 col-6 paddding animate-box" data-animate-effect="fadeIn">
                                <HeadlineEntertainment/>  
                            </div>
                            <div className="col-md-6 col-6 paddding animate-box" data-animate-effect="fadeIn">
                                <HeadlineBusiness />  
                            </div>
                        </div>
                    </div>
                </div>


                
            </div>
                
        </div>
        
    )
}

export default HeadLineSection
