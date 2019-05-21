import style from "./index.scss";
import { Carousel } from './script/carousel';
const itemList = [{
  description: "Craze is one of the most great things in the World",
  author: "Sarah Hunt"
}, {
  description: "Craze is really amazing, I've been learning a lot",
  author: "Bill"
}]
new Carousel({
  items: itemList,
  parent: document.getElementsByClassName('carousel'),
  content: document.getElementsByClassName('carousel-content')
}).init();
