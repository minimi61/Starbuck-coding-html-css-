const yellowContainer1 = document.querySelector('#yellow-container');
console.log(yellowContainer1);
const div = document.createElement("div");
const img = document.createElement("img");
const div1= document.createElement("div");
const button1 = document.createElement("button")
const div2 = document.createElement("div");
const img2 = document.createElement("img");
const img3 = document.createElement("img");
const img4 = document.createElement("img");
const div3 = document.createElement("div");
const img5 = document.createElement("img");
const img6 = document.createElement("img");
const img7 = document.createElement("img");



const paintYellow = () => {
    const findYourTaste = () => {
        yellowContainer1.classList.add('yellow-container')
        img.src = 'https://image.istarbucks.co.kr/upload/common/img/main/2022/m_2022_Summer1_main_slogun.png'
        div.appendChild(div1)
        div.classList.add("yellow-img-text-group")
        div1.classList.add("find-text")
        div1.appendChild(img)
        div1.appendChild(button1)
        img.classList.add("find-slogan")
        button1.classList.add("btn-style")
        button1.classList.add("btn0")
        button1.textContent = "자세히 보기";
        yellowContainer1.appendChild(div);
    }
    const coffees = () => {
        div.appendChild(div2);
        div2.classList.add("coffees")
        div2.appendChild(img2)
        img2.src = 'https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Summer1_main_rollinmint.png'
        img2.classList.add("rollin");

        div2.appendChild(img3)
        img3.src = 'https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Summer1_main_punchgraffiti3.png'
        img3.classList.add('punch-img')
        
         div2.appendChild(img4)
        img4.src = 'https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Summer1_main_pomeloflow.png'
        img4.classList.add('pomelo')
    }

    const mediaYellow = () => {
        div.appendChild(div3);
        div3.classList.add('media-yellow-coffees');
        div3.appendChild(img5);
        img5.src = "https://image.istarbucks.co.kr/upload/common/img/main/2022/m_2022_Summer1_main_punchgraffiti2.png"
        img5.classList.add('punch2')
        div3.appendChild(img6);
        img6.src = "https://image.istarbucks.co.kr/upload/common/img/main/2022/m_2022_Summer1_main_rollinmint.png"
        img6.classList.add('rollin2')
        div3.appendChild(img7);
        img7.src = "https://image.istarbucks.co.kr/upload/common/img/main/2022/m_2022_Summer1_main_pomeloflow.png"
        img7.classList.add('pomelo2')

    }
 
    findYourTaste();
    coffees();
    mediaYellow()
}


paintYellow();