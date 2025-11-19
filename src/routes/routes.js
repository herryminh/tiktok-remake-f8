import Config from '~/config';
// import config from '~/config';
import { HeaderOnly } from '~/layouts';
import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search';
import Setting from '~/Pages/Setting';
import Live from '~/Pages/Live';
const publicRotes = [
    { path: Config.routes.home, component: Home },
    { path: Config.routes.following, component: Following },
    { path: Config.routes.live, component: Live },
    { path: Config.routes.profile, component: Profile },
    { path: Config.routes.setting, component: Setting },
    { path: Config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: Config.routes.search, component: Search, layout: null },
];

const privateRotes = [];

export { publicRotes, privateRotes };
