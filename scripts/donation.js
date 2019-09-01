const API_publicKey = "FLWPUBK-ee4f50e2181a7717274f1ef058927eae-X";

function payWithRave() {
    var x = getpaidSetup({
        PBFPubKey: API_publicKey,
        customer_email: "test@test.com",
        customer_firstname: "Test",
        customer_lastname: "Testing",
        amount: 2000,
        customer_phone: "234099940409",
        currency: "NGN",
        country: "NG",
        txref: "rave-123456",
        meta: [{
            metaname: "flightID",
            metavalue: "AP1234"
        }],
        onclose: function() {},
        callback: function(response) {
            var txref = response.tx.txRef; // collect txRef returned and pass to a server page to complete status check.
            console.log("This is the response returned after a charge", response);
            if (
                response.tx.chargeResponseCode == "00" ||
                response.tx.chargeResponseCode == "0"
            ) {
                // redirect to a success page
            } else {
                // redirect to a failure page.
            }

            x.close(); // use this to close the modal immediately after payment.
        }
    });
}
