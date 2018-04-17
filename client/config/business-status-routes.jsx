// material-ui-icons
// import PersonAdd from 'material-ui-icons/PersonAdd';
import Fingerprint from 'material-ui-icons/Fingerprint';
import MonetizationOn from 'material-ui-icons/MonetizationOn';
import LockOpen from 'material-ui-icons/LockOpen';
import Dashboard from 'material-ui-icons/Dashboard'

const clientStatusRoutes = [
  {
    path: '/#',
    name: 'Home Page',
    short: 'Home',
    mini: 'HP',
    icon: Dashboard,
    // component: RegisterPage
  },
  {
    path: '/#',
    name: 'Starffing Page',
    short: 'Starffing Page',
    mini: 'SP',
    icon: Fingerprint,
    // component: LoginPage
  },
  {
    path: '/#',
    name: 'Branding and Marketing Page',
    short: 'Branding & Marketing',
    mini: 'BMP',
    icon: MonetizationOn,
    // component: PricingPage
  },
  {
    path: '/#',
    name: 'Customized Session Page',
    short: 'Customized Session',
    mini: 'CSP',
    icon: LockOpen,
    // component: LockScreenPage
  },
  {
    path: '/#',
    name: 'Excutive Traning Program Page',
    short: 'Excutive Traning Program',
    mini: 'ETPP',
    icon: LockOpen,
    // component: LockScreenPage
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
    mini: 'AP',
    icon: LockOpen,
    // component: LockScreenPage
	},
	{
    path: '/#',
    name: 'Chinese Or English Button',
    short: 'Chinese / English',
    mini: 'COEB',
    icon: LockOpen,
    // component: LockScreenPage
  },
  {
    redirect: true,
    path: '/#',
    pathTo: '/#',
    name: 'Register Page',
  },
];

export default clientStatusRoutes;

