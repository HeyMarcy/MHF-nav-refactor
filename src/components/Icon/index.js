/* eslint-disable no-duplicate-case */
import React from 'react';
import PropTypes from 'prop-types';

import FairviewLogo from './icons/FairviewLogo';
import ArrowRight from './icons/ArrowRight';
import Building from './icons/Building';
import Calendar from './icons/Calendar';
import CaretDown from './icons/CaretDown';
import CaretLeft from './icons/CaretLeft';
import CaretRight from './icons/CaretRight';
import CircleCheck from './icons/CircleCheck';
import Clear from './icons/Clear';
import Clipboard from './icons/Clipboard';
import ComputerPerson from './icons/ComputerPerson';
import ComputerPhone from './icons/ComputerPhone';
import Cross from './icons/Cross';
import CrossDouble from './icons/CrossDouble';
import Direction from './icons/Direction';
import Envelope from './icons/Envelope';
import ExternalLink from './icons/ExternalLink';
import Facebook from './icons/Facebook';
import Filter from './icons/Filter';
import FolderHeart from './icons/FolderHeart';
import Grid from './icons/Grid';
import Instagram from './icons/Instagram';
import List from './icons/List';
import LocationPin from './icons/LocationPin';
import Map from './icons/Map';
import Menu from './icons/Menu';
import Payment from './icons/Payment';
import Person from './icons/Person';
import PersonPlus from './icons/PersonPlus';
import PersonX2Plus from './icons/PersonX2Plus';
import Phone from './icons/Phone';
import Play from './icons/Play';
import Prohibit from './icons/Prohibit';
import SpeechBubbleDots from './icons/SpeechBubbleDots';
import Stethoscope from './icons/Stethoscope';
import Trash from './icons/Trash';
import Twitter from './icons/Twitter';
import YouTube from './icons/YouTube';

export const ICON_NAMES = {
  FAIRVIEW_LOGO: 'fairview-logo',
  ARROW_RIGHT: 'arrow-right',
  BUILDING: 'building',
  CALENDAR: 'calendar',
  CARET_DOWN: 'caret-down',
  CARET_LEFT: 'caret-left',
  CARET_RIGHT: 'caret-right',
  CIRCLE_CHECK: 'circle-check',
  CLEAR: 'clear',
  CLIPBOARD: 'clipboard',
  COMPUTER_PERSON: 'person-computer',
  COMPUTER_PHONE: 'computer-and-phone',
  CROSS: 'cross',
  CROSS_DOUBLE: 'cross-double',
  ENVELOPE: 'envelope',
  DIRECTION: 'direction',
  EXTERNAL_LINK: 'external-link',
  FACEBOOK: 'facebook',
  FILTER: 'filter',
  FOLDER_HEART: 'folder-heart',
  GRID: 'grid',
  INSTAGRAM: 'instagram',
  LIST: 'list',
  LOCATION_PIN: 'location-pin',
  MAP: 'map',
  MENU: 'menu',
  PAYMENT: 'payment',
  PERSON: 'person',
  PERSON_PLUS: 'person-plus',
  PERSON_X2_PLUS: 'person-x2-plus',
  PHONE: 'phone',
  PLAY: 'play',
  PROHIBIT: 'prohibit',
  SPEECH_BUBBLE_DOTS: 'speech-bubble-dots',
  STETHOSCOPE: 'stethoscope',
  TRASH: 'trash',
  TWITTER: 'twittter',
  YOUTUBE: 'youtube',
};

const Icon = props => {
  switch (props.name) {
    case ICON_NAMES.FAIRVIEW_LOGO:
      return <FairviewLogo {...props} />;
    case ICON_NAMES.ARROW_RIGHT:
      return <ArrowRight {...props} />;
    case ICON_NAMES.BUILDING:
      return <Building {...props} />;
    case ICON_NAMES.CALENDAR:
      return <Calendar {...props} />;
    case ICON_NAMES.CARET_DOWN:
      return <CaretDown {...props} />;
    case ICON_NAMES.CARET_LEFT:
      return <CaretLeft {...props} />;
    case ICON_NAMES.CARET_RIGHT:
      return <CaretRight {...props} />;
    case ICON_NAMES.CIRCLE_CHECK:
      return <CircleCheck {...props} />;
    case ICON_NAMES.CLEAR:
      return <Clear {...props} />;
    case ICON_NAMES.CLIPBOARD:
      return <Clipboard {...props} />;
    case ICON_NAMES.COMPUTER_PERSON:
      return <ComputerPerson {...props} />;
    case ICON_NAMES.COMPUTER_PHONE:
      return <ComputerPhone {...props} />;
    case ICON_NAMES.CROSS:
      return <Cross {...props} />;
    case ICON_NAMES.CROSS_DOUBLE:
      return <CrossDouble {...props} />;
    case ICON_NAMES.DIRECTION:
      return <Direction {...props} />;
    case ICON_NAMES.EXTERNAL_LINK:
      return <ExternalLink {...props} />;
    case ICON_NAMES.ENVELOPE:
      return <Envelope {...props} />;
    case ICON_NAMES.FACEBOOK:
      return <Facebook {...props} />;
    case ICON_NAMES.FOLDER_HEART:
      return <FolderHeart {...props} />;
    case ICON_NAMES.FILTER:
      return <Filter {...props} />;
    case ICON_NAMES.GRID:
      return <Grid {...props} />;
    case ICON_NAMES.INSTAGRAM:
      return <Instagram {...props} />;
    case ICON_NAMES.LIST:
      return <List {...props} />;
    case ICON_NAMES.LOCATION_PIN:
      return <LocationPin {...props} />;
    case ICON_NAMES.MAP:
      return <Map {...props} />;
    case ICON_NAMES.MENU:
      return <Menu {...props} />;
    case ICON_NAMES.PAYMENT:
      return <Payment {...props} />;
    case ICON_NAMES.PHONE:
      return <Phone {...props} />;
    case ICON_NAMES.PERSON:
      return <Person {...props} />;
    case ICON_NAMES.PERSON_PLUS:
      return <PersonPlus {...props} />;
    case ICON_NAMES.PERSON_X2_PLUS:
      return <PersonX2Plus {...props} />;
    case ICON_NAMES.PLAY:
      return <Play {...props} />;
    case ICON_NAMES.PROHIBIT:
      return <Prohibit {...props} />;
    case ICON_NAMES.SPEECH_BUBBLE_DOTS:
      return <SpeechBubbleDots {...props} />;
    case ICON_NAMES.STETHOSCOPE:
      return <Stethoscope {...props} />;
    case ICON_NAMES.TWITTER:
      return <Twitter {...props} />;
    case ICON_NAMES.TRASH:
      return <Trash {...props} />;
    case ICON_NAMES.YOUTUBE:
      return <YouTube {...props} />;

    default:
      console.error(
        `Icon component does not recognize: ${props.name} as a valid icon name`,
      );
  }
};

Icon.propTypes = { name: PropTypes.string.isRequired };

Icon.defaultProps = {
  fill: 'currentColor',
  focusable: false,
  'aria-hidden': true,
};

export default Icon;
