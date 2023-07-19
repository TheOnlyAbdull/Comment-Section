/* TODO :
1-populate the ui ON LOAD*/

// ------------Selcting DOM Element---------------
const mainContainer = document.querySelector(".content");
const replyBtns = document.querySelectorAll(".reply");
const sendBtn = document.getElementById("send");
const commentTxt = document.getElementById("sendMsg");
const activeModal = document.querySelector(".modal-overlay");
const deleteModal = document.querySelector(".delete");
const cancelModal = document.querySelector(".cancel");
// ----------------All Functions------------------

// Load page func
const pageLoads = () => {
  //display comment
  const value = JSON.parse(localStorage.getItem("value"));
  if (value) {
    console.log(value);
  }
};

//when Send button is clicked
const clickedSend = () => {
  //user comment msg
  const commentValue = sendMsg.value;

  //if a value is inputed
  if (commentValue) {
    //save comment to local storage
    // localStorage.setItem('value', JSON.stringify(commentValue));
    console.log(`Value has been inputed`);

    //get name
    const userName = getUserName();

    //create and append new comment
    createNewComment(commentValue, userName);

    //Selecting new element
    const editBtns = document.querySelectorAll('.edit');
    const deleteBtns = document.querySelectorAll(".delete");

    //When all reply button is clicked
    editBtns.forEach((editBtn) => {
      editBtn.addEventListener("click", ()=>{
        console.log(`you tried to edit`);
      });
    });

    //When all delete button is clicked
    deleteBtns.forEach((deleteBtn) => {
      deleteBtn.addEventListener("click", enableDeleteModal);
    });

    //clear the input
    commentTxt.value = "";
  } else {
    console.log(`No value inputed`);
  }
};

// when delete btn is clicked
const enableDeleteModal = (e) => {
  const commentToRemove = e.target.closest(".msg-content");
  //add modal
  activeModal.classList.add("active-modal");

  //delete modal and element
  deleteModal.addEventListener("click", () => {
    commentToRemove.remove();
    // console.log(elementToRemove);
    activeModal.classList.remove("active-modal");
    localStorage.removeItem("value");
  });

  //cancel modal
  cancelModal.addEventListener("click", () => {
    activeModal.classList.remove("active-modal");
  });
};

//getting user details from local storage
const getUserName = () => {
  //get user Name
  const userName = "Abdullah";
  // const userPic = localStorage.getItem(JSON.parse('userStoredPic'));
  return userName;
};
// display Create new comment box and append
const createNewComment = (commentValue, userName) => {
  //creating comment and add class
  const msgContentDiv = document.createElement("div");
  msgContentDiv.classList.add("msg-content");

  //inserted all element and content
  msgContentDiv.innerHTML = `<div class="comment-sec">
          <div class="text-sec">
              <div class="profile">
                  <div class="comment-pic"><img src="./images/avatars/image-maxblagun.png" alt="?"></div>
                  <p class="user-name">${userName}</p>
                  <p class="user-tag">you</p>
                  <p class="date-posted">1 month ago</p>
                  <div class="del-ed">
                      <div class="delete"><img src="./images/icon-delete.svg" alt="reply"><span class="reply-text">Delete</span></div>
                      <div class="edit"><img src="./images/icon-edit.svg" alt="reply"><span class="reply-text">Edit</span></div>
                  </div>
              </div>
              <div class="comment-text-div">
                  <p class="comment-text"> 
                      ${commentValue}
                  </p>
              </div>
          </div>
          <div class="rating-sec">
              <div class="plus"><img src="./images/icon-plus.svg" alt="+"></div>
              <p class="rating">14</p>
              <div class="minus"><img src="./images/icon-minus.svg" alt="-"></div>
          </div>
      </div>`;
  mainContainer.appendChild(msgContentDiv);
};

// ------------All Event Listeners----------------
// when page load
// window.addEventListener('load', pageLoads);

// When send button is clicked
sendBtn.addEventListener("click", clickedSend);

//break down the code into smaller functions
