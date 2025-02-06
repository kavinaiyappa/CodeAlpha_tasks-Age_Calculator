function calculateAge(){
    let birthDay = document.getElementById("birthDay").value;
    let birthMonth = parseInt(document.getElementById("birthMonth").value);
    let birthYear = document.getElementById("birthYear").value;

    let today = new Date();
    let age = today.getFullYear()-birthYear;

    //Adjust age if birthday has not passed this year
    if(today.getMonth()<birthMonth||(today.getMonth()===birthMonth && today.getDate()<birthDay))
        {
            age--;
        }
        document.getElementById("result").textContent = "Your age is:" + age;
}