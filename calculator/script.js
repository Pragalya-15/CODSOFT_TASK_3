let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

// Loop through all buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let value = this.innerText;

        if (value === "C") {
            display.value = "";        // Clear display
        } 
        else if (value === "=") {
            try {
                display.value = eval(display.value); // Calculate result
            } catch {
                display.value = "Error";
            }
        } 
        else {
            display.value += value;    // Append button value
        }
    });
}
