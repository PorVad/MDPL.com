function SendMail() {
    let params = {
        formNameSurname: document.getElementById("formNameSurname").value,
        formDreamNameSurname: document.getElementById("formDreamNameSurname").value,
        formBirthDay: document.getElementById("formBirthDay").value,
        formPurpose: document.getElementById("formPurpose").value,
        formIdea: document.getElementById("formIdea").value,
        formPost: document.getElementById("formPost").value
    }
    
    emailjs.send("service_jfbvomn", "template_wmjkvlm", params).then(function (res) {
        alert("Success " + res.status);
    });
}