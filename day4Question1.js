function changeImage () {
    const ele= document.getElementById("image");
    const newUrl="data:image/jpeg;base64,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"
    ele.src= newUrl;
}

function onceagain() {
    const img= document.getElementById("image");
    const nxtUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRCJjlm-UhcHlD_QH_CEm-bt2Vx4JhA-8NWA&usqp=CAU";
    img.src= nxtUrl;
}