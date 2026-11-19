"use strict";

//////////////////////////////////////////
// Add dynamic typing affect on home page
////////////////////////////////////////////

function typing_animation()  {
    const first_part = document.querySelector("#first-line");
    const second_part = document.querySelector("#second-line");

    const first_text = "Find Your People";
    const second_text = "At MDX";

    function textTypingEffect(element, text, i = 0) {
        if (i < text.length) {
            element.textContent += text[i];
            setTimeout(() => textTypingEffect(element, text, i + 1), 100);
            
        } else if (element === first_part) {
            textTypingEffect(second_part, second_text);
        }
    }

    textTypingEffect(first_part, first_text);
}

// run typing affect only on home page
if (document.getElementById("first-line")) {
    typing_animation();
}
