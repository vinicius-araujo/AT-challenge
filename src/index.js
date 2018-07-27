import style from "./index.scss";
import { UltimateCarousel } from './script/carousel';
const itemList = [{
  description: "Craze is one of the most great things in the World",
  author: "Vinicius"
}, {
  description: "Alguma coisa Muito legal",
  author: "Vinicius Araujo"
}]
var taskCarousel = new UltimateCarousel({
  items: itemList,
  parent: document.getElementsByClassName('carousel'),
  content: document.getElementsByClassName('carousel-content'),
  height: 180
});
taskCarousel.init();
