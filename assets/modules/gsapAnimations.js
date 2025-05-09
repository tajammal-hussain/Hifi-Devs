import SplitType from 'split-type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(ScrollTrigger, CustomEase);

export default function initGsapAnimations() {

    
    // Find all sphere trigger elements
    document.querySelectorAll('.--trigger-sphere').forEach(triggerElement => {
        ScrollTrigger.create({
            trigger: triggerElement,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => document.body.classList.add('--is-sphere'),
            onLeave: () => document.body.classList.remove('--is-sphere'),
            onEnterBack: () => document.body.classList.add('--is-sphere'),
            onLeaveBack: () => document.body.classList.remove('--is-sphere')
        });
    });

    // Find all white trigger elements
    document.querySelectorAll('.--trigger-white').forEach(triggerElement => {
        ScrollTrigger.create({
            trigger: triggerElement,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => document.body.classList.add('--is-light'),
            onLeave: () => document.body.classList.remove('--is-light'),
            onEnterBack: () => document.body.classList.add('--is-light'),
            onLeaveBack: () => document.body.classList.remove('--is-light')
        });
    });

};


