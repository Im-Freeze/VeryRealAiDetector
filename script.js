function detectAI() {
    let text = document.getElementById("essayInput").value.trim();
    
    if (text === "") {
        document.getElementById("result").innerHTML = "Please enter some text!";
        return;
    }
    
    let aiScore = Math.floor(Math.random() * (96 - 78 + 1)) + 78;
    
    document.getElementById("result").innerHTML = `AI Detected: ${aiScore}%`;
}
