// FOR CONTAINER 1 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<

let container = document.getElementById('container');
let fname = document.getElementById('fname');
let fnameRes = document.getElementById('fname-res');
let lname = document.getElementById('lname');
let lnameRes = document.getElementById('lname-res');
let tel = document.getElementById('tel');
let telRes = document.getElementById('tel-res');

// FOR CONTAINER 2 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<

let container2 = document.getElementById('container2');
let mDegree = document.getElementById('mdegree');
let mDegreeRes = document.getElementById('mdegree-res');
let IntDegree = document.getElementById('Intdegree');
let IntDegreeRes = document.getElementById('Intdegree-res');
let BSDegree = document.getElementById('BSdegree');
let BSDegreeRes = document.getElementById('BSdegree-res');

// FOR CONTAINER 3 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<

let container3 = document.getElementById('container3');
let email = document.getElementById('email');
let emailRes = document.getElementById('email-res');
let pass = document.getElementById('pass');
let passRes = document.getElementById('pass-res');
let confirmPass = document.getElementById('confirmPass');
let confirmPassRes = document.getElementById('confirm-res');

let input = document.getElementsByClassName('inp').value;
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let backbtn1 = document.getElementById('backbtn1');
let backbtn2 = document.getElementById('backbtn2');

// NEXT BUTTON 1  <<<<<<<<<<<<<<< 

btn1.addEventListener('click', function () {
    if (fname.value == '') {
        document.getElementById('fname-res').innerHTML = 'Fill this field!';
    }

    else if (lname.value == '') {
        document.getElementById('fname-res').innerHTML = '';
        document.getElementById('lname-res').innerHTML = 'Fill this field!'
        document.getElementById('fname-res').value = ''
    }
    else if (tel.value == '') {
        document.getElementById('fname-res').innerHTML = '';
        document.getElementById('lname-res').innerHTML = '';
        document.getElementById('tel-res').innerHTML = 'Fill this field!'
        document.getElementById('fname-res').value = '';
    }

    else {
        document.getElementById('container').style.display = 'none';
        document.getElementById('container2').style.display = 'block';

        let elements = document.getElementsByClassName('border');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.width = '50%';
            elements[i].style.transition = '3s';
        }
    }

});

// BACK BUTTON 1 <<<<<<<<<<<<<<<<<<<<

backbtn1.addEventListener('click', function () {
    document.getElementById('tel-res').innerHTML = '';
    document.getElementById('lname-res').innerHTML = '';
    document.getElementById('fname-res').innerHTML = '';
    document.getElementById('container').style.display = 'block';
    document.getElementById('container2').style.display = 'none';
    document.getElementById('container3').style.display = 'none';

    let elements = document.getElementsByClassName('border');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.width = '0%';
    }
});

// NEXT BUTTON 2  <<<<<<<<<<<<<<<

btn2.addEventListener('click', function () {
    if (mDegree.value == '') {
        document.getElementById('mdegree-res').innerHTML = 'Fill this field!';
    }
    else if (IntDegree.value == '') {
        document.getElementById('mdegree-res').innerHTML = '';
        document.getElementById('Intdegree-res').innerHTML = 'Fill this field!'
        document.getElementById('mdegree-res').value = ''
    }
    else if (BSDegree.value == '') {
        document.getElementById('mdegree-res').innerHTML = '';
        document.getElementById('Intdegree-res').innerHTML = '';
        document.getElementById('BSdegree-res').innerHTML = 'Fill this field!'
        document.getElementById('mdegree-res').value = '';
    }
    else {
        document.getElementById('mdegree-res').innerHTML = '';
        document.getElementById('Intdegree-res').innerHTML = '';
        document.getElementById('BSdegree-res').innerHTML = '';
        document.getElementById('container').style.display = 'none';
        document.getElementById('container2').style.display = 'none';
        document.getElementById('container3').style.display = 'block';

        let elements = document.getElementsByClassName('border');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.width = '100%';
            elements[i].style.transition = '3s';
        }
    }
});

// BACK BUTTON 2 <<<<<<<<<<<<<<<<<<<<

backbtn2.addEventListener('click', function () {
    document.getElementById('mdegree-res').innerHTML = '';
    document.getElementById('Intdegree-res').innerHTML = '';
    document.getElementById(' BSdegree-res').innerHTML = '';
    document.getElementById('container3').style.display = 'none';
    document.getElementById('container2').style.display = 'block';

    let elements = document.getElementsByClassName('border');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.width = '50%';
    }
});

// DONE BUTTON <<<<<<<<<<<<<<<<

btn3.addEventListener('click', function () {
    if (email.value == '') {
        document.getElementById('email-res').innerHTML = 'Fill this field!';
    }
    else if (pass.value == '') {
        document.getElementById('email-res').innerHTML = '';
        document.getElementById('pass-res').innerHTML = 'Fill this field!'
        document.getElementById('email-res').value = ''
    }
    else if (confirmPass.value == '') {
        document.getElementById('email-res').innerHTML = '';
        document.getElementById('pass-res').innerHTML = '';
        document.getElementById('confirm-res').innerHTML = 'Fill this field!'
        document.getElementById('email-res').value = '';
    }

    else {
        document.getElementById('email-res').innerHTML = '';
        document.getElementById('pass-res').innerHTML = '';
        document.getElementById('confirm-res').innerHTML = '';
        document.getElementById('container').style.display = 'block';
        document.getElementById('container2').style.display = 'none';
        document.getElementById('container3').style.display = 'none';
        document.getElementById('container').innerHTML = ` <table border="1">
        <tr>
            <td class="td">Name </td>
            <td class="td">${fname.value} ${lname.value} </td>
        </tr>
        <tr>
            <td class="td">Email </td>
            <td class="td">${email.value} </td>
        </tr>
        <tr>
            <td class="td">Phone Number </td>
            <td class="td">${tel.value} </td>
        </tr>
        <tr>
            <td class="td">Matric Degree </td>
            <td class="td">${mDegree.value} </td>
        </tr>
        <tr>
            <td class="td">Intermediate Degree </td>
            <td class="td">${IntDegree.value} </td>
        </tr>
        <tr>
            <td class="td">Bachelor's Degree </td>
            <td class="td">${BSDegree.value} </td>
        </tr>
    </table>`;
        document.getElementById('container').style.borderBottom = '2px solid white';
    }
});


