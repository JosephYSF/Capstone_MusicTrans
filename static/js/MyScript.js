function Record() {
    var xmlHttp = new XMLHttpRequest();
    var url = "/record";
    alert("record")
    xmlHttp.open("GET", url, true);
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var responseText = xmlHttp.responseText;
            var obj = JSON.parse(responseText);
            alert(obj)
            // createDataTable(obj);
            // var data = "Res: " + "\n";
            // for (var o in obj['result']) {
            //     data += obj['result'][o] + "\n";
            // }
            // var CN = obj['res'];
            // // document.getElementById("result").innerHTML = data;
            // if (true) {
            //     document.getElementById("compname").innerHTML = CN;
            //     console.log("aaaaa")
            // }

        } else if (xmlHttp.readyState == 4) {
            var error = "Wrong Input";
            // document.getElementById("result").innerHTML = error;
            document.getElementById("compname").innerHTML = error;

        }
        console.log(xmlHttp.responseText);
    };
    xmlHttp.send(null);
}

function stopRecord() {
    var xmlHttp = new XMLHttpRequest();
    var url = "/stop";
    alert("stop")
    xmlHttp.open("GET", url, true);
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var responseText = xmlHttp.responseText;
            var obj = JSON.parse(responseText);
            alert(obj)
            // createDataTable(obj);
            // var data = "Res: " + "\n";
            // for (var o in obj['result']) {
            //     data += obj['result'][o] + "\n";
            // }
            // var CN = obj['res'];
            // // document.getElementById("result").innerHTML = data;
            // if (true) {
            //     document.getElementById("compname").innerHTML = CN;
            //     console.log("aaaaa")
            // }

        } else if (xmlHttp.readyState == 4) {
            var error = "Wrong Input";
            // document.getElementById("result").innerHTML = error;
            document.getElementById("compname").innerHTML = error;

        }
        console.log(xmlHttp.responseText);
    };
    xmlHttp.send(null);
}

function trans() {
    var xmlHttp = new XMLHttpRequest();
    var url = "/trans";
    alert("trans")
    xmlHttp.open("GET", url, true);
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var responseText = xmlHttp.responseText;
            var obj = JSON.parse(responseText);
            location.reload(true)
            alert(obj)
            document.getElementById("myimg1").src = "/Users/sf/Desktop/RU/Capstone/SourceCode/Web/static/img/spec.png";
            document.getElementById("myimg2").src = "/Users/sf/Desktop/RU/Capstone/SourceCode/Web/static/img/chroma.png";
            // createDataTable(obj);
            // var data = "Res: " + "\n";
            // for (var o in obj['result']) {
            //     data += obj['result'][o] + "\n";
            // }
            // var CN = obj['res'];
            // // document.getElementById("result").innerHTML = data;
            // if (true) {
            //     document.getElementById("compname").innerHTML = CN;
            //     console.log("aaaaa")
            // }

        } else if (xmlHttp.readyState == 4) {
            var error = "Wrong Input";
            // document.getElementById("result").innerHTML = error;
            document.getElementById("compname").innerHTML = error;

        }
        console.log(xmlHttp.responseText);
    };
    xmlHttp.send(null);
}

var $=function(sId){return document.getElementById(sId);};
function imgrefload()
{
    alert("res")
    imgObj1=$("myimg1");
    imgObj2=$("myimg2");
    imgObj1[0].src = "/Users/sf/Desktop/RU/Capstone/SourceCode/Web/static/img/spec.png"
    imgObj2[0].src = "/Users/sf/Desktop/RU/Capstone/SourceCode/Web/static/img/chroma.png"
}