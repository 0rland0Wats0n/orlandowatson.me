import { ContactKind } from "./models";

import EmailLogo from '../media/email.png';
import TwitterXLogo from '../media/twitterx.png';
import GithubLogo from '../media/github.png';
import LinkedinLogo from '../media/linkedin.png';

const SocialIcons: Record<ContactKind, string> = {
  email: EmailLogo,
  x: TwitterXLogo,
  github: GithubLogo,
  linkedin: LinkedinLogo
}

export default SocialIcons;