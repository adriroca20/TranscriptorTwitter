async function getTranscription(url:String, opciones:any): Promise<any>{
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions:any = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  return await fetch("http://127.0.0.1:8000/transcript/?url=" + url + 
  "?name=" + opciones["name"] + "?time=" + opciones["time"] +"?user=" + opciones["user"], requestOptions).then(response => response.blob()).then( blob => {
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.setAttribute("download", "prueba.pdf");
    a.click()
  });
}

export {getTranscription};