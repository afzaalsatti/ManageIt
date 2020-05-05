import React, { Component } from 'react'
import JobAds from './JobAds'
import JobDetails from './JobDetails'
export default class CareerPage extends Component {
constructor()
{
    super();
      this.showJobDetails=this.showJobDetails.bind(this);
      this.showJobs=this.showJobs.bind(this);
      this.state={component:<JobAds showJobDetails={this.showJobDetails}></JobAds>}
}
showJobs = function()
{

    
    this.setState({
      component:  <JobAds showJobDetails={this.showJobDetails}></JobAds>})
}
showJobDetails = data => e =>
{

    
    this.setState({
        component:<JobDetails data={data} showJobs={this.showJobs}></JobDetails>
    })
}

    render() {
        return (
            <div>

               {this.state.component} 

               {/* <JobDetails></JobDetails> */}




            </div>
        )
    }
}
