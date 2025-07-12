import { gsap } from 'gsap';

export default rail = ()=>{


    const rails = document.querySelectorAll('.rail');
    let scrollSpeed = 1;

    const isAndroid = /Android/i.test(navigator.userAgent);
    if (isAndroid) {
        scrollSpeed = 1;
    }

    rails.forEach((rail) => {
        let currentPosition = 0;

        function animateScroll() {
            if (rail.children.length > 0) {
                currentPosition -= scrollSpeed;
                rail.style.transform = `translateX(${currentPosition}px)`;

                const firstItem = rail.firstElementChild;
                const firstItemWidth = firstItem ? firstItem.offsetWidth : 0;

                if (scrollSpeed > 0) {
                    // Si se desplaza hacia la izquierda y alcanza el límite
                    if (-currentPosition >= firstItemWidth) {
                        currentPosition += firstItemWidth;

                        // Mueve el primer elemento al final en lugar de eliminarlo y clonarlo
                        rail.appendChild(firstItem);
                    }
                }

                if (scrollSpeed < 0) {
                    const lastItem = rail.lastElementChild;
                    const lastItemWidth = lastItem ? lastItem.offsetWidth : 0;

                    // Si se desplaza hacia la derecha y alcanza el límite
                    if (currentPosition >= 0) {
                        currentPosition -= lastItemWidth;

                        // Mueve el último elemento al comienzo en lugar de eliminarlo y clonarlo
                        rail.insertBefore(lastItem, rail.firstChild);
                    }
                }
            }

            setTimeout(() => requestAnimationFrame(animateScroll), isAndroid ? 10 : 0); // más lento en Android
        }

        window.addEventListener('wheel', (event) => {
            scrollSpeed = event.deltaY < 0 ? -1 : 1;
        });

        animateScroll();
    });


}