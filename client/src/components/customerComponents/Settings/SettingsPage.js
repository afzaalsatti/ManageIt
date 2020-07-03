import React, { Component } from 'react'
import './setting_page.css'
export default class SettingsPage extends Component {


constructor(props){
    super(props);
    this.state={settings:this.getGeneralSettingsPage()}
}

getProfileSettingsPage=()=>{
    return <div className="scroller settings-innerpage"><fieldset className="form-group"><text htmlFor="profileFirstname">Firstname: </text><input type="text" className="form-control" name="mysettings.profile.firstname" placeholder="Firstname" id="profileFirstname" defaultValue="Afzaal" /></fieldset><fieldset className="form-group"><text htmlFor="profileLastname">Lastname: </text><input type="text" className="form-control" name="mysettings.profile.lastname" placeholder="Lastname" id="profileLastname" defaultValue="Shoukat" /></fieldset><fieldset className="form-group"><text htmlFor="profileBiography">Biography: </text><textarea className="form-control" name="mysettings.profile.biography" placeholder="Biography" id="profileBiography" defaultValue={""} /></fieldset></div>

}
getNotificationSettingsPage=()=>{
    return <div className="scroller settings-innerpage">
      <fieldset className="form-group"><text htmlFor="profileColor">Get Personalized Notification </text>
  <select name="mysettings.general.color-theme" id="profileColor" className="form-control"><option value="all">All</option><option value="important" selected>Important</option><option value="recent" selected>Recent</option></select>
   
        </fieldset>

        
        </div>
}
getLanguageSettingsPage=()=>{
    return <div className="scroller settings-innerpage">
  <fieldset className="form-group"><text htmlFor="profileColor">Do you understand English </text>
  <select name="mysettings.general.color-theme" id="profileColor" className="form-control"><option value="yes">Yes</option><option value="no" selected>No</option></select>
   
        </fieldset>

        <fieldset className="form-group"><text htmlFor="profileColor">Select your Prefered language </text>
       <select name="mysettings.general.color-theme" id="profileColor" className="form-control"><option value="urdu">Urdu</option><option value="english">English</option><option value="esp" selected>Spenish</option></select>
   
        </fieldset>
        <fieldset className="form-group"><text htmlFor="profileColor">Do you use Slangs </text>
       <select name="mysettings.general.color-theme" id="profileColor" className="form-control"><option value="yes">Yes</option><option value="no" selected>No</option></select>
   
        </fieldset>
        </div>
}
getGeneralSettingsPage=()=>{
    return<div>
  <div>
    <div className="scroller settings-innerpage"><fieldset className="form-group"><text htmlFor="generalName">Name: </text><input type="text" className="form-control" name="mysettings.general.name" placeholder="Name" id="generalName" defaultValue="Afzaal Shoukat" /></fieldset><fieldset className="form-group"><text htmlFor="generalUsername">Username: </text><div className="input-group"><span className="input-group-addon" id="basic-addon1" /><input type="text" name="mysettings.general.username" className="form-control" placeholder="Username" aria-describedby="basic-addon1" defaultValue="Afzaal" /></div></fieldset><fieldset className="form-group"><text htmlFor="generalMail">E-Mail address: </text><input type="text" className="form-control" name="mysettings.general.email" placeholder="E-Mail Address" id="generalMail" defaultValue="afzaal.bbse3328@iiu.edu.pk" /></fieldset><fieldset className="form-group"><text htmlFor="generalPic">Picture: </text><input type="text" className="form-control" name="mysettings.general.picture" placeholder="Picture" id="generalPic" defaultValue="earth" /></fieldset><fieldset className="form-group"><text htmlFor="profileColor">Color-Theme: </text>
    
    <select name="mysettings.general.color-theme" id="profileColor" className="form-control"><option value="blue">Blue</option><option value="red">Red</option><option value="purple" selected>Purple</option><option value="orange">Orange</option></select>
    
    </fieldset></div>
  </div>
  
</div>

}

getAboutPage=()=>{
    return<div>
  <div>
    <fieldset>
    
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in viverra justo, nec tristique nisi. Curabitur id orci in sapien vehicula pretium id non mauris. Nam ac dolor gravida, rhoncus arcu sed, ultrices nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed at sapien vitae orci placerat eleifend. Vivamus auctor lorem eu leo tristique, vel efficitur eros molestie. Maecenas tempor cursus ex. Nulla in ornare justo. Ut malesuada eget orci vitae tempus. Donec facilisis consectetur efficitur. Nunc accumsan, massa mattis rutrum venenatis, odio urna placerat diam, eu porttitor erat diam et nulla. Nulla facilisi. Aenean eu dignissim enim. Vestibulum ac sodales turpis. Mauris ut nunc in nisi vulputate maximus. Integer ac interdum mauris. Fusce semper pretium ultrices. Pellentesque eu faucibus nisi. Aenean nibh nibh, pretium sed dignissim ut, ornare sed quam. Sed placerat purus feugiat, vehicula tellus a, lobortis mi. Nam in est pellentesque nunc ultrices molestie id sit amet libero. Quisque posuere sapien aliquet, tincidunt augue eget, malesuada massa. Vestibulum ac sapien malesuada urna pellentesque semper. Vivamus auctor at quam congue hendrerit. Phasellus sagittis lorem a ligula aliquet, vel posuere elit pulvinar. Aenean dapibus porta aliquet. Cras a hendrerit elit. Nullam sit amet consequat sem. Aliquam euismod, magna eu commodo imperdiet, urna nibh tincidunt quam, sit amet varius nulla nulla ac diam. Vestibulum congue ut ligula id viverra. Cras venenatis urna quis interdum mollis. Cras gravida nisl a nibh rutrum pellentesque. Duis egestas justo non suscipit posuere. Donec tincidunt, urna pellentesque tincidunt elementum, sem magna consequat metus, eget faucibus mi nulla nec tortor. Curabitur rutrum purus a augue ultricies, id blandit magna iaculis. Vestibulum placerat magna sit amet sem ultricies, feugiat pharetra tellus bibendum. Nunc commodo blandit leo sit amet dapibus. Nullam facilisis eleifend ex, a fringilla massa congue fermentum. Sed in odio lectus. Mauris est mauris, bibendum nec vehicula id, iaculis quis ex. Vivamus id massa tellus. Nunc cursus lectus nec tortor tempor, at cursus diam vestibulum. Sed pulvinar ligula non odio rhoncus condimentum et sed tellus. Etiam ac ligula venenatis, elementum diam id, sagittis ex. Ut odio massa, accumsan ac euismod et, commodo a libero. Aliquam sit amet suscipit quam. Vivamus id tellus quis leo vestibulum fermentum. Aliquam scelerisque efficitur nisi, eget tempor mi accumsan vitae. Suspendisse mollis non nunc ac egestas. Ut ullamcorper turpis neque, sit amet hendrerit est venenatis eget. Suspendisse et nisi in velit sodales finibus. Curabitur ut tristique magna, quis maximus neque. Duis congue metus sit amet elit tincidunt laoreet. Vestibulum sagittis at nibh quis sodales.
   </fieldset></div>
  </div>
  


}
loadSettings=(type)=>{
if(type==="general")
{
    
    document.getElementById("settings_right_title").innerHTML=type.charAt(0).toUpperCase() + type.slice(1);
    this.setState({
        settings:this.getGeneralSettingsPage()
    })
}
else if(type==="profile"){
    document.getElementById("settings_right_title").innerHTML=type.charAt(0).toUpperCase() + type.slice(1);
    this.setState({
        settings:this.getProfileSettingsPage()

    })
}
else if(type==="notification"){
    document.getElementById("settings_right_title").innerHTML=type.charAt(0).toUpperCase() + type.slice(1);
    this.setState({
        settings:this.getNotificationSettingsPage()

    })
}
else if(type==="language"){
    document.getElementById("settings_right_title").innerHTML=type.charAt(0).toUpperCase() + type.slice(1);
    this.setState({
        settings:this.getLanguageSettingsPage()

    })
}
else if(type==="about"){
    document.getElementById("settings_right_title").innerHTML=type.charAt(0).toUpperCase() + type.slice(1);
    this.setState({
        settings:this.getAboutPage()

    })
}
}

    render() {



        return (
            <div >
 
                <div id="settings_left" >
<text id="settings_left_title">General Settings</text>

<ul className="settings_left_list" 
onClick={(event)=>{
    event= event || window.event;
                 
                 var target =event.target || event.srcElement; 
                this.loadSettings(target.innerHTML.toLowerCase());
}} >

<li>
<text>
General
</text>

</li>



<li>
<text>
Profile
</text>
   
</li>

<li>
<text>
Notification
</text>
  
</li>
<li>
<text>
Language
</text>
  
</li>
<li>
<text>
Appearence
</text>
  
</li>
<li>
<text>About</text>
   
</li>

</ul>
                </div>

<div id="settings_right" >

    <h3 id="settings_right_title">
        General
    </h3>
                   {this.state.settings}
                </div>



<br></br>
<hr></hr>

                <div class="settings-footer">
                   
                        <button className="btn btn-default">Close</button>
                        <button style={{float:"right"}} className="btn btn-primary">Save</button>
</div>
            </div>
        )
    }
}
