import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Browse from '../pages/Browse';
import Signup from '../pages/Signup';
import MyProfile from '../pages/MyProfile';
import AllPage from '../pages/AllPage';
import MusicPage from '../pages/MusicPage';
import PodcastPage from '../pages/PodcastPage';
import MyMusicPlaylist from '../pages/MyMusicPlaylist';
import MyPodcastPlaylist from '../pages/MyPodcastPlaylist';
import PodcastInfo from '../pages/PodcastInfo';
import SongInfo from '../pages/SongInfo';
import ArtistInfo from '../pages/ArtistInfo';
import PlaylistPage from '../pages/PlaylistPage';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/login',
        component: Login,
        layout: null,
    },
    {
        path: '/browse',
        component: Browse,
    },
    {
        path: '/signup',
        component: Signup,
        layout: null,
    },
    {
        path: '/myprofile',
        component: MyProfile,
    },
    {
        path: '/allpage',
        component: AllPage,
    },
    {
        path: '/musicpage',
        component: MusicPage,
    },
    {
        path: '/podcastpage',
        component: PodcastPage,
    },
    {
        path: '/mymusicplaylist',
        component: MyMusicPlaylist,
    },
    {
        path: '/mypodcastplaylist',
        component: MyPodcastPlaylist,
    },
    {
        path: '/podcastinfo',
        component: PodcastInfo,
    },
    {
        path: '/songinfo',
        component: SongInfo,
    },
    {
        path: '/artistinfo',
        component: ArtistInfo,
    },
    {
        path: '/playlistpage',
        component: PlaylistPage,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
