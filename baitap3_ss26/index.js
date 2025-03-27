function filterValidEmails(emails) {
    return emails.filter(email => email.includes("@") && !email.includes(" "));
}

let emailList = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", " e@out.com"];

let validEmails = filterValidEmails(emailList);
console.log(validEmails); 
