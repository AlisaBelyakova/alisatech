window.addEventListener('load', () => {
    const aboutText = `Hi, I'm Alisa! \n
    I am a full-stack Javascript Software Engineer, with experience in startup ventures, 
    public-private partnerships, and municipal administration. \n Please see sections below to learn more 
    or drop me a line and I will bein touch shortly `

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



}) 