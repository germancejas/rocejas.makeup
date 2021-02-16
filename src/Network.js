import React, { Component } from "react";
import InstagramEmbed from 'react-instagram-embed';
import { FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";
import DOMPurify from "dompurify";


class Network extends Component {
  componentDidUpdate(prevProps) {
    // Uso tipico (no olvides de comparar las props):
    if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
    }
  }
  render() {
    const dirty = `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@rocejas.makeup/video/6908132758262910213" data-video-id="6908132758262910213" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@rocejas.makeup" href="https://www.tiktok.com/@rocejas.makeup">@rocejas.makeup</a> <p>1000 likes y subo el proceso 😊❤️ <a title="parati" target="_blank" href="https://www.tiktok.com/tag/parati">##parati</a> <a title="foryou" target="_blank" href="https://www.tiktok.com/tag/foryou">##foryou</a> <a title="makeup" target="_blank" href="https://www.tiktok.com/tag/makeup">##makeup</a> <a title="robot" target="_blank" href="https://www.tiktok.com/tag/robot">##robot</a></p> <a target="_blank" title="♬ sonido original - Ro Cejas" href="https://www.tiktok.com/music/sonido-original-6908132743092128517">♬ sonido original - Ro Cejas</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>`
    
    return (
    <div className="redes">
      <div className="tiktokRedes">
       <h1>TikTok <SiTiktok/></h1>
       <div
        dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(dirty)
        }}
       />
      </div>
      <div className="instagram">
        <h1>Instagram <FaInstagram/> </h1>
        <InstagramEmbed
          className="instagramEmbed"
          url='https://www.instagram.com/p/CC9g_xRANNN/'
          clientAccessToken='2914904478766935|19cd7695d4c170463a4cc88dfc76ac4a'
          maxWidth={500}
          hideCaption={false}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </div>
      <div className="youTubeRedes">
        <h1>YouTube <IoLogoYoutube/></h1>
        <iframe 
          className="youTubeIframe"
          title="youtube"
          width="800" 
          height="600"  
          src="https://www.youtube.com/embed/DVBSdaF9iaw" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    </div>
    );
  }
}
 
export default Network;