const yellowContainer1 = document.querySelector('#yellow-container');
console.log(yellowContainer1);

const paintYellow = () => {
    yellowContainer1.classList.add('yellow-container')
    const div1 = document.createElement("div");
    const img1 = document.createElement("img");
    const div2= document.createElement("div");
    const button1 = document.createElement("button")
    img1.src = 'https://image.istarbucks.co.kr/upload/common/img/main/2022/m_2022_Summer1_main_slogun.png'
    div1.appendChild(div2)
    div1.classList.add("yellow-img-text-group")
    div2.classList.add("find-text")
    div2.appendChild(img1)
    div2.appendChild(button1)
    button1.classList.add("btn-style")
    button1.classList.add("btn0")
    button1.textContent = "자세히 보기";
    img1.classList.add("find-slogan")
    yellowContainer1.appendChild(div1);

}


paintYellow();