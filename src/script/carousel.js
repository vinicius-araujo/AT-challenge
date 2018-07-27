export const Carousel = (function () {
    var defaults = {
        parent: document.getElementsByClassName('carousel'),
        content: document.getElementsByClassName('carousel-content'),
        items:[],
        autoRotate: true,
        rotateTime: 4000,
        firstItem: 0,
        transition: 'transform 0.3s ease-in-out',
        //"item" ou "page"
    };
    if (arguments[0] && typeof arguments[0] === 'object') {
        this.options = extendDefaults(defaults, arguments[0]);
    } else {
        this.options = defaults;
    }

    function extendDefaults(source, properties) {
		var property;
		for (property in properties) {
			if (properties.hasOwnProperty(property)) {
				source[property] = properties[property];
			}
		}
		return source;
	}
});

Carousel.prototype.init = function () {
    if (this.options.parent.length > 0 && this.options.content.length > 0) {
        this.createDots();
        this.createItens();
        this.currentNavigation = this.options.firstItem;
        this.timeOut = 0;
        this.getChild().style.transform = `translateX(0px)`;
        // this.addResizeListener();
    }
    this.goToItem(this.options.firstItem);
    this.timeOut = setTimeout(() =>  this.autoNavigate() , this.options.rotateTime);
}
Carousel.prototype.autoNavigate = function () {
  clearTimeout(this.timeOut);
  if (this.options.autorRotate) {
    this.currentNavigation++;
    if (this.currentNavigation >= this.options.items.length){
      this.currentNavigation = 0;
    }
    this.goToItem(this.currentNavigation);
    this.activeDot(this.currentNavigation);
    this.timeOut = setTimeout(() =>  this.autoNavigate() , this.options.rotateTime);
  }
}

Carousel.prototype.goToItem = function (item) {
  clearTimeout(this.timeOut);
  const position = (this.calculateContent() * item) * -1;
  var ul = this.getChild();
  ul.style.transform = `translateX(${position}px)`;
  ul.style.webkitTransition = this.options.transition;
  ul.style.mozTransition = this.options.transition;
  ul.style.transition = this.options.transition;
}

Carousel.prototype.createItens = function () {
  const itemList = this.options.items
  .map((item, index) => `<li class="carousel__item"><span class="carousel__item--desc">"${item.description}"</span><p>${item.author}</p></li>`)
  .join(" ");

  const ulDot = document.getElementById('carousel__list');
  ulDot.innerHTML = itemList;

}

Carousel.prototype.createDots = function () {
  const dotList = this.options.items
  .map((item, index) => `<li class="hr-list__item carousel__dot ${index === this.options.firstItem?"dot--active" : ""}" data-index="${index}"></li>`)
  .join(" ");

  const ulDot = document.getElementById('carousel__dot');
  ulDot.innerHTML = dotList;
  const dotElements = document.querySelectorAll(".carousel__dot");
  dotElements.forEach(element => {
      const index = Number(element.getAttribute('data-index'));
      element.addEventListener("click", () => {
        this.goToItem(index);
        this.activeDot(index);
        this.currentNavigation = index;
        this.timeOut = setTimeout(() =>  this.autoNavigate() , this.options.rotateTime);
       })
    })
}

Carousel.prototype.activeDot = function (item) {
  const dotElements = document.querySelectorAll(".carousel__dot");
  dotElements.forEach((element, index) => {
    if(item === index){
      element.classList.add('dot--active');
    }else{
      element.classList.remove('dot--active');
    }
  })
}

Carousel.prototype.calculateContent = function () {
    return this.options.content[0].offsetWidth || this.options.content[0].clientWidth;
}

Carousel.prototype.getChild = function () {
    var i, j;
    if (!this.options.content[0].firstElementChild && !this.options.content[0].children) {
        for (j = this.options.content[0].childNodes.length, i = 0; i < j; i++){
            if (this.options.content[0].childNodes[i].nodeType === 1) {
                return this.options.content[0].childNodes[i];
            }
        }
    }
    return this.options.content[0].firstElementChild || this.options.content[0].children;
}
