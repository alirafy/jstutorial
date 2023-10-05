var request = new XMLHttpRequest();
request.open("GET", "http://localhost:4000/data.json", false);
request.setRequestHeader('Access-Control-Allow-Origin', '*');
request.send();

request.onreadystatechange = () => {
    if (request.status === 200 && request.readyState === XMLHttpRequest.DONE) {
        console.log(request);
        var responseText = request.responseText;
        var data = JSON.parse(responseText);
        document.write(data.name);
        // document.write(request.responseText);
        
    }
    else {
        console.log("error");
    }
}

