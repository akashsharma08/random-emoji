const btn = document.querySelector("#btn");
const emojiName = document.querySelector("#emoji-name")


const emoji = [];

async function getEmoji(){
    let result = await fetch("https://emoji-api.com/emojis?access_key=8c211499573dcdea6126edc313d8875ee29c5f27");
    data = await result.json();

    for (let index = 0; index < 1500; index++){
        emoji.push({
            emojiMain: data[index].character,
            name: data[index].unicodeName,
        });
    }
}
getEmoji();

btn.addEventListener("click", ()=>{
    const randonNumber = Math.floor(Math.random() * emoji.length );
    emojiName.innerText =  emoji[randonNumber].name;
    btn.innerText =  emoji[randonNumber].emojiMain;
    
})
