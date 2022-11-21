function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      number: document.getElementById("number").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_4h4r72f";
    const templateID = "template_vq1792x";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("number").value = "";
          document.getElementById("subject").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }