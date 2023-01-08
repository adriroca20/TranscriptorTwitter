async function getTranscription(url:String): Promise<any>{
    const requestOptions:any = {
        method: 'GET',
        redirect: 'follow'
      };
      
    return await fetch("http://127.0.0.1:8000/transcript/?url=" + url, requestOptions).then(response => response.blob()).then( blob => {
        var a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.setAttribute("download", "prueba.pdf");
        a.click()
      });
}

export {getTranscription};