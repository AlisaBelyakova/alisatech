
window.addEventListener('load', () => {
    const aboutText = `Hi, I'm Alisa! <br> 
    I'm hacking with Javascript and building future in Web VR. 
    I love solving challenging puzzles and team with people from different fields'.   
    <br> See my projects below <br> and drop me a line to say - HELLO :]`

    const about = document.getElementById('about-text');
    let count = 0;
    let type = window.setInterval(() => {
        if (count <= aboutText.length) {
            about.innerHTML = aboutText.slice(0, count);
            count++;
        } else {
            window.clearInterval(type);
        }
    }, 30)

    let medias = Array.from(document.getElementsByClassName('border'));
    medias.forEach(item => item.addEventListener('mouseenter', (event) => {
        // event.target.style.height = window.innerWidth > 800 ? '5.5vw' : '16vw';
        // event.target.style.transform = scale(1.1, 1.1)

        let prevImg = event.target.getAttribute('src').split('images/')[1];
        console.log(event.target.getAttribute('src'))
        event.target.setAttribute('src', './images/' + prevImg.slice(0, prevImg.indexOf('.')) + '-white.png');
        console.log(event.target.getAttribute('src'))
    }))

    medias.forEach(item => item.addEventListener('mouseleave', (event) => {
        // event.target.style.height = window.innerWidth > 800 ? '5vw' : '15vw';
        // event.target.style.transform = scale(1, 1)

        let prevImg = event.target.getAttribute('src').split('images/')[1];
        event.target.setAttribute('src', './images/' + prevImg.slice(0, prevImg.indexOf('-white')) + '.png');
        console.log(event.target.getAttribute('src'))
    }));


    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 50) {
            Array.from(document.querySelectorAll('.colored-img')).forEach(item => {
                item.style.opacity = '1';
            })
        }

        if (scrollPosition > 250) {
            Array.from(document.querySelectorAll('.colored-img')).forEach(item => {
                item.style.width = '6vw';
                item.style.margin = '2vw 0';
            })
            Array.from(document.querySelectorAll('.skill-text')).forEach(item => {
                item.style.opacity = '0';
            })
        }

        if (scrollPosition > 400) {
            Array.from(document.querySelectorAll('.skill-text')).forEach(item => {
                item.style.opacity = '1';
            })

            Array.from(document.querySelectorAll('.colored-img')).forEach(item => {
                item.style.width = '12vw';
                item.style.margin = '0';
            });

        }


        // let portfolio = document.getElementById('portfolio');
        // let portTop = portfolio.getBoundingClientRect().top;

        // if (scrollPosition > portTop - 100 && window.innerWidth > 800) {
        //     Array.from(document.querySelectorAll('.project-img, .project-name')).forEach(item => {
        //         item.style.opacity = '1';
        //     })
        // }

        // document.querySelectorAll('.project-img').forEach(item => {
        //     item.style.rotation = '10deg';
        // })

    })


})


  // "repository": {
  //   "type": "git",
  //   "url": "git+https://github.com/AlisaBelyakova/alisatech.git"
  // },
  //