'use strict';

fetch('./users.json')
.then(response=>response.json())
.then(appendUsersToList)
.catch(console.error);

function appendUsersToList(users){
    const usersListElem = document.getElementById('usersList');
    users.forEach(
        user => {
            usersListElem.appendChild(createUserCardElem(user));
        }
    )
}

function createUserCardElem(user){
    const userListItem = createUserListItemElem(user);
    userListItem.appendChild(createUserImageElem(user));
    userListItem.appendChild(createUserNameElem(user));
    return userListItem;
}

function createUserListItemElem(user) {
    const userListItem = document.createElement('li');
    userListItem.setAttribute('id',user.id);
    userListItem.classList.add('userListItem');
    return userListItem;
}

function createUserImageElem(user){
    const userImage = document.createElement('img');
    userImage.setAttribute('src', user.imageSrc);
    userImage.setAttribute('alt','user picture');
    const userImgContainer = document.createElement('div');
    userImgContainer.classList.add('userPictureCont');
    userImgContainer.appendChild(userImage);
    return userImgContainer;
}

function createUserNameElem({name, surname}) {
    const userFullNameElem = document.createElement('h3');
    userFullNameElem.classList.add('userFullName');
    userFullNameElem.innerText=`${name} ${surname}`;
    return userFullNameElem;
}
