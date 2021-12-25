
document.addEventListener('addressSelected', function(e){
    var info = e.detail;
    alert('valitud aadress: ' + info.aadress);
   });


document.addEventListener('DOMContentLoaded', () => {


    /* Display email and phone  */
    const user = 'info',
    domain = 'pesahoidja.ee',
    mail = document.getElementById('email');
            mail.innerHTML = '&nbsp;&nbsp;' + user + '@' + domain;

    const number = '+372 56243695',
    phone = document.getElementById('phone');
            phone.innerHTML = '&nbsp;&nbsp;' + number;


    /* KÜSI PAKKUMIST event listener*/
    /*
    document.getElementById("btn-jumbo").addEventListener('click', () => {
    FB.AppEvents.logEvent("{inquiry_clicked}");
    });
    */

    /*In-ADS komponendiga suhtlemine käib üle JavaScript liidese. Erinevate
tegevuste peale nagu näiteks aadressi valik, saadetakse komponendi poolt InADS komponenti kasutavale süsteemile JavaScript objekt aadressiandmetega,
kasutades DOM event’i.*/


    var inAadress = new InAadress({"container":"InAadressDiv","mode":"3","nocss":true,"appartment":2,"ihist":"1993","lang":"et"});

    
       


    /* ------   Toggle mobile menu ------    */
    document.getElementById("icon-btn").addEventListener("click",  (response) =>{
        
        response.preventDefault();
        /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
        

        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
        x.className += " responsive";
        } else {
        x.className = "topnav";
        }

        var y = document.getElementById("jumboText");
        if (y.className === "inner-jumbo") {
        y.className += " responsive-jumbo";
        } else {
        y.className = "inner-jumbo";
        }
        
    });
    



    /*  Show privacy policy with JS Modal    */

        // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn1 = document.getElementById("myBtn1");
    var btn2 = document.getElementById("myBtn2");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn1.onclick = function() {
        modal.style.display = "block";
    }
    btn2.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }






    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const data = JSON.stringify({
            name: form.elements.name.value,
            email: form.elements.email.value,
            phone: form.elements.phone.value,
            message: form.elements.message.value,
            address: form.elements.address.value,
            address2: form.elements.inads.value
        });

        console.log(data);

        fetch('/mail_debug.php', {
            method: 'POST',
            body: data
          }).then((response) => {
            if (response.ok) {
            nimi = document.getElementById("name-field").value;
            document.getElementById("contact-form").reset();

            document.getElementById("form-info").innerHTML = (`<h3>Aitäh <b>${nimi}</b>, võtame teiega peatselt ühendust!</h3>`);
            console.log('Email sent');

            }
          })
      });

    























    /*------- INQUIRY FORM  -------*/
    //Send an email
    


/*

    function send_email() {

        const data = {
            name: document.querySelector('#name').value,
            email: document.querySelector('#email').value,
            phone: document.querySelector('#phone').value,
            message: document.querySelector('#message').value,
            address: document.querySelector('#address').value,
        };

        fetch('/mail_2.php', {
        method: 'POST',
        body: JSON.stringify(data)
            
        
        
        
        
        
        /*
            JSON.stringify({
                name: document.querySelector('#name').value,
                email: document.querySelector('#email').value,
                phone: document.querySelector('#phone').value,
                message: document.querySelector('#message').value,
                address: document.querySelector('#address').value,
                })
                */



                /*

        })
        .then(data => data.json())
            .then(result => {
            console.log(result)

            document.getElementById("contact-form").reset();
            document.getElementById("form-header").innerHTML = (`Aitäh ${name}, võtame teiega peatselt ühendust!`);
            console.log('email sent');
            });

        }
        

        document.querySelector('#submit').addEventListener("click", (response) =>{
            response.preventDefault();

            send_email();

        
            console.log('button pressed');
            
    
        });



        */









        
    
    /*Get form values*/
    /*
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {

        

        const formValues = {
            name: form.elements.name.value,
            email: form.elements.email.value,
            phone: form.elements.phone.value,
            message: form.elements.message.value,
            address: form.elements.address.value,
        };

        
        const errors = validate(formValues, constraints);
        
        
        console.log(errors);
        
       document.getElementById("contact-form").reset();
       document.getElementById("form-header").innerHTML = (`Aitäh ${name}, võtame teiega peatselt ühendust!`);


    });

    */

            

});