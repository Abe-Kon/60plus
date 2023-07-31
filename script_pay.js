const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(e) {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key: 'pk_live_31569a191025ecc5e71053b9d47e1f99a909440c', // Replace with your public key
    email: document.getElementById("email").value,
    amount: document.getElementById("amount").value * 100,
    currency: 'GHS', //document.getElementById('Currency').value, // Use GHS for Ghana Cedis or USD for US Dollars
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    
    onClose: function(){

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, close!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    },
    callback: function(response){
    //   let message = 'Payment complete! Reference: ' + response.reference;
    //     alert(message)
    Swal.fire({
        title: 'Done',
        text: "Payment is a success!",
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, close!'
      })

    }
  });

  handler.openIframe();
}

// var paymentForm = document.getElementById('paymentForm');
// paymentForm.addEventListener('submit', payWithPaystack, false);
// function payWithPaystack() {
//   var handler = PaystackPop.setup({
//     key: 'pk_test_01c82c6b67442a1caf3c5898012fd604e1a5e0ba', // Replace with your public key
//     email: document.getElementById('email').value,
//     amount: document.getElementById('amount').value * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
//     currency: document.getElementById('Currency').value, // Use GHS for Ghana Cedis or USD for US Dollars
//     ref: ''+Math.floor((Math.random() * 1000000000) + 1), // Replace with a reference you generated
//     callback: function(response) {
//       //this happens after the payment is completed successfully
//       alert('success!!')
//       var reference = response.reference;
//       alert('Payment complete! Reference: ' + reference);
//       // Make an AJAX call to your server with the reference to verify the transaction
//     },
//     onClose: function() {
//       alert('Transaction was not completed, window closed.');
//     },
//   });
//   handler.openIframe();
// }