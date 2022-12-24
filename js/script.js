let music = new Audio("audio/btn.mp3");

$("#link").change(function () { 
    const approvalFileType=["audio"];
    let uploadedFile=$(this).prop('files')[0] ;
    let fileType=uploadedFile.type.split("/")[0];
    if(!approvalFileType.includes(fileType)){    
      alert("音声ファイルのみ可能です");
      music = new Audio("audio/btn.mp3");
      return;
    }
    stop();
    const reader = new FileReader();
    reader.onload = function(e){
        const readfile = e.target.result;
        music = new Audio(readfile);
        $("#linkLabel").hide();
        $("#new").show();
    }
    reader.readAsDataURL(uploadedFile);
});

$("#btn").click(function () {
    music.currentTime = 0;
    music.play();
    music.loop = false;
});

$("#stop").click(function () {
    stop();
});

$("#new").click(function(){
    location.reload();
});

function stop(){
    music.pause();
    music.currentTime = 0;
}

window.onload = function(){
    let h = $("#btn").css("width");
    $("#btn").css("height", h)
    $("#btn").css("line-height", h)
    let n = parseInt(h.split("px")[0]);
    let t = n/2 + "px";
    $("#btn").css("border-radius", t);
    t = n/10 + "px";
    $("#btn").css("font-size",t);
    $(".btn").css("height",t);
    $(".btn").css("line-height",t);
    t = n/20 + "px";
    $("header").css("font-size",t);
    $(".btn").css("font-size",t);
    t = n/100 + "px";
    $("#btn").css("box-shadow", `${t} ${t} ${t} 0px #444`);
    $("#new").hide();
}