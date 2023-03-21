import React from 'react'
import style from './Typing.module.css'

export default function TypingTest() {

    let words;
    let text;
    let abouts;
    document.title = "TypingTest" // Title
    let result;
    let AGAIN = () => { //Change Text button 
        window.location.reload();
    }

    let start = () => { // Start the typing test 
        text = document.getElementById('typing-area');
        text.disabled = false;
        text.focus();
        result = document.getElementById('Result')
        let timerhead = document.getElementById('timer');
        timerhead.style.display = 'block'
        let counter = document.getElementById('counter');
        counter.style.display = 'block'
        let btnone = document.getElementById('btnone');
        btnone.style.display = 'none'
        let count = 59;


        let time = setInterval(function () {//Set a time 
            counter.innerHTML = count;
            count--;
            if (count === -1) {
                clearInterval(time);
            }
        }, 1000)


        setTimeout(function () {// Display blocks after typing done
            document.getElementById("spin").style.display = "block";
            counter.style.display = 'none'
            timerhead.style.display = 'none'
            counter.innerHTML = "Time UP"
            counter.style.display = 'block'
            counter.style.color = "red"
            counter.style.fontSize = "30px"
            text.disabled = true;
        }, 1000 * 60);


        setTimeout(function () {//Stop the test and proceesing..
            document.getElementById("spin").style.display = "none";
            let main = document.getElementById('main')
            main.style.display = "none"
            counter.style.color = "black"
            counter.innerHTML = "60"
            counter.style.display = 'none'
            btnone.style.display = "block"

            function help() { // Word counter Accuracy and net speed function ** Accuracy and net speed depemds on charcters not on words** 
                text = document.getElementById('typing-area').value.trim();
                text = text.replace(/\s+/g, ' ');
                words = text.split(" ").length
                document.getElementById('words').innerHTML = words
                let textsentance = document.getElementById('test-sentence').innerText;
                let accuracy = (textsentance.length -
                    [...text].filter((char, i) => char !== textsentance[i]).length
                ) / textsentance.length * 100;
                document.getElementById('Accur').innerHTML = `${accuracy.toFixed()}%`;

                let net = words * accuracy / 100;
                let final = Math.floor(net)
                document.getElementById('net').innerHTML = final;
                result.style.display = 'block'
            }

            help();

        }, 1000 * 65);
    }

    let a = Math.random() * 15 // Random text for test 
    a = Number.parseInt(a)
    let arr = [
        `The sun rose above the horizon, painting the sky with hues of orange and pink. Birds chirped a melodious tune, adding to the serenity of the morning. People bustled about, starting their day with renewed energy and purpose. The air was crisp and invigorating, filling lungs with vitality. It was a beaut.`,
        `The forest was a sea of green, with tall trees reaching towards the sky. A gentle breeze rustled the leaves, creating a soothing lullaby. The ground was covered in a soft blanket of fallen leaves, creating a natural carpet. Sunlight filtered through the branches, casting dappled shadows upon the forest.`,
        `The city was bustling with life as people went about their daily routines. Cars honked and sirens blared, adding to the already chaotic atmosphere. Despite the noise, there was a sense of unity and purpose in the air. People were on their way to work, school, or running errands, all with a common goal .`,
        `Nature was a magnificent and awe-inspiring force. From towering mountains to endless oceans, its beauty was unparalleled. The changing of the seasons brought new life to the world, with spring flowers blooming, summer sun shining, autumn leaves falling, and winter snow blanketed the ground. The wind wh.`,
        `The beach was a scene of pure enchantment. The sand was a golden carpet that stretched out to meet the turquoise sea. The waves gently lapped at the shore, creating a rhythmic melody. The sun was a blazing orb, shining down upon the beach with its warm rays. Children laughed and played, building sandca.`,
        `The beauty of nature was breathtaking, with forests, oceans, and mountains offering a glimpse of the majesty of the world. The creatures were diverse, each with their own unique place in the natural world. The cycles of life were in constant motion, creating a never-ending tapestry of beauty and wonder.`,
        `The classrooms were filled with students, eager to learn and grow. Teachers imparted their knowledge, inspiring a love of learning. The lessons were diverse, covering subjects ranging from science to literature. Education was a path to empowerment, providing individuals with the tools they needed to su.`,
        `The screen was a window into another world, with images flickering to life. Directors brought their stories to life, capturing the hearts and minds of audiences. Actors embodied their characters, bringing depth and nuance to their performances. Film was a way of exploring the human experience, delving .`,
        `The screens were lit up with information, connecting people to the world. Devices were small but powerful, offering access to knowledge and communication. The advancements were rapid, transforming the way people lived and worked. Technology was changing the world, creating new possibilities and shaping.`,
        `The colors were vibrant, creating a canvas of beauty. Artists wielded their brushes, bringing their visions to life. The forms were sculptural, capturing the essence of the subject. Art was a form of expression, allowing artists to communicate their thoughts and feelings.The colors were vibrant, creati.`,
        `The pages were filled with words, creating a world of imagination. Authors spun tales that captivated the reader, taking them on a journey to distant lands. The characters were complex, their stories woven together in a tapestry of plot and theme. Literature was a way of exploring the human experience,.`,
        `The sound of music filled the air, creating a symphony of sound. Musicians brought their instruments to life, crafting melodies that stirred the soul. The rhythm was contagious, with people tapping their feet and swaying to the beat. Music was a universal language, bridging cultural divides and bringin.`,
        `The roar of the crowd was deafening, with fans cheering on their favorite team. The athletes were a study in determination and strength, pushing themselves to the limit. The thrill of competition was palpable, with the outcome hanging in the balance. Sports brought people together, uniting them in thei.`,
        `The excitement of travel was palpable, with the thrill of exploring new places and experiencing new cultures. Planes took to the sky, soaring over oceans and continents. Trains chugged along, taking passengers on a journey through the countryside. Buses bounced along roads, offering a window into the h.`,
        `The aroma of freshly baked bread filled the air, making mouths water in anticipation. The table was set with an array of delicious dishes, each more mouth-watering than the last. The food was a celebration of flavors and textures, each bite bursting with taste. Eating was a communal experience, bringin.`,]

    let ChangeText = () => {
        window.location.reload();
    }

    setTimeout(function () {// startng function which block the rusult div and render a sentences for test
        result = document.getElementById('Result')
        document.getElementById('test-sentence').innerHTML = arr[a]
        result.style.display = 'none'
        text = document.getElementById('typing-area');
        text.disabled = true;
        document.getElementById("spin").style.display = "none";
        abouts = document.getElementById('abouts');
        abouts.style.display = "none"
    }, 0)

    let about = () => {
        abouts = document.getElementById('abouts');
        abouts.style.display = "block"
    }
    let close = () => {
        abouts = document.getElementById('abouts');
        abouts.style.display = "none"
    }
    return (
        <>
            <div className={style.Heading}>
                <div className={style.data}>
                    <button className={style.btnH}><a href="https://tarunthakur7974.github.io/Resume/#project">Home</a></button>
                    <button onClick={about} className={style.btnH} >About</button>
                </div>
            </div>
            <div className={style.aboutsdata}>
                <ul id='abouts'>
                    <button onClick={close} style={{ float: 'right' }}>X</button>
                    <li>"The result display was not responsive."</li>
                    <li>"I am unable to use routing comtimerheadnts, so I will be using the CSS display property with block or none values to show or hide elements."</li>
                    <li>"The accuracy and net speed depend on the characters, so sometimes it shows the wrong result."</li>
                    <li>I am unable to put an alert on input are because of its blocking the site.</li>
                    <li>"And one weak point is anyone can copy and paste the text."</li>
                    <li>"Typing tests help to improve your typing speed"</li>
                </ul>
            </div>
            <div id="main">
                <div className={style.container}>
                    <div className={style.boxone}>
                        <li id="timer">Time Remaining</li>
                        <p id="counter" className={style.counter}>60</p>
                        <button id="btnone" className={style.btnc} onClick={start}>Start</button>
                    </div>
                    <div className={style.boxttwo}>
                        <button id="change-text" onClick={ChangeText} className={style.btnct}>Change Text</button>
                    </div>
                </div>
                <div className={style.flex}>
                    <div className={style.contTwo}>
                        <div id="test-sentence" ></div>
                        <textarea id="typing-area" placeholder='Write Here ' className={style.inputarea}></textarea>
                    </div>
                </div>
            </div>
            <div id="spin" className={style.loader}></div>
            <div id='Result' className={style.secondc}>
                <button onClick={AGAIN} style={{ marginTop: '10px', marginBottom: '10px' }} className={style.btnc}>AGAIN</button>
                <div className={style.demo}>
                    <div className={style.box1}>
                        <p className={style.para}>
                            Word Per Minute
                        </p>
                        <p id="words" className={style.round}>00</p>
                    </div>
                    {/* <span>+</span> If you want toremove the coment than you will adjust the the display gap also  */}
                    <div className={style.box2}>
                        <p className={style.para}>
                            Accuracy
                        </p>
                        <p id="Accur" className={style.round}>00</p>

                    </div>
                    {/* <span>=</span> If you want toremove the coment than you will adjust the the display gap also */}
                    <div className={style.box3}>
                        <p className={style.para}>
                            Net Speed
                        </p>
                        <p id="net" className={style.round}>00</p>
                    </div>
                </div>
            </div>
        </>
    )
}
