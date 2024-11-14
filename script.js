const contactForm=document.getElementById("contactForm"); alert("work")
contactForm.addEventListener("submit",sendMail);
function sendMail(event){
    alert("work")
    event.preventDefault();

    let params= {

        name : document.getElementById("fullname").value,
        email_id : document.getElementById("emailid").value,
        message : document.getElementById("message").value,
    }

console.log(params);
emailjs.sendForm("service_8te05xw","template_1mgn2sv","#contactForm","FMlBlJBSzhYVp3pFi").then(()=>{
    console.log("message send")
}).catch((error)=>{
     console.error("Email sending failed:",error);
})}
// function validate(){
//     var email =document. getElementById("emailid").value;
//     var reg =/^([a-zA-Zo-9\._]+)@([a-zA-Z0-9])+.([a-z]+)$/;
//     var result=reg.test(emailid);
//     if (result==false){
//         alert("sorry invalid Email ID");
//         return false;
//     }
//     return true;
// }

