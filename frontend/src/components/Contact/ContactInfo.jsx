import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

import ContactCard from "./ContactCard";
import SocialLinks from "./SocialLinks";

const ContactInfo = () => {
  return (
    <div className="space-y-6">

      <ContactCard
        icon={<FaEnvelope />}
        title="Email"
        value="tanisha94.60@gmail.com"
      />

      <ContactCard
        icon={<FaMapMarkerAlt />}
        title="Location"
        value="India • Open to Relocation"
      />

      <ContactCard
        icon={<FaGithub />}
        title="GitHub"
        value="github.com/Tanisha744"
      />

      <ContactCard
        icon={<FaLinkedin />}
        title="LinkedIn"
        value="linkedin.com/in/tanisha-tech"
      />

      <SocialLinks />

    </div>
  );
};

export default ContactInfo;