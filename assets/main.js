import initSmoothScroll from './modules/smoothScroll.js';
import initTextAnimations from './modules/textAnimations.js';
import initCustomCursor from './modules/customCursor.js';
import initSwiperSlider from './modules/swiperSlider.js';
import TerrainEffect from './modules/terrainEffect.js';
import initGsapAnimations from './modules/gsapAnimations.js';
import MouseRotateEffect from './modules/MouseRotateEffect.js';
import initPreloader from './modules/preloader.js';

document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initCustomCursor();
    initTextAnimations();
    initSwiperSlider();
    initGsapAnimations();
    MouseRotateEffect();
    initPreloader();
});

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('terrain-container');
    const scroller = {
        scroll: { instance: { scroll: { y: 0 } } },
        on: function(event, callback) {
            window.addEventListener('scroll', () => {
                this.scroll.instance.scroll.y = window.scrollY;
                callback();
            });
        }
    };
    if(!container) {
        console.error('Terrain container not found');
        return;
    }
    new TerrainEffect({ dom: container, scroller: scroller });
  });
  