function onScanSuccess(decodedText, decodedResult) {
  console.log("Scanned barcode: ", decodedText);
  document.getElementById('result').innerText = `Scanned: ${decodedText}`;
}

function onScanFailure(error) {
  // Ignore scan failure errors for now
}

// ✅ SIMPLER facingMode hint
const html5QrcodeScanner = new Html5QrcodeScanner(
  "reader", 
  { fps: 10, qrbox: 250, facingMode: "environment" }, 
  false
);

html5QrcodeScanner.render(onScanSuccess, onScanFailure);

