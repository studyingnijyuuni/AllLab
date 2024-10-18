const colors = ["lightgreen", "lightblue"];
const textColors = ["black", "purple"];

let wasEnabled = false;
let colorQueue1 = 0;
let colorQueue2 = 0;

let element7 = document.getElementById('el7');
let element8 = document.querySelector(".el8");

element7.addEventListener('click', function() {
    if( wasEnabled==false){
        element8.innerText="Комп'ютерні ігри.  <---------------- а тепер сюди"
        element7.innerText="Спати.";
        wasEnabled = true;
    }
    element7.style.backgroundColor = colors[colorQueue1];
    element7.style.color = textColors[colorQueue1];

    colorQueue1 = (colorQueue1 == 0)? 1:0;
});

element8.addEventListener('click', function() {
    element8.innerText="Комп'ютерні ігри.";

    element8.style.backgroundColor = colors[colorQueue2];
    element8.style.color = textColors[colorQueue2];

    colorQueue2 = (colorQueue2 == 0)? 1:0;
})

document.getElementById('deleteButton').addEventListener('click', function(){
    document.getElementById('photoKherson').remove();
});

document.getElementById('addButton').addEventListener('click', function(){
    let khersonPhoto = document.createElement('img');

    khersonPhoto.id = "photoKherson";
    khersonPhoto.src = "https://i.ibb.co/9pqKL1m/2024-09-20-124939046.png";
    khersonPhoto.alt = "2024-09-20-124939046";
    khersonPhoto.className = "photoKherson";

    document.getElementById('linkKherson').appendChild(khersonPhoto);
});

document.getElementById('upSizeButton').addEventListener('click', function(){
    let khersonPhotos = document.querySelectorAll(".photoKherson");
    khersonPhotos.forEach( function(element) {
        let newWidth = parseInt(window.getComputedStyle(element).width);
        let newHeight = parseInt(window.getComputedStyle(element).height);
        newWidth += 20;
        newHeight += 20;
        element.style.width=newWidth+'px';
        element.style.height=newHeight+'px';
    })
});

document.getElementById('downSizeButton').addEventListener('click', function(){
    let khersonPhotos = document.querySelectorAll(".photoKherson");
    khersonPhotos.forEach( function(element) {
        let newWidth = parseInt(window.getComputedStyle(element).width);
        let newHeight = parseInt(window.getComputedStyle(element).height);
        newWidth -= 20;
        newHeight -= 20;
        element.style.width=newWidth+'px';
        element.style.height=newHeight+'px';
    })
});