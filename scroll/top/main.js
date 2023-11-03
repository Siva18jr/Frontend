const scrollUp = () => {

    const scrollUp = document.getElementById('scroll-up')

    if (this.scrollY >= 460) {

        scrollUp.classList.add('show-scroll')

    } else {

        scrollUp.classList.remove('show-scroll')

    }

}

window.addEventListener('scroll', scrollUp)

const goTop = () => {

    window.scrollTo(0, 0)

}