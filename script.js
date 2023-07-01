javascript:(function () {
  "use strict";

  function createButton(text, data, index) {
    var container = document.createElement("div");
    Object.assign(container.style, {
      position: "absolute",
      top: "-10%", 
      left: index * 100 + "px", 
      zIndex: "9999", 
    });

    var button = document.createElement("div");
    button.innerHTML = text;
    Object.assign(button.style, {
      position: "relative",
      color: "red",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "bold",
      display: "flex",
      margin: "0 10px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      padding: "0px 4px",
      backgroundColor:"#F5F5F5",
      borderRadius:"5px"
    });

    button.addEventListener("click", function () {
      var inputField = document.querySelector("#box-chat");
      if (inputField) {
        inputField.value = data;
        updateCode(data);
      }
    });

    container.appendChild(button);
    document.querySelector(".sc-kTUwUJ.giHtTy").appendChild(container); // Append the container to the desired div
  }
  function updateCode(data) {
    var pasteButton = document.querySelector("#pasteButton");
    pasteButton.innerHTML = data;
  }
  createButton("Wlc", "You're welcome 😀 👍", 0);
  createButton("Thnx", "Thank you so much😊😊🙏",1);
  createButton("Batchs", " We have three morning batches and three evening batches: (IST)\n \n ⏰ Batch 1: 6:30 AM - 7:15 AM\n ⏰ Batch 2: 7:30 AM - 8:15 AM\n ⏰ Batch 3: 8:30 AM - 9:15 AM\n \n ⏰ Batch 4: 5:00 PM- 5:45 PM\n ⏰ Batch 5: 6:00 PM - 6:45 PM\n ⏰ Batch 6: 7:00 PM - 7:45 PM\n \n The joining link for all batches is the same and you can join any of the above 6 batches. All timings are in Indian Standard Time",2);
  createButton("Official-No", "Please message on our official Number\n\n_For any queries or clarifications please feel free to ask_\n_Mobile:_ 86000 39721\nWhatsApp: https://wa.me/918600039721", 3);
  createButton("Pay-issues", "Please let us know the error in detail.\n\nFill out this form:\n\nhttps://i.habuild.in/payment-issues", 4);
  createButton("Start-Later", "Yes, it is possible after you make the payment, you will be redirected to a form where you can choose your Start date.\n\n*Here's the payment link:* \nhttps://i.habuild.in/membershipplan", 5);
  createButton("TQ", "Thank you for your subscription  :)\n\nWe are excited to have you on board and start the journey for Yoga every day. \n\nClick here to check if you have received a confirmation of Payment:\n\nLink:➡️ wa.me/918600039721 ", 6);
  createButton("Int-Price", "*International Pricing:*\n\nThis is to inform you that the difference in our pricing is owing to the WhatsApp number that is being used and not the location.\n\nJust like how we incur additional charges when we send an SMS to an international member. Similarly, the business version of Whatsapp charges us additional too. (almost 10X price in comparison to sending it on the Indian number)\n\nIt could be the case that you're residing outside of India but have a functional Indian WhatsApp number. In that case, the INR pricing will apply to you. \n\nIn case, if you're residing in India but using an International number, then International pricing will apply to you.", 7);
  createButton("1ON1", "Our main goal is to help you develop a sustainable yoga practice by forming good habits.🤝🏻 Though our sessions don't offer individual interaction, we create a supportive environment for consistent practice.\n\nOur sessions cater to participants of all levels, focusing on habit formation✅ and integrating yoga into your daily routine. Consistency is crucial for long-term benefits.\n\nFor specific questions, reach out through our official communication channels or call +91-8600039721. Our team provides general support and guidance.\n\nParticipate actively, leverage collective support, and enjoy transformative benefits over time.💁🏻‍♀️\n\nPayment link: https://i.habuild.in/membershipplan", 8);
  
  // document.body.appendChild(pasteButton);
})();