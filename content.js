/** @format */

setInterval(function() {
  var chatInput = document.querySelector(".chat-input-typing-status-bar");
  if (chatInput.classList.contains("chat-input-typing-status-bar")) {
    chatInput.style.top = "-80%";
  }
}, 3000);

// Function to create the buttons
function createButton(text, data, index) {
  var container = document.createElement("div");
  container.style.position = "absolute";
  container.style.top = "-16%";
  container.style.left = index * 100 + "px";
  container.style.zIndex = "9999";

  var button = document.createElement("div");
  button.innerHTML = text;
  button.style.position = "relative";
  button.style.color = "Black";
  button.style.cursor = "pointer";
  button.style.fontSize = "13px";
  button.style.fontWeight = "bolder";
  button.style.display = "flex";
  button.style.justifyContent = "center"; 
  button.style.alignItems = "center"; 
  button.style.width = "90px"; 
  button.style.height = "24px"; 
  button.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
  button.style.backgroundColor = "#F5F5F5";
  button.style.borderRadius = "5px";
  button.style.margin = "0 5px";

  var chatArea = document.querySelector(".sc-lhVmIH.dWNeCd.chat-area");
  chatArea.style.marginBottom = "20px";

  // var chatInput = document.querySelector(".chat-input-typing-status-bar");
  // chatInput.style.top = "-80%";


  button.addEventListener("click", function () {
    var inputField = document.querySelector("#box-chat");
    if (inputField) {
      inputField.value = data;
      updateCode(data);
    }
  });

  container.appendChild(button);

  var targetNode = document.querySelector(".sc-kTUwUJ.giHtTy");
  if (targetNode) {
    targetNode.appendChild(container);
  }
}

// Function to update the code
function updateCode(data) {
  var pasteButton = document.querySelector("#pasteButton");
  if (pasteButton) {
    pasteButton.innerHTML = data;
  }
}

// Function to check if the desired div is present and run the code
function checkDivAndRunCode() {
  const targetNode = document.querySelector(".sc-kTUwUJ.giHtTy");

  if (targetNode) {
    // Div is present, run the code
    createButton("Welcome", "You're welcome 😀 👍", 0);
    createButton("Thanks", "Thank you so much😊😊🙏", 1);
    createButton(
      "Batchs",
      "We have three morning batches and three evening batches: (IST)\n\n⏰ Batch 1: 6:30 AM - 7:15 AM\n⏰ Batch 2: 7:30 AM - 8:15 AM\n⏰ Batch 3: 8:30 AM - 9:15 AM\n\n⏰ Batch 4: 5:00 PM- 5:45 PM\n⏰ Batch 5: 6:00 PM - 6:45 PM\n⏰ Batch 6: 7:00 PM - 7:45 PM\n\nThe joining link for all batches is the same, and you can join any of the above 6 batches. All timings are in Indian Standard Time",
      2
    );
    createButton(
      "Call",
      "Thank you for connecting with Habuild. 🙋🏻‍♂️\nYou can reach us, at our official calling number:📞 079 - 69213330",
      3
    );
    createButton(
      "Pay-issues",
      "Please let us know the error in detail.\n\nFill out this form:\n\nhttps://i.habuild.in/payment-issues",
      4
    );
    createButton(
      "Start-Later",
      "Yes, it is possible after you make the payment, you will be redirected to a form where you can choose your Start date.\n\n*Here's the payment link:*\nhttps://i.habuild.in/membershipplan",
      5
    );
    createButton(
      "TQ",
      "Thank you for your subscription  :)\n\nWe are excited to have you on board and start the journey for Yoga every day.\n\nClick here to check if you have received a confirmation of Payment:\n\nLink:➡️ wa.me/918600039721",
      6
    );
    createButton(
      "Int-Price",
      "*International Pricing:*\n\nThis is to inform you that the difference in our pricing is owing to the WhatsApp number that is being used and not the location.\n\nJust like how we incur additional charges when we send an SMS to an international member. Similarly, the business version of Whatsapp charges us additional too. (almost 10X price in comparison to sending it on the Indian number)\n\nIt could be the case that you're residing outside of India but have a functional Indian WhatsApp number. In that case, the INR pricing will apply to you.\n\nIn case, if you're residing in India but using an International number, then International pricing will apply to you.",
      7
    );
    createButton(
      "1ON1",
      "Our main goal is to help you develop a sustainable yoga practice by forming good habits.🤝🏻 Though our sessions don't offer individual interaction, we create a supportive environment for consistent practice.\n\nOur sessions cater to participants of all levels, focusing on habit formation✅ and integrating yoga into your daily routine. Consistency is crucial for long-term benefits.\n\nFor specific questions, reach out through our official communication channels or call +91-8600039721. Our team provides general support and guidance.\n\nParticipate actively, leverage collective support, and enjoy transformative benefits over time.💁🏻‍♀️\n\nPayment link: https://i.habuild.in/membershipplan",
      8
    );
    createButton(
      "SS",
      "Could you please share the screenshot of the payment made? Which has the date, time, and transaction id in it 🙏🙏",
      9
    );

    // Disconnect the observer after running the code
    observer.disconnect();
  }
}

// Create a new MutationObserver
const observer = new MutationObserver(checkDivAndRunCode);

// Wait for 2 seconds before checking for the div
setTimeout(function () {
  // Start observing the body for changes
  observer.observe(document.body, { childList: true, subtree: true });
}, 2000);
