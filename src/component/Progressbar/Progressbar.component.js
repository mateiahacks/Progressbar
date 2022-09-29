import React, { Component } from "react";
import './Progressbar.style.css';

export default class Progressbar extends Component {
  constructor(props) {
    super(props);

    const { stepMap, currentStep } = this.props;
    console.log(this.props.currentStep);
    console.log(this.props.stepMap)

  }

  render() {
    const { stepMap, steps, currentStep } = this.props;
    return ( 
    <div className="Progressbar">
        <div className="progressline">
            {
                steps.slice(0, steps.length-1).map((key, i) => 
                
                    <div className="step">
                        <div className={steps.indexOf(currentStep) >= i ? "line line-active":"line line-inactive"}></div>
                        <div className="step-point">
                            <div className={steps.indexOf(currentStep) >= i ? "onprocess":"step-circle"}>
                                {steps.indexOf(currentStep) > i ? "✔️":i+1}
                            </div>
                            <p>{stepMap[key].title}</p>
                        </div>    
                        
                    </div>
                )
            }
            <div className="step">
                <div className={steps.indexOf(currentStep) === steps.length-1 ? "line line-active":"line line-inactive"}></div>
            </div>

        </div>
    </div>
    );
  }
}
