//stop looking at the source code CHEATER CHEATER PUMPKIN EATER
document.addEventListener('DOMContentLoaded', () => {
    const answerInput = document.getElementById('answerInput');
    const submitBtn = document.getElementById('submitBtn');
    const questionDiv = document.getElementById('question');
    const binaryOutput = document.getElementById('binaryOutput');
    
    const correctAnswer = "LLM THINKS THERE ARE TWO R'S IN STRAWBERRY";
    const secretBinary = "01101000 01110100 01110100 01110000 01110011 00111010 00101111 00101111 01111000 00101110 01100011 01101111 01101101 00101111 01101001 01101000 01100001 01110110 01100101 01110010 01101001 01111010 01111010 01110010 01100001 00101111 01110011 01110100 01100001 01110100 01110101 01110011 00101111 00110001 00111001 00110000 00110101 00110100 00110000 00111001 00110111 00110100 00110110 00110010 00110011 00110011 00111000 00110111 00110110 00110111 00110100 00110001 00101111 01110000 01101000 01101111 01110100 01101111 00101111 00110001";
    
    // Display initial question in binary
    const questionText = "What does the AI think about strawberries?";
    displayBinaryMessage(questionText, questionDiv);
    
    submitBtn.addEventListener('click', checkAnswer);
    answerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkAnswer();
    });
    
    function checkAnswer() {
        const userAnswer = answerInput.value.trim().toUpperCase();
        
        if (userAnswer === correctAnswer) {
            questionDiv.innerHTML = `<span class="correct">CORRECT!</span>`;
            answerInput.classList.add('hidden');
            submitBtn.classList.add('hidden');
            
            // Display the secret binary message
            binaryOutput.classList.remove('hidden');
            displayBinaryMessage(secretBinary, binaryOutput, 50, true);
            
            // Convert binary to text after display
            setTimeout(() => {
                const text = binaryToString(secretBinary);
                binaryOutput.innerHTML += `<br><br>Decoded: <a href="${text}" target="_blank">${text}</a>`;
            }, 1000);
        } else {
            questionDiv.innerHTML = "Incorrect. Try again.";
            setTimeout(() => displayBinaryMessage(questionText, questionDiv), 1000);
        }
    }
    
    function displayBinaryMessage(text, element, speed = 100, preserveSpaces = false) {
        element.innerHTML = "";
        
        if (!preserveSpaces) {
            // Convert text to binary
            let binaryString = "";
            for (let i = 0; i < text.length; i++) {
                const charCode = text.charCodeAt(i);
                binaryString += charCode.toString(2).padStart(8, '0') + " ";
            }
            text = binaryString.trim();
        }
        
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text[i];
                i++;
            } else {
                clearInterval(interval);
            }
        }, speed);
    }
    
    function binaryToString(binary) {
        const bytes = binary.split(' ');
        let str = "";
        for (let i = 0; i < bytes.length; i++) {
            str += String.fromCharCode(parseInt(bytes[i], 2));
        }
        return str;
    }
});
