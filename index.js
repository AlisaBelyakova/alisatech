window.addEventListener('load', () => {
    const aboutText = `Hi, I'm Alisa! <br> 
    I am a full-stack software engineer with experience in startup ventures, 
    public-private partnerships and Smart City applications. <br> 
    My expertise is in Node.js, Express, React, Solidity, and Relational Database solutions.  
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



})


  // "repository": {
  //   "type": "git",
  //   "url": "git+https://github.com/AlisaBelyakova/alisatech.git"
  // },