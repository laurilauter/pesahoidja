

document.addEventListener('DOMContentLoaded', () => {


    /* Display email and phone  */
    const user = '<a href="mailto:info',
    domain = 'pesahoidja.ee">info@pesahoidja.ee</a>',
    mail = document.getElementById('email');
            mail.innerHTML = '&nbsp;&nbsp;' + user + '@' + domain;

    const number = '<a href="tel:56243695">+372 5624 3695</a>',
    phone = document.getElementById('phone');
            phone.innerHTML = '&nbsp;&nbsp;' + number;


    /* ------   Toggle mobile menu ------    */
    document.getElementById("icon-btn").addEventListener("click",  (response) =>{
        
        response.preventDefault();

        /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
        
        
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
        x.className += " responsive";
        document.getElementById("myTopnav").style.position = "relative";
        } else {
        x.className = "topnav";
        document.getElementById("myTopnav").style.position = "absolute";

        }
        /*
        var y = document.getElementById("jumboText");
        if (y.className === "inner-jumbo") {
        y.className += " responsive-jumbo";
        } else {
        y.className = "inner-jumbo";
        }
        */
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


    // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
    
    window.onscroll = function() {scrollFunction()};

    
    function scrollFunction() {
    
    if (window.innerWidth > 700) {

            if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
                /* laia ekraani sticky menu*/
                document.getElementById("myTopnav").className = "topnav sticky";
                
                document.getElementById("myTopnav").style.backgroundColor = "whitesmoke";
                
                document.getElementById("myTopnav").style.borderBottom = "1px dotted silver";

                document.getElementById("nav-list").childNodes[1].style.color = "#58585B";
                document.getElementById("nav-list").childNodes[3].style.color = "#58585B";
                document.getElementById("nav-list").childNodes[5].style.color = "#58585B";
                document.getElementById("nav-list").childNodes[7].style.color = "#58585B";
                /*
                document.getElementById("nav-list").style.justifyContent = "space-around";
                */
                document.getElementById("myTopnav").style.position = "fixed";
                document.getElementById("logo-div").style.display = "block";
                document.getElementById("myTopnav").style.marginTop = "0px";
            } else {
                /* laia ekraani top menu*/
                document.getElementById("myTopnav").className = "topnav";

                document.getElementById("myTopnav").style.backgroundColor = "transparent";
                
                document.getElementById("myTopnav").style.borderBottom = "none";

                document.getElementById("nav-list").childNodes[1].style.color = "#E6E7E8";
                document.getElementById("nav-list").childNodes[3].style.color = "#E6E7E8";
                document.getElementById("nav-list").childNodes[5].style.color = "#E6E7E8";
                document.getElementById("nav-list").childNodes[7].style.color = "#E6E7E8";
                /*
                document.getElementById("nav-list").style.justifyContent = "space-around";
                */
                document.getElementById("myTopnav").style.position = "absolute";
                document.getElementById("logo-div").style.display = "none";
                document.getElementById("myTopnav").style.marginTop = "50px";
                }
        } else {
                /* kitsa ekraani top menu*/
            if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
                document.getElementById("myTopnav").style.display = "none";
                /*
                document.getElementById("myTopnav").style.backgroundColor = "grey";
                */
            } else {
                /* kitsa ekraani sticky menu*/
                document.getElementById("logo").style.display = "none";
                document.getElementById("myTopnav").style.display = "block";
                }

        }
    }





    /*  -----------  CONTACT FORM  -----------  */


    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const data = JSON.stringify({
            name: form.elements.name.value,
            email: form.elements.email.value,
            phone: form.elements.phone.value,
            message: form.elements.message.value,
            address: form.elements.address.value,
        });

        fetch('/mail.php', {
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
            

});