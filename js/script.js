let music = new Audio(selectAudio());

//デフォルト音声の選択
function selectAudio(){
    let path = "audio/btn.mp3";
    let d = new Date();
    //クリスマス用
    if(d.getMonth() === 11 && d.getDate() > 25) path = path.replace("btn", "Xmas");
    return path;
}

//Fileがアップロードされたとき
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

//ボタンが押されたとき音を鳴らす
$("#inf").click(function () {
    music.currentTime = 0;
    music.play();
    music.loop = false;
});


//Stop button
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
/*//ボタンCSSの調整
window.onload = function(){
    let h = $("#inf").css("width");
    let n = parseInt(h.split("px")[0]);
    let t = n/10 + "px";
    $("#name").css("font-size",t);
    t = n/25 + "px";
    $("header").css("font-size",t);
    $(".btn").css("font-size",t);
    t = n/100 + "px";
    $("#inf").css("box-shadow", `${t} ${t} ${t} 0px #444`);
    $("#new").hide();
}
//*/