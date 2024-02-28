import React, { useState } from 'react'

export default function TextForm(props) {

    // English to binary
    const textToBinary = (text) => {
        let binary = '';
        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i).toString(2);
            binary += '0'.repeat(8 - charCode.length) + charCode + ' ';
        }
        return binary.trim();
    }
    
    // Binary to english
    const binaryToText = (binary) => {
        let text = '';
        binary.split(' ').forEach((binaryChar) => {
            text += String.fromCharCode(parseInt(binaryChar, 2));
        });
        return text;
    }
    
    // PlainText to Ciphertext
    const textToCipher = (text) => {
        let cipherText = '';
        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i);
            let shiftedCharCode = charCode + 3; // Shift by 3 positions
            cipherText += String.fromCharCode(shiftedCharCode);
        }
        return cipherText;
    }
    
    // Ciphertext to Plaintext
    const cipherToText = (cipher) => {
        let plainText = '';
        for (let i = 0; i < cipher.length; i++) {
            let charCode = cipher.charCodeAt(i);
            let originalCharCode = charCode - 3; // Reverse the shift by 3 positions
            plainText += String.fromCharCode(originalCharCode);
        }
        return plainText;
    }
    
    const convertToBinary = () => {
        let binaryText = textToBinary(text);
        setText(binaryText);
    }
    
    const convertToEnglish = () => {
        let englishText = binaryToText(text);
        setText(englishText);
    }
    
    const convertToCipher = () => {
        let cipherText = textToCipher(text);
        setText(cipherText);
    }

    const convertToText = () => {
        let plainText = cipherToText(text);
        setText(plainText);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleUpChange = (event) => {
        setText(event.target.value);
    }

    const handleClearText = () => {
        let newText = ("");
        setText(newText)
    }
    


    const [text, setText] = useState("")
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div class="form-group">
                    <textarea class="form-control" value={text} onChange={handleUpChange} id="myBox" rows="6" placeholder='Enter Text here'></textarea>
                </div>
                <button id='button' className="btn btn-primary my-1 mx-2" onClick={convertToBinary}>English to Binary</button>
                <button id='button' className="btn btn-primary my-1 mx-2" onClick={convertToEnglish}>Binary to English</button>
                <button id='button' className="btn btn-primary my-1 mx-2" onClick={convertToCipher}>Convert to Cipher</button>
                <button id='button' className="btn btn-primary my-1 mx-2" onClick={convertToText}>Convert to PlainText</button>
                <button id='button' className="btn btn-primary my-1 mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button id='button' className="btn btn-primary my-1 mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button id='button' className="btn btn-primary my-1 mx-2" onClick={handleClearText}>Clear Text</button>
                
            </div>
            <div className="container">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read (Standard)</p>
                <p>{text.split(".").length} Sentences</p>

                <h2>Preveiw</h2>
                <p>{text}</p>

            </div>

        </>
    )
}
