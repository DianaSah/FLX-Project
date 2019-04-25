import { library } from '@fortawesome/fontawesome-svg-core';

import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons/faRedditAlien';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faVk } from '@fortawesome/free-brands-svg-icons/faVk';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons/faTelegramPlane';

import { faCommentAlt } from '@fortawesome/free-solid-svg-icons/faCommentAlt';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons/faEllipsisH';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';
import { faExclamation } from '@fortawesome/free-solid-svg-icons/faExclamation';
import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons/faLightbulb';
import { faCoffee } from '@fortawesome/free-solid-svg-icons/faCoffee';
import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo';

const icons = [
  faFacebookF, faTwitter, faLinkedinIn, faRedditAlien,
  faWhatsapp, faVk, faTelegramPlane, faCommentAlt, faBook,
  faEnvelope, faCheck, faPrint, faExclamation, faLink, faEllipsisH, faMinus, faLightbulb, faCoffee, faInfo
];

library.add(...icons);
