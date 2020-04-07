import React from "react";
import HomeNavBar from "../Utils/HomeNavBar";
import PricingTable from "../Utils/pricingtable/pricingtable";
import "./Home.css";
import "../../bootstrap.min.css";
import history from "../../history";
import GoogleApiWrapper from "../../AdminDashboard/BusinessLocations";
// import SimpleImageSlider from "react-simple-image-slider";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Reveal from "react-reveal/Reveal";
import Typical from "react-typical";
// import UserSession from '../../UserSession'

function goToLogin() {
  // window.alert(UserSession.getName());
  history.push("/signin");
}

class HomeComponent extends React.Component {
  render() {
    // const images = [
    //     { url: "/assets/imageSlider/test.jpg" },
    //     { url: "/assets/imageSlider/test1.jpg" },
    //     { url: "/assets/imageSlider/test3.jpg" },
    // ];
    return (
      <div style={{ backgroundColor: "white", height: "100%" }}>
        <HomeNavBar></HomeNavBar>
        {/* <div style={{justifyContent:"center"}}>
                <SimpleImageSlider
                   width={900}
                    height={504}
                    images={images}
                />
            </div> */}

        
            <video  id="videoBanner"
              autoPlay
              loop
              muted
              playsInline
              className="o-hero__background o-hero__background--video"
              poster="https://a.slack-edge.com/59662/marketing/img/homepage/video/brand-campaign_hero-poster.jpg"
            >
              <source
                src="https://a.slack-edge.com/085e3/marketing/img/homepage/video/brand-campaign_hero-video.mp4"
                type="video/mp4"
              />
            </video>
            

        <Zoom>
          <div id="intoDiv">
            <Bounce>
              <h1 className="introText" is-upgraded="">
                <span>Let's get solving</span>
              </h1>
            </Bounce>
            <br></br>
            <Typical
              className="introText"
              steps={[
                "ManageIt is Awesome!",
                1000,

                "Build scalable apps. Use Googles global, reliable infrastructure. Securely manage enterprise data. Get insights from data faster. Whatever you are solving for, Google Cloud can help.",
                500
              ]}
              loop={2}
              wrapper="p"
            />
            {/* <p className="introText">Build scalable apps. Use Google's global, reliable infrastructure. Securely manage enterprise data. Get insights from data faster. Whatever you're solving for, Google Cloud can help.</p>
             */}
          </div>
        </Zoom>
        <div id="intoDiv" style={{marginTop:"100px",float:"left",width:'100%'}}>
            <Bounce>
              <h1 className="introText"  style={{float:"left",width:'100%'}} is-upgraded="">
                <span>ManageIt replaces your tradational ERPs</span>
              </h1>
            </Bounce>
            <br></br>
            <Bounce>
              <h5 className="introText" is-upgraded="">
                <span>ManageIt provides a single solution for your daily business needs</span>
              </h5>
            </Bounce>
            <br></br>
            <Bounce>
              <h7 className="introText" is-upgraded="">
              <p >Already using ManageIt? <a href="http://localhost:3000/signin" data-clog-click="1" data-clog-ui-element="link_sign_in_cta" data-clog-ui-step="" data-clog-ui-component="inc_cta_signup" data-gtm-click="optout_signin" data-qa="cta_sign_in">Sign in</a>.</p>

              </h7>
            </Bounce>
            
            {/* <p className="introText">Build scalable apps. Use Google's global, reliable infrastructure. Securely manage enterprise data. Get insights from data faster. Whatever you're solving for, Google Cloud can help.</p>
             */}
          </div>



        <div className="introText ">
          <a
            onClick={goToLogin}
            style={{ color: "white" }}
            track-metadata-anchor_text="Go to console"
            className="erp-button"
            track-type="navigateTo"
            href="http://localhost:3000/signin"
            track-name="console"
            track-metadata-eventdetail="hero"
            track-metadata-position="banner"
            target="_blank"
          >
            Go to console
          </a>
          <a
                 href="http://localhost:3000/contactus"
            track-metadata-anchor_text="Go to console"
            
            className="erp-button "
            track-type="navigateTo"
            track-name="console"
            track-metadata-eventdetail="hero"
            track-metadata-position="banner"
            target="_blank"
          >
            Contact us
          </a>
        </div>

        <Zoom>
          <div
            id="aboutus"
            className="introText divs"
            style={{ height: "auto" }}
          >
            <p>
              <Reveal effect="fadeInUp">
                <p className="heading">Why Us</p>
              </Reveal>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
              viverra justo, nec tristique nisi. Curabitur id orci in sapien
              vehicula pretium id non mauris. Nam ac dolor gravida, rhoncus arcu
              sed, ultrices nibh. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Sed at sapien
              vitae orci placerat eleifend. Vivamus auctor lorem eu leo
              tristique, vel efficitur eros molestie. Maecenas tempor cursus ex.
              Nulla in ornare justo. Ut malesuada eget orci vitae tempus. Donec
              facilisis consectetur efficitur. Nunc accumsan, massa mattis
              rutrum venenatis, odio urna placerat diam, eu porttitor erat diam
              et nulla. Nulla facilisi. Aenean eu dignissim enim. Vestibulum ac
              sodales turpis. Mauris ut nunc in nisi vulputate maximus. Integer
              ac interdum mauris. Fusce semper pretium ultrices. Pellentesque eu
              faucibus nisi. Aenean nibh nibh, pretium sed dignissim ut, ornare
              sed quam. Sed placerat purus feugiat, vehicula tellus a, lobortis
              mi. Nam in est pellentesque nunc ultrices molestie id sit amet
              libero. Quisque posuere sapien aliquet, tincidunt augue eget,
              malesuada massa. Vestibulum ac sapien malesuada urna pellentesque
              semper. Vivamus auctor at quam congue hendrerit. Phasellus
              sagittis lorem a ligula aliquet, vel posuere elit pulvinar. Aenean
              dapibus porta aliquet. Cras a hendrerit elit. Nullam sit amet
              consequat sem. Aliquam euismod, magna eu commodo imperdiet, urna
              nibh tincidunt quam, sit amet varius nulla nulla ac diam.
              Vestibulum congue ut ligula id viverra. Cras venenatis urna quis
              interdum mollis. Cras gravida nisl a nibh rutrum pellentesque.
              Duis egestas justo non suscipit posuere. Donec tincidunt, urna
              pellentesque tincidunt elementum, sem magna consequat metus, eget
              faucibus mi nulla nec tortor. Curabitur rutrum purus a augue
              ultricies, id blandit magna iaculis. Vestibulum placerat magna sit
              amet sem ultricies, feugiat pharetra tellus bibendum. Nunc commodo
              blandit leo sit amet dapibus. Nullam facilisis eleifend ex, a
              fringilla massa congue fermentum. Sed in odio lectus. Mauris est
              mauris, bibendum nec vehicula id, iaculis quis ex. Vivamus id
              massa tellus. Nunc cursus lectus nec tortor tempor, at cursus diam
              vestibulum. Sed pulvinar ligula non odio rhoncus condimentum et
              sed tellus. Etiam ac ligula venenatis, elementum diam id, sagittis
              ex. Ut odio massa, accumsan ac euismod et, commodo a libero.
              Aliquam sit amet suscipit quam. Vivamus id tellus quis leo
              vestibulum fermentum. Aliquam scelerisque efficitur nisi, eget
              tempor mi accumsan vitae. Suspendisse mollis non nunc ac egestas.
              Ut ullamcorper turpis neque, sit amet hendrerit est venenatis
              eget. Suspendisse et nisi in velit sodales finibus. Curabitur ut
              tristique magna, quis maximus neque. Duis congue metus sit amet
              elit tincidunt laoreet. Vestibulum sagittis at nibh quis sodales.
            </p>
          </div>
        </Zoom>
        <Zoom>
          <div
            id="solutions"
            className="introText divs"
            style={{ height: "auto" }}
          >
            <p>
              <Reveal effect="fadeInUp">
                <p className="heading">Our Provided Solutions</p>
              </Reveal>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
              viverra justo, nec tristique nisi. Curabitur id orci in sapien
              vehicula pretium id non mauris. Nam ac dolor gravida, rhoncus arcu
              sed, ultrices nibh. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Sed at sapien
              vitae orci placerat eleifend. Vivamus auctor lorem eu leo
              tristique, vel efficitur eros molestie. Maecenas tempor cursus ex.
              Nulla in ornare justo. Ut malesuada eget orci vitae tempus. Donec
              facilisis consectetur efficitur. Nunc accumsan, massa mattis
              rutrum venenatis, odio urna placerat diam, eu porttitor erat diam
              et nulla. Nulla facilisi. Aenean eu dignissim enim. Vestibulum ac
              sodales turpis. Mauris ut nunc in nisi vulputate maximus. Integer
              ac interdum mauris. Fusce semper pretium ultrices. Pellentesque eu
              faucibus nisi. Aenean nibh nibh, pretium sed dignissim ut, ornare
              sed quam. Sed placerat purus feugiat, vehicula tellus a, lobortis
              mi. Nam in est pellentesque nunc ultrices molestie id sit amet
              libero. Quisque posuere sapien aliquet, tincidunt augue eget,
              malesuada massa. Vestibulum ac sapien malesuada urna pellentesque
              semper. Vivamus auctor at quam congue hendrerit. Phasellus
              sagittis lorem a ligula aliquet, vel posuere elit pulvinar. Aenean
              dapibus porta aliquet. Cras a hendrerit elit. Nullam sit amet
              consequat sem. Aliquam euismod, magna eu commodo imperdiet, urna
              nibh tincidunt quam, sit amet varius nulla nulla ac diam.
              Vestibulum congue ut ligula id viverra. Cras venenatis urna quis
              interdum mollis. Cras gravida nisl a nibh rutrum pellentesque.
              Duis egestas justo non suscipit posuere. Donec tincidunt, urna
              pellentesque tincidunt elementum, sem magna consequat metus, eget
              faucibus mi nulla nec tortor. Curabitur rutrum purus a augue
              ultricies, id blandit magna iaculis. Vestibulum placerat magna sit
              amet sem ultricies, feugiat pharetra tellus bibendum. Nunc commodo
              blandit leo sit amet dapibus. Nullam facilisis eleifend ex, a
              fringilla massa congue fermentum. Sed in odio lectus. Mauris est
              mauris, bibendum nec vehicula id, iaculis quis ex. Vivamus id
              massa tellus. Nunc cursus lectus nec tortor tempor, at cursus diam
              vestibulum. Sed pulvinar ligula non odio rhoncus condimentum et
              sed tellus. Etiam ac ligula venenatis, elementum diam id, sagittis
              ex. Ut odio massa, accumsan ac euismod et, commodo a libero.
              Aliquam sit amet suscipit quam. Vivamus id tellus quis leo
              vestibulum fermentum. Aliquam scelerisque efficitur nisi, eget
              tempor mi accumsan vitae. Suspendisse mollis non nunc ac egestas.
              Ut ullamcorper turpis neque, sit amet hendrerit est venenatis
              eget. Suspendisse et nisi in velit sodales finibus. Curabitur ut
              tristique magna, quis maximus neque. Duis congue metus sit amet
              elit tincidunt laoreet. Vestibulum sagittis at nibh quis sodales.
            </p>
          </div>
        </Zoom>
        <Zoom>
          <div
            id="products"
            className="introText divs"
            style={{ height: "auto" }}
          >
            <p>
              <Reveal effect="fadeInUp">
                <p className="heading">Our Products</p>
              </Reveal>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
              viverra justo, nec tristique nisi. Curabitur id orci in sapien
              vehicula pretium id non mauris. Nam ac dolor gravida, rhoncus arcu
              sed, ultrices nibh. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Sed at sapien
              vitae orci placerat eleifend. Vivamus auctor lorem eu leo
              tristique, vel efficitur eros molestie. Maecenas tempor cursus ex.
              Nulla in ornare justo. Ut malesuada eget orci vitae tempus. Donec
              facilisis consectetur efficitur. Nunc accumsan, massa mattis
              rutrum venenatis, odio urna placerat diam, eu porttitor erat diam
              et nulla. Nulla facilisi. Aenean eu dignissim enim. Vestibulum ac
              sodales turpis. Mauris ut nunc in nisi vulputate maximus. Integer
              ac interdum mauris. Fusce semper pretium ultrices. Pellentesque eu
              faucibus nisi. Aenean nibh nibh, pretium sed dignissim ut, ornare
              sed quam. Sed placerat purus feugiat, vehicula tellus a, lobortis
              mi. Nam in est pellentesque nunc ultrices molestie id sit amet
              libero. Quisque posuere sapien aliquet, tincidunt augue eget,
              malesuada massa. Vestibulum ac sapien malesuada urna pellentesque
              semper. Vivamus auctor at quam congue hendrerit. Phasellus
              sagittis lorem a ligula aliquet, vel posuere elit pulvinar. Aenean
              dapibus porta aliquet. Cras a hendrerit elit. Nullam sit amet
              consequat sem. Aliquam euismod, magna eu commodo imperdiet, urna
              nibh tincidunt quam, sit amet varius nulla nulla ac diam.
              Vestibulum congue ut ligula id viverra. Cras venenatis urna quis
              interdum mollis. Cras gravida nisl a nibh rutrum pellentesque.
              Duis egestas justo non suscipit posuere. Donec tincidunt, urna
              pellentesque tincidunt elementum, sem magna consequat metus, eget
              faucibus mi nulla nec tortor. Curabitur rutrum purus a augue
              ultricies, id blandit magna iaculis. Vestibulum placerat magna sit
              amet sem ultricies, feugiat pharetra tellus bibendum. Nunc commodo
              blandit leo sit amet dapibus. Nullam facilisis eleifend ex, a
              fringilla massa congue fermentum. Sed in odio lectus. Mauris est
              mauris, bibendum nec vehicula id, iaculis quis ex. Vivamus id
              massa tellus. Nunc cursus lectus nec tortor tempor, at cursus diam
              vestibulum. Sed pulvinar ligula non odio rhoncus condimentum et
              sed tellus. Etiam ac ligula venenatis, elementum diam id, sagittis
              ex. Ut odio massa, accumsan ac euismod et, commodo a libero.
              Aliquam sit amet suscipit quam. Vivamus id tellus quis leo
              vestibulum fermentum. Aliquam scelerisque efficitur nisi, eget
              tempor mi accumsan vitae. Suspendisse mollis non nunc ac egestas.
              Ut ullamcorper turpis neque, sit amet hendrerit est venenatis
              eget. Suspendisse et nisi in velit sodales finibus. Curabitur ut
              tristique magna, quis maximus neque. Duis congue metus sit amet
              elit tincidunt laoreet. Vestibulum sagittis at nibh quis sodales.
            </p>
          </div>
        </Zoom>
        <Zoom>
          <div
            id="features"
            className="introText divs"
            style={{ height: "auto" }}
          >
            <p>
              <Reveal effect="fadeInUp">
                <p className="heading">Features of ManageIt</p>
              </Reveal>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
              viverra justo, nec tristique nisi. Curabitur id orci in sapien
              vehicula pretium id non mauris. Nam ac dolor gravida, rhoncus arcu
              sed, ultrices nibh. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Sed at sapien
              vitae orci placerat eleifend. Vivamus auctor lorem eu leo
              tristique, vel efficitur eros molestie. Maecenas tempor cursus ex.
              Nulla in ornare justo. Ut malesuada eget orci vitae tempus. Donec
              facilisis consectetur efficitur. Nunc accumsan, massa mattis
              rutrum venenatis, odio urna placerat diam, eu porttitor erat diam
              et nulla. Nulla facilisi. Aenean eu dignissim enim. Vestibulum ac
              sodales turpis. Mauris ut nunc in nisi vulputate maximus. Integer
              ac interdum mauris. Fusce semper pretium ultrices. Pellentesque eu
              faucibus nisi. Aenean nibh nibh, pretium sed dignissim ut, ornare
              sed quam. Sed placerat purus feugiat, vehicula tellus a, lobortis
              mi. Nam in est pellentesque nunc ultrices molestie id sit amet
              libero. Quisque posuere sapien aliquet, tincidunt augue eget,
              malesuada massa. Vestibulum ac sapien malesuada urna pellentesque
              semper. Vivamus auctor at quam congue hendrerit. Phasellus
              sagittis lorem a ligula aliquet, vel posuere elit pulvinar. Aenean
              dapibus porta aliquet. Cras a hendrerit elit. Nullam sit amet
              consequat sem. Aliquam euismod, magna eu commodo imperdiet, urna
              nibh tincidunt quam, sit amet varius nulla nulla ac diam.
              Vestibulum congue ut ligula id viverra. Cras venenatis urna quis
              interdum mollis. Cras gravida nisl a nibh rutrum pellentesque.
              Duis egestas justo non suscipit posuere. Donec tincidunt, urna
              pellentesque tincidunt elementum, sem magna consequat metus, eget
              faucibus mi nulla nec tortor. Curabitur rutrum purus a augue
              ultricies, id blandit magna iaculis. Vestibulum placerat magna sit
              amet sem ultricies, feugiat pharetra tellus bibendum. Nunc commodo
              blandit leo sit amet dapibus. Nullam facilisis eleifend ex, a
              fringilla massa congue fermentum. Sed in odio lectus. Mauris est
              mauris, bibendum nec vehicula id, iaculis quis ex. Vivamus id
              massa tellus. Nunc cursus lectus nec tortor tempor, at cursus diam
              vestibulum. Sed pulvinar ligula non odio rhoncus condimentum et
              sed tellus. Etiam ac ligula venenatis, elementum diam id, sagittis
              ex. Ut odio massa, accumsan ac euismod et, commodo a libero.
              Aliquam sit amet suscipit quam. Vivamus id tellus quis leo
              vestibulum fermentum. Aliquam scelerisque efficitur nisi, eget
              tempor mi accumsan vitae. Suspendisse mollis non nunc ac egestas.
              Ut ullamcorper turpis neque, sit amet hendrerit est venenatis
              eget. Suspendisse et nisi in velit sodales finibus. Curabitur ut
              tristique magna, quis maximus neque. Duis congue metus sit amet
              elit tincidunt laoreet. Vestibulum sagittis at nibh quis sodales.
            </p>
          </div>
        </Zoom>
        <Reveal effect="fadeInUp">
          <p className="heading">Pricing and Business Palns</p>
        </Reveal>
        <div id="pricing" className="introText divs">
          <PricingTable></PricingTable>
        </div>

        <div id="myFooter">
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-sm-3 myCols">
                  <h5>Get started</h5>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Sign up</a>
                    </li>
                    <li>
                      <a href="#">Downloads</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-3 myCols">
                  <h5>About us</h5>
                  <ul>
                    <li>
                      <a href="#">Company Information</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Reviews</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-3 myCols">
                  <h5>Support</h5>
                  <ul>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Help desk</a>
                    </li>
                    <li>
                      <a href="#">Forums</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-3 myCols">
                  <h5>Legal</h5>
                  <ul>
                    <li>
                      <a href="#">Terms of Service</a>
                    </li>
                    <li>
                      <a href="#">Terms of Use</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="social-networks">
              <a href="#" className="twitter">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="fa fa-facebook-official"></i>
              </a>
              <a href="#" className="google">
                <i className="fa fa-google-plus"></i>
              </a>
            </div>
            <div className="footer-copyright">
              <p>© 2020 All rights reserved </p>
            </div>
            <div style={{ height: "30px" }}>
              <GoogleApiWrapper stores={[]}></GoogleApiWrapper>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
export default HomeComponent;
