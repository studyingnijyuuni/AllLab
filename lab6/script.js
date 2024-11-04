const fetchButton = document.getElementById('fetchButton');
const userTables = document.getElementById('userTables');

function fetchUser(){
    let User;
    let resultUser;
    return fetch('https://randomuser.me/api')
        .then(response => {
                if (!response.ok)
                    { throw new Error('Відповідь не ОК!'); }
                return response.json();
        }).then(mydata => {
                User = mydata.results[0];
                resultUser = {
                    picture: User.picture?.large,
                    name: (User.name.title + ' ' + User.name.first + ' ' + User.name.last),
                    city: User.location?.city,
                    country: User.location?.country,
                    postcode: User.location?.postcode
                };
                return resultUser;
        }).catch(error => {
            console.error('Проблема з отриманням даних:', error);
        });
}

function addTableUser(passedUser){
    console.log(userTables);
    console.log(passedUser);

    let photo = document.createElement('img');
    photo.src = passedUser.picture;
    let userPhoto = document.createElement('tr');
    userPhoto.className = "phototr";
    userPhoto.appendChild(photo);

    let userName = document.createElement('tr');
    userName.textContent = 'Ймення: ' + passedUser.name;
    let userCity = document.createElement('tr');
    userCity.textContent = 'Місто: ' +  (passedUser.city);
    let userCountry = document.createElement('tr');
    userCountry.textContent = 'Країна: ' +  (passedUser.country);
    let userPostcode = document.createElement('tr');
    userPostcode.textContent = 'Поштовий код: ' +  (passedUser.postcode);

    let userTable = document.createElement('table');
    userTable.className = 'userTable';
    userTable.appendChild(userPhoto);
    userTable.appendChild(userName);
    userTable.appendChild(userCity);
    userTable.appendChild(userCountry);
    userTable.appendChild(userPostcode);

    userTables.appendChild(userTable);

    console.log(userTables);
}

fetchButton.addEventListener('click', function(){
    let filteredUser;
    fetchUser().then(resultData =>{
        filteredUser = resultData;
        if(userTables.childNodes.length > 4)
        {
            userTables.innerHTML='';
        }
        addTableUser(filteredUser);
    });

})