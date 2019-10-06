import Home from "../Home";
import MusicList from "../MusicList";
import Publicity from "../Publicity";

export default [
  {
    key: 'home',
    title: 'Home',
    component: Home,
    initial: true
  },
  {
    key: 'musicList',
    title: 'MusicList',
    component: MusicList
  },
  {
    key: 'publicity',
    title: 'Publicity',
    component: Publicity,
    modal: true
  }
]