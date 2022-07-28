import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
