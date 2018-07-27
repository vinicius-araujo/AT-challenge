# AT-challenge
Code challenge

> Creating a page following a PSD file.
> Developing a carousel component from Scratch.

## How to use

This project uses [webpack](https://webpack.js.org/) to genereate and create bundles as well as to load some plugins, and it also uses [Babel](https://github.com/babel/babel-loader) to transpile.

### Build

Build for *production*

```
npm build
```

Build for *dev*

```
npm start
```

## Style

This project uses [SCSS](https://sass-lang.com/) to organize and create css files easily, as well as it follows an architecture called [7-1](https://sass-guidelin.es/#the-7-1-pattern) and as syntax it follows a [BEM](http://getbem.com/introduction/) naming convention.


## Carousel js

Carousel componente with auto-slider option, created from scratch using pure Javascript and also following the Prototype design pattern.

> Follow the methods that the carousel provides and how to initialize it.

### New Carousel(options)

> New instance as well as set up the carousel.

**options**

| Property | Type              | Options                                 |Default  |
|----------|-------------------|-----------------------------------------|---------|
|`items`   |*array*            | '[{description : "", author : ""}]'     | []      |
|`autoRotate`    |*boolean*    | true/false                              | true    |
|`rotateTime`    |*number*     | 'Number in milleseconds'                | 4000    |
|`firstItem`     |*number*     | 1                                       | 0       |
|`transition`     |*string*    | 'css transition property'               | 'transform 0.3s ease-in-out'|

**Example**

```js
const itemList = [{
  description: "Carousel is one of the most beautiful things in the World",
  author: "Sarah Hunt"
}, {
  description: "Carousel is really amazing, I've benn learning a lot",
  author: "Bill"
}].
const myCarousel = new Carousel({
  items: itemList
})
```
### Init

> Use in order to initialize the carousel.

**Example**

```js
...
const myCarousel = new Carousel({
  items: itemList
}).init();

```
## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/vinicius-araujo/AT-challenge/tags).

## Authors

[Vinicius Araujo](https://github.com/vinicius-araujo/)

See also the list of [contributors](https://github.com/vinicius-araujo/AT-challenge/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
