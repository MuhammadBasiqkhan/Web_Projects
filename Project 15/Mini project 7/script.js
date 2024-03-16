let Qrcode = document.getElementById("Qrgenerator");
let urlm = document.getElementById("url");
let middleelement = document.querySelector(".middle");
let container = document.querySelector(".Qrcodecontainer");


Qrcode.addEventListener("click", async () => {
  middleelement.style.display = "flex";
  let url = urlm.value;

  try {
    let weget = await findQrcode(url);
    // console.log(weget); 
    middleelement.innerHTML = `<img src="${weget}" alt="QR Code">`; 
    container.style.height = "60%";
  } catch (error) {
    console.error("Error fetching QR code:", error);
  }
});

async function findQrcode(url) {
  let server = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;
  let response = await fetch(server);


  let blob = await response.blob(); 
  return URL.createObjectURL(blob); 
}
