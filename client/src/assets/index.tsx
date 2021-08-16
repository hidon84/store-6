import buttonSVG from './button.svg';
import checkCircleSVG from './check-circle.svg';
import checkSVG from './check.svg';
import doodleAssKickSVG from './doodle-ass-kick.svg';
import doodleRobotSVG from './doodle-robot.svg';
import doodleSkeletonSVG from './doodle-skeleton.svg';
import doodleStickmanSVG from './doodle-stickman.svg';
import doodleTeasingSVG from './doodle-teasing.svg';
import socialFacebookSVG from './social-facebook.svg';
import socialGoogleSVG from './social-google.svg';
import underlineSVG from './underline.svg';
import verticalLineSVG from './vertical-line.svg';

const S3_PREFIX = 'https:/store-6-bucket.s3.ap-northeast-2.amazonaws.com';

const LogoSVG = `${S3_PREFIX}/common/logo.svg`;
const LineSVG = `${S3_PREFIX}/common/line.svg`;

const DoodleUselessSVG = `${S3_PREFIX}/header/doodle-useless.svg`;
const HeartSVG = `${S3_PREFIX}/header/heart.svg`;
const MypageSVG = `${S3_PREFIX}/header/mypage.svg`;
const CartSVG = `${S3_PREFIX}/header/shop.svg`;
const BadgeSVG = `${S3_PREFIX}/header/badge.svg`;

export {
  LogoSVG,
  DoodleUselessSVG,
  HeartSVG,
  MypageSVG,
  CartSVG,
  LineSVG,
  BadgeSVG,
  buttonSVG,
  checkCircleSVG,
  checkSVG,
  doodleAssKickSVG,
  doodleRobotSVG,
  doodleSkeletonSVG,
  doodleStickmanSVG,
  doodleTeasingSVG,
  socialFacebookSVG,
  socialGoogleSVG,
  underlineSVG,
  verticalLineSVG,
};
