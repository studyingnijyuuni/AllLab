const pibInput = document.getElementById('pibInput');
const phoneInput = document.getElementById('phoneInput');
const facultyInput = document.getElementById('facultyInput');
const dateInput = document.getElementById('dateInput');
const cityInput = document.getElementById('cityInput');

function clearInputsBorder()
{
    pibInput.style.border = "2px solid black";
    phoneInput.style.border = "2px solid black";
    facultyInput.style.border = "2px solid black";
    dateInput.style.border = "2px solid black";
    cityInput.style.border = "2px solid black";
}

document.getElementById('confirmButton').addEventListener('click', function () {
    clearInputsBorder();

    const nameF = pibInput.value;
    const phoneF = phoneInput.value;
    const facultyF = facultyInput.value;
    const dateF = dateInput.value;
    const cityF = cityInput.value;
    let result = '';

    const nameRegex = /^[А-ЩЬЮЯҐЄІЇа-щьюяґєії']+ [А-ЩЬЮЯҐЄІЇ]\.[А-ЩЬЮЯҐЄІЇ]\.$/;
    const phoneRegex = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    const facultyRegex = /^[А-ЩЬЮЯҐЄІЇ]{4}$/;
    const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
    const addressRegex = /^м\. [А-ЩЬЮЯҐЄІЇа-щьюяґєії']+$/;

    if (!nameRegex.test(nameF)) {
        result += 'Invalid Name format. ';
        pibInput.style.border = "2px solid red";
    }
    if (!phoneRegex.test(phoneF)) {
        result += 'Invalid Phone format. ';
        phoneInput.style.border = "2px solid red";
    }
    if (!facultyRegex.test(facultyF)) {
        result += 'Invalid Faculty format. ';
        facultyInput.style.border = "2px solid red";
    }
    if (!dateRegex.test(dateF)) {
        result += 'Invalid Date format. ';
        dateInput.style.border = "2px solid red";
    }
    if (!addressRegex.test(cityF)) {
        result += 'Invalid Address format. ';
        cityInput.style.border = "2px solid red";
    }

    if (result === '') {
        result = 'Success!.';
        let resultText = "Успіх!\n" +
        "Ім'я: " + nameF + "\n" +
        "Телефон: "  + phoneF + "\n" +
        "Факультет: " + facultyF + "\n" +
        "Дата народження: " + dateF + "\n" +
        "Адреса: " + cityF;
        alert(resultText);
    }
    console.log(result);
})


const myTable = document.getElementById('myTable');
const cPalette = document.getElementById('colorPalette');

const rows = document.querySelectorAll('tr');

const values = findCellnRow(); 
const neededRow = values.row;
const neededCell = values.cell;

function findCellnRow()
{
    for (let row of rows) {
        for (let cell of row.childNodes) {
            if (cell.textContent === '11') {
                return { row, cell };
            }
        }
    }
    return null;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

neededCell.addEventListener('mouseover', function () {
    neededCell.style.backgroundColor = getRandomColor()
    neededCell.style.color = getRandomColor();
});

neededCell.addEventListener('click', function () {
    neededCell.style.backgroundColor = cPalette.value;
});

neededCell.addEventListener('dblclick', function () {
    const cells = neededRow.getElementsByTagName('td')
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = cPalette.value;
    }
});