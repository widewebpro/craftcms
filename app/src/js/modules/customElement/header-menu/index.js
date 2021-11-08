// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);

class HeaderMenu extends HTMLElement {
  constructor() {
    super();

    this.size = this.dataset.size;

    this.swiperInit();
  }

  swiperInit() {
   console.log('swiper init : INIT');
  }
}

export default customElements.define('header-menu', HeaderMenu);
