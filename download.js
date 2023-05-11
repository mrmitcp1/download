function downLoad(url,callback) {
    setTimeout(()=>{
        console.log(`downloading ${url}...`);
        callback(url)
    },1000)
}
function process(picture) {
    console.log(`processing${picture}`)
}
let url = 'https://www.javascripttutorial.net/pic.jpg';
downLoad(url,process)