function valCreds(){
    //Input Validation Start
    console.log("checkCreds() started");

    //Variable set
    var firstNameV;
    var lastNameV;
    var zipCodeV;
    var fullName;
    var fullNameLength;
    var zipCodeNum;

    //Variable hold
    //Name store and readback
    firstNameV = document.getElementById("firstName").value;
    console.log("The first was submitted as " + firstNameV);
    lastNameV = document.getElementById("lastName").value;
    console.log("The last was submitted as " + lastNameV);
    //Zip Code store and readback
    zipCodeV = document.getElementById("zipCode").value;
    console.log("The Zip Code was submitted as " + zipCodeV);
    //Full name parse
    fullName = firstNameV + " " + lastNameV;
    console.log("The full name was submitted as " + fullName);
    fullNameLength = fullName.length;
    console.log("The length of the full name is " + fullNameLength + " characters");
    //Zip Code parse
    zipCodeNum = parseInt(zipCodeV);
    console.log("The zip code number is " + zipCodeNum);

    //Limit checks: names under 20 characters, zip under 5 characters
    if(fullNameLength > 20){
        document.getElementById("loginStatus").innerHTML = "Invalid Full Name. Over 20 Characters.";
        console.log("Name error.");
    }
    else if(zipCodeV.length != 5){
        document.getElementById("loginStatus").innerHTML = "Invalid Zip Code. Less or More than 5 Characters.";
        console.log("Zip error.");
    }
    else{
        console.log("Validated successfully.");
        document.getElementById("loginStatus").innerHTML = "Login Successful";
        alert("Login Validated. Welcome " + fullName + ".");
    }
}