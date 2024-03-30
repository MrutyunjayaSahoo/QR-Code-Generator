const qrInp = document.querySelector("#qr-input");
const qrImg = document.querySelector("#qr-img");
const qrBtn = document.querySelector("#qr-button");
const errorText = document.querySelector(".fortext");

qrBtn.addEventListener("click", () => {
  const inpValue = qrInp.value;
  if (inpValue.trim() === "") {
    // alert("Enter a valid URL🌐");
 
    errorText.textContent = "Enter a valid URL";
    qrImg.src = "";
    return;
  } else {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inpValue}`;
    qrImg.alt = `QR code for ${inpValue}`;
    errorText.textContent = "";
  }
});
