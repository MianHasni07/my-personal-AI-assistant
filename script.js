let btn = document.querySelector('#btn')
let content = document.querySelector('#content')
let voice=document.querySelector("#voice")
function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day = new Date()
    let hours =day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir Hasan")
    }
    else if(hours>=12 && hours<18){
        speak("Good afternoon Sir Hasan")
    }
     else{
        speak("Good Evening Sir Hasan")
     }
}
// window.addEventListener('load',wish=>{
//     wishMe()
//  })

 let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
 let recognition = new speechRecognition()
 recognition.onresult=(event)=>{
    const transcript= event.results[0][0].transcript
    // let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    //  console.log(transcript)
    // takeCommand(transcript)
 }
 recognition.onresult = (event)=>{
    if(event.results && event.results[0] && event.results[0][0]){
        const transcript = event.results[0][0].transcript
        content.innerText = transcript
        // console.log(transcript)
        takeCommand(transcript.toLowerCase())
    }else{
        console.log("no speech detected")
    }
    // takeCommand(transcript)
 }
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})

function takeCommand(message){
    btn.style.display="flex"
     voice.style.display="none"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir hasan,what can i help you")
    }
    else if(message.includes("who are you")){
        speak("i am a virtual assistant ,created by Sir Hasan shehbaz")
    }
    else if(message.includes("how are you")){
        speak("Alhammduleela i'm good")
    }
    else if(message.includes("thanks")){
        speak(" your welcome sir")
    }
    
    else if(message.includes("what is your name")){
        speak(" my name is Juliya,")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https:www.youtube.com/","_blank")
    }
    else if(message.includes("what is your country")){
        speak("i dont have any country because,i'm a virtual assistant")
    }
     else if(message.includes("open facebook")){
        speak("opening facebook")
        window.open("https://web.facebook.com/?_rdc=1&_rdr#","_blank")
    }
    else if(message.includes("open instagram")){
            speak("opening instagram")
            window.open("https://www.instagram.com/","_blank")
        }
     else if(message.includes("open my github account")) {
                speak("opening github account")
                window.open("https://github.com/MianHasni07","_blank")
     }
     else if(message.includes("open google")){
        speak("opening google")
        window.open("https://www.google.com/","_blank")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp")
        window.open("whatsapp://")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator://")
    }
    else if(message.includes("open contacts")){
        speak("opening contacts")
        window.open("contacts://")
    }
    else if(message.includes("open snapchat")){
        speak("opening snapchat")
        window.open("snapchat://")
    }
    else if(message.includes("open photos")){
        speak("opening photos")
        window.open("photos://")
    }
    else if(message.includes("open tiktok")){
        speak("opening tiktok")
        window.open("tiktok://")
    }
    else if(message.includes("open music")){
        speak("opening music")
        window.open("music://")
    }
    else if(message.includes("open calendar")){
        speak("opening calendar")
        window.open("calandar://")
    }
    else if(message.includes("open play store ")){
        speak("opening open")
        window.open("play store://")
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }

    else{
          let finalText="this is what i found on internet regarding" + message.replace("Juliya","") || message.replace("joliya","")
           speak(finalText)
           window.open(`https://www.google.com/search?q=${message.replace("Juliya","")}`,"_blank")
    }
     
    }
