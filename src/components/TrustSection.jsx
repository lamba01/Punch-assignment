// import React from 'react'
// import { ReactComponent as Videoicon } from '../assets/icons/video.svg'
// import '../styles/trustsection.css'

// function TrustSection() {
//   return (
//     <div>
//         <h1>
//             How we ensure you’re in good hands.
//         </h1>
//         <p>
//             With our comprehensive screening process, 
//             we hand-pick highly skilled candidates so you can onboard them in a matter of days.
//         </p>
//         <div>
//             <div className='step-container'>
//                 <div className='video-container'><Videoicon /></div><p className='steps'><strong>Step 1:</strong>Resume Screening</p>
//             </div>
//             <div className='step-container'>
//                 <div className='video-container'><Videoicon /></div><p className='steps'><strong>Step 2:</strong>Video Interview</p>
//             </div>
//             <div className='step-container'>
//                 <div className='video-container'><Videoicon /></div><p className='steps'><strong>Step 3:</strong>Technical Evaluation</p>
//             </div>
//             <div className='step-container'>
//                 <div className='video-container'><Videoicon /></div><p className='steps'><strong>Step 4:</strong>Application Review</p>
//             </div>
//             <div className='step-container'>
//                 <div className='video-container'><Videoicon /></div><p className='steps'><strong>Step 5:</strong>Lets get to work</p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default TrustSection

import React, { useState } from 'react';
import { ReactComponent as Videoicon } from '../assets/icons/video.svg';
import '../styles/trustsection.css';

function TrustSection() {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    { id: 1, title: 'Step 1:', description: ' Resume Screening' },
    { id: 2, title: 'Step 2:', description: ' Video Interview' },
    { id: 3, title: 'Step 3:', description: ' Technical Evaluation' },
    { id: 4, title: 'Step 4:', description: ' Application Review' },
    { id: 5, title: 'Step 5:', description: ' Let\'s get to work' },
  ];

  const handleStepClick = (stepId) => {
    setActiveStep(activeStep === stepId ? null : stepId);
  };

  return (
    <div className='trust-container'>
      <h1>How we ensure you’re in good hands.</h1>
      <p>
        With our comprehensive screening process, we hand-pick highly skilled candidates so you can onboard them in a matter of days.
      </p>
      <div>
        {steps.map((step) => (
          <div
            key={step.id}
            className={`step-container ${activeStep === step.id ? 'active' : ''}`}
            onClick={() => handleStepClick(step.id)}
          >
            <div className="step-row">
              <div className={`video-container ${activeStep === step.id ? 'active' : ''}`}>
                <Videoicon className={`${activeStep === step.id ? 'icon-active' : ''}`} />
              </div>
              <p className='steps'>
                <strong>{step.title}</strong>
                {step.description}
              </p>
            </div>
            {activeStep === step.id && (
              <p className='step-text'>Candidates are assessed through skill based questions in a virtual
               setting. Allowing you to gauge personality and cultural fit.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrustSection;
