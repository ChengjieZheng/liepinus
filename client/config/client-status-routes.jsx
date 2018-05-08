// material-ui-icons
import PersonAdd from 'material-ui-icons/PersonAdd';
import Fingerprint from 'material-ui-icons/Fingerprint';
import MonetizationOn from 'material-ui-icons/MonetizationOn';
import LockOpen from 'material-ui-icons/LockOpen';
import Dashboard from 'material-ui-icons/Dashboard'

const clientStatusRoutes = [
  {
    path: '/#',
    name: 'Client',
    short: 'Explore Course',
    mini: 'EC',
    icon: PersonAdd,
    // component: LoginPage
  },
  {
    path: '/events',
    name: 'Events Page',
    short: 'Events',
    mini: 'EP',
    icon: Fingerprint,
    // component: LockScreenPage
  },
  {
    path: '/business',
    name: 'Business Page',
    short: 'Business',
    mini: 'BP',
    icon: LockOpen,
    // component: LockScreenPage
	},
  {
    path: '/c.liepin.com',
    name: 'Login And Register Page',
    short: 'Start Learning',
    mini: 'LRP',
    icon: MonetizationOn,
    // component: ClientRegister,
  },
  {
    redirect: true,
    path: '/#',
    pathTo: '/#',
    name: 'Register Page',
  },
];

export default clientStatusRoutes;

