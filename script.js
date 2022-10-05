function helloWorld() {
    alert("Hello world");
}

// helloWorld();

let car = {
    make: "Ford",
    model: "Mustang",
    color: "Blue",
    drive: function() {
        alert("vroom vroom!");
    }
}

// car.drive();

const myForm = document.getElementById('myForm');

let fname = document.querySelector('#fname'),
    textarea = document.querySelector('textarea'),
    select = document.querySelector('select');

let alertType = (e) => console.log(e.type);

fname.addEventListener('focus', alertType);
fname.addEventListener('blur', alertType);

textarea.addEventListener('focus', alertType);
textarea.addEventListener('blur', alertType);

select.addEventListener('focus', alertType);
select.addEventListener('blur', alertType);

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // etc.

    // formData = new FormData(myForm);
    // console.log(formData);

    let _fname = fname.value;
    let _text = textarea.value;
    let _select = select.value

    console.log(_fname.length);

    // 0 = false
    // 1 = true

    // ! = logical not operator

    if (_fname.length == 0) {
        console.log('first name field empty');
        fname.classList.add('error');
    }
});