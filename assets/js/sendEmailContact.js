// Used Code Institute lecture series on EmailJs as a refernce source.

function sendMail(contactForm) {
    emailjs.send("gmail", "template_epikr0t", {
            "name": contactForm.name.value,
            "email": contactForm.email.value,
            "projectsummary": contactForm.projectsummary.value
        })

        .then(
            function () {
                document.getElementById("btn-submit").innerHTML = "Submitted!";
                alert("Thank you, we will be in touch soon!");

            },
            function (error) {
                alert("There has been an error, please try again - thank you!", error);
            }
        );
    document.getElementById("contactForm").reset();
    return false;
}