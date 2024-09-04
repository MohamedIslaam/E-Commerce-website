function validateShippingDetails() {
  let name = document.getElementById("shippingName").value;
  let address = document.getElementById("shippingAddress").value;

  if (name.trim() === "" || address.trim() === "") {
      // Invalid input, apply red color indicator
      document.getElementById("shippingName").style.borderColor = "red";
      document.getElementById("shippingAddress").style.borderColor = "red";
      return false;
  } else {
      // Valid input, apply green color indicator
      document.getElementById("shippingName").style.borderColor = "green";
      document.getElementById("shippingAddress").style.borderColor = "green";
      return true;
  }
}

// Function to validate payment information
function validatePayment() {
  let cardNumber = document.getElementById("cardNumber").value;
  let expiryMonth = document.getElementById("expiryMonth").value;
  let expiryYear = document.getElementById("expiryYear").value;
  let cvv = document.getElementById("cvv").value;

  // Implement your payment validation logic here
  // For demonstration purposes, let's assume all fields are required

  if (cardNumber.trim() === "" || expiryMonth.trim() === "" || expiryYear.trim() === "" || cvv.trim() === "") {
      // Invalid input, apply red color indicator
      document.getElementById("cardNumber").style.borderColor = "red";
      document.getElementById("expiryMonth").style.borderColor = "red";
      document.getElementById("expiryYear").style.borderColor = "red";
      document.getElementById("cvv").style.borderColor = "red";
      return false;
  } else {
      // Valid input, apply green color indicator
      document.getElementById("cardNumber").style.borderColor = "green";
      document.getElementById("expiryMonth").style.borderColor = "green";
      document.getElementById("expiryYear").style.borderColor = "green";
      document.getElementById("cvv").style.borderColor = "green";
      return true;
  }
}

// Function to validate promo code format
function validatePromoCode() {
  let promoCode = document.getElementById("promoCode").value;

  // Implement your promo code validation logic here
  // For demonstration purposes, let's assume a predefined list of valid codes

  let validPromoCodes = ["SUMMER20", "FREESHIP", "SALE50"];

  if (validPromoCodes.includes(promoCode.toUpperCase())) {
      // Valid promo code, apply green color indicator
      document.getElementById("promoCode").style.borderColor = "green";
      return true;
  } else {
      // Invalid promo code, apply red color indicator
      document.getElementById("promoCode").style.borderColor = "red";
      return false;
  }
}

// Event listeners for form submissions

document.getElementById("shippingForm").addEventListener("submit", function(event) {
  if (!validateShippingDetails()) {
      event.preventDefault();
  }
});

document.getElementById("paymentForm").addEventListener("submit", function(event) {
  if (!validatePayment()) {
      event.preventDefault();
  }
});

document.getElementById("promoCodeForm").addEventListener("submit", function(event) {
  if (!validatePromoCode()) {
      event.preventDefault();
  }
});