onmessage = (e)=>{
    console.log("Nhận data từ main: "+e.data)


    postMessage(`Post từ weorker đén Main : Hi ${e.data}`);
}
