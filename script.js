const countdown = () => {
  const countDate = new Date('October 10, 2023 09:00:00').getTime();
  const now = new Date().getTime();
  const gap = countDate - now;
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector('.day').innerText = textDay;
  document.querySelector('.hour').innerText = textHour;
  document.querySelector('.minute').innerText = textMinute;
  document.querySelector('.second').innerText = textSecond;

}

setInterval(countdown, 1000)

let commentArr = []

const textBox = document.querySelector('.ucapan-container');

function renderComment() {
  const randomColor = Math.floor(Math.random()*16777215);
  backgroundColor = randomColor.toString(16);
  textColor = (8388607 - (randomColor - 8388607)).toString(16);

  const commentObject = commentArr[commentArr.length - 1];

  const { profil, name, comment, currentDate } = commentObject;

  const container = document.createElement('div');
  container.classList.add("comment-container");

  const profilPict = document.createElement('div');
  profilPict.classList.add("profil-picture");
  profilPict.textContent = profil;
  profilPict.style.backgroundColor = "#" + backgroundColor;
  profilPict.style.color = "#" + textColor;

  const commentDetail = document.createElement('div');
  commentDetail.classList.add("comment-detail");

  const newName = document.createElement('div');
  newName.classList.add("nama")
  newName.textContent = name;

  const newComment = document.createElement('div');
  newComment.classList.add("comment");
  newComment.textContent = comment;

  const newDate = document.createElement('div');
  newDate.classList.add("date");
  newDate.textContent = currentDate;

  container.appendChild(profilPict);
  container.appendChild(commentDetail);

  commentDetail.appendChild(newName);
  commentDetail.appendChild(newComment);
  commentDetail.appendChild(newDate);

  textBox.insertAdjacentElement("beforeend", container);
}

document.querySelector('.submit-button').addEventListener('click', addComment)


function addComment() {
  const nameInputElement = document.querySelector('.js-nama');
  const name = nameInputElement.value;

  const profil = name.charAt(0).toUpperCase();

  const commentInputElement = document.querySelector('.js-comment');
  const comment = commentInputElement.value;

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"]
  monthString = monthName[month]
  let currentDate = `${year}, ${day} ${monthString}`

  if (name && comment !== ''){
    commentArr.push({
      profil,
      name,
      comment,
      currentDate
    })
  };

  nameInputElement.value = '';
  commentInputElement.value = '';
  renderComment();
}
