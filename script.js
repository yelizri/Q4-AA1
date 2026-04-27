function validateForm() {
            let errorIds = ['errorFName', 'errorSex', 'errorEmail', 'errorUserN', 'errorPass', 'errorQuest1', 'errorQuest2', 'errorQuest3'];
            errorIds.forEach(id => document.getElementById(id).innerHTML = '');
            document.getElementById('successMessage').innerHTML = '';

            let isValid = true;

            let x = document.forms["myForm"]["fName"].value;
            if (x == "") {
                document.getElementById('errorFName').innerHTML = "Name must be filled out";
                isValid = false;
            }

            let sexSelected = document.querySelector('input[name="sex"]:checked');
            if (!sexSelected) {
                document.getElementById('errorSex').innerHTML = "Please select your sex";
                isValid = false;
            }

            let email = document.forms["myForm"]["email"].value;
            if (email == "") {
                document.getElementById('errorEmail').innerHTML = "Email must be filled out";
                isValid = false;
            }
            let username = document.forms["myForm"]["userN"].value;
            if (username == "") {
                document.getElementById('errorUserN').innerHTML = "Username must be filled out";
                isValid = false;
            }
            let password = document.forms["myForm"]["pass"].value;
            if (password == "") {
                document.getElementById('errorPass').innerHTML = "Password must be filled out";
                isValid = false;
            }

            let quest1 = document.forms["myForm"]["quest1"].value;
            if (quest1 == "") {
                document.getElementById('errorQuest1').innerHTML = "Please select an island";
                isValid = false;
            }

            let quest2 = document.forms["myForm"]["choices"];
            if (quest2.value == "") {
                document.getElementById('errorQuest2').innerHTML = "Please make a choice";
                isValid = false;
            }

            var choices = document.getElementsByName("choices");
            for (var i=0; i<choices.length ; i++) {
                if (choices[i].checked) {
                    x += choices[i].value + " ";
                }
            }

            let quest3 = document.forms["myForm"]["quest3"];
            if (quest3.value == "") {
                document.getElementById('errorQuest3').innerHTML = "Please answer the question";
                isValid = false;
            }

            return isValid;
        }