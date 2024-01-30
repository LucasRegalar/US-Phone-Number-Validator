const phoneInput = document.getElementById("phone-input");
const resultsList = document.getElementById("results-list");
const checkBtn = document.getElementById("submit-btn");
const clearBtn = document.getElementById("clear-btn");


const numberValidator = (input) => {

    if (isInputEmpty(input)) {

        window.alert("Please provide a phone number");

        return;
    }
   
    addResult(isPhoneNumber(input));
}

/* These are the valid formats for US phone numbers:

1 555-555-5555
1 (555) 555-5555
1(555)555-5555
1 555 555 5555
5555555555
555-555-5555
(555)555-5555 */

const isPhoneNumber = (input) => {
    const regex = /^1?[\s]*(\d{3}|\(\d{3}\))[-\s]*\d{3}[-\s]*\d{4}$/; 
    const isValid = regex.test(input);
    
    return isValid;
};

const isInputEmpty = (input) => {
if (input === "") {

    return true;
} else {

    return false;
}
};

const addResult = (isNumber) => {
    
    const resultClass = isNumber ? "valid-number" : "invalid-number";
    const resultText = isNumber ? "Valid" : "Invalid";

    resultsList.innerHTML += `<p class="result ${resultClass}">${resultText} US number: <br />${phoneInput.value}</p>`
};

const clearResultsList = () => {
    resultsList.innerHTML = "";
};

checkBtn.addEventListener("click", (e) => {
    e.preventDefault();
    numberValidator(phoneInput.value);
})

clearBtn.addEventListener("click", (e) => {
    e.preventDefault();
    clearResultsList();
})