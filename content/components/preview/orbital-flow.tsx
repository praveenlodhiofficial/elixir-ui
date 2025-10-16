import {
   FaSlack,
   FaDiscord,
   FaMicrophone,
   FaEnvelope,
   FaRss,
   FaYoutube,
   FaSpotify,
   FaInstagram,
} from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import { OrbitalFlow } from "@/components/elixir-ui/orbital-flow";

export function OrbitalFlowPreview() {
   const innerTags = [
      { name: "Slack", icon: <FaSlack /> },
      { name: "Notion", icon: <SiNotion /> },
      { name: "Discord", icon: <FaDiscord /> },
      { name: "Youtube", icon: <FaYoutube /> },
   ];

   const outerTags = [
      { name: "Messages", icon: <FaEnvelope /> },
      { name: "Substack", icon: <FaRss /> },
      { name: "Recordings", icon: <FaMicrophone /> },
      { name: "Spotify", icon: <FaSpotify /> },
      { name: "Instagram", icon: <FaInstagram /> },
   ];

   return (
      <div className="relative top-0 flex h-full w-full max-w-6xl items-center justify-center">
         <OrbitalFlow
            outerTags={outerTags}
            innerTags={innerTags}
            centerImageSrc="/components/ringo-starr.jpg"
            outerOrbitDiameter={850}
            innerOrbitDiameter={550}
            outerRotationSpeed={32}
            innerRotationSpeed={30}
         />
      </div>
   );
}
