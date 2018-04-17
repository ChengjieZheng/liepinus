// material-ui-icons
import PersonAdd from 'material-ui-icons/PersonAdd';
import Fingerprint from 'material-ui-icons/Fingerprint';
import MonetizationOn from 'material-ui-icons/MonetizationOn';
import LockOpen from 'material-ui-icons/LockOpen';

const clientStatusRoutes = [
  {
    path: '/#',
    name: 'Home Page',
    short: 'Home',
    mini: 'HP',
    icon: PersonAdd,
    // component: RegisterPage
  },
  {
    path: '/#',
    name: 'Products',
    short: 'Products',
    mini: 'PD',
    icon: Fingerprint,
    // component: LoginPage
  },
  {
    path: '/#',
    name: 'Job Page',
    short: 'Job',
    mini: 'JB',
    icon: MonetizationOn,
    // component: PricingPage
  },
  {
    path: '/#',
    name: 'Events Page',
    short: 'Events',
    mini: 'EP',
    icon: LockOpen,
    // component: LockScreenPage
  },
  {
    path: '/#',
    name: 'About Page',
    short: 'About',
    mini: 'LSP',
    icon: LockOpen,
    // component: LockScreenPage
  },
  {
    path: '/#',
    name: 'Login And Register Page',
    short: 'Login / Register',
    mini: 'LRP',
    icon: LockOpen,
    // component: LockScreenPage
  },
  // {
  //   path: '/pages/lock-screen-page',
  //   name: 'Lock Screen Page',
  //   short: 'dfdfdfdfdf',
  //   mini: 'LSP',
  //   icon: LockOpen,
  //   component: LockScreenPage
  // },
  {
    redirect: true,
    path: '/#',
    pathTo: '/#',
    name: 'Register Page',
  },
];

export default clientStatusRoutes;

