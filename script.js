function onScanSuccess(decodedText, decodedResult) {
  console.log("Scanned barcode: ", decodedText);
  document.getElementById('result').innerText = `Scanned: ${decodedText}`;
}

function onScanFailure(error) {
  // console.warn(`Scan error: ${error}`);
}

// Config: facingMode 'environment' = kamera belakang
const html5QrcodeScanner = new Html5QrcodeScanner(
  "reader", 
  { fps: 10, qrbox: 250, facingMode: { exact: "environment" } },
  false
);

html5QrcodeScanner.render(onScanSuccess, onScanFailure);
