// ------------Selcting DOM Element---------------
const mainContainer = document.querySelector(".content");
const replyBtns = document.querySelectorAll(".reply");
const sendBtn = document.getElementById("send");
const commentTxt = document.getElementById("sendMsg");
const activeModal = document.querySelector(".modal-overlay");
const deleteModal = document.querySelector(".delete");
const cancelModal = document.querySelector(".cancel");
const ratings = document.querySelectorAll(".rating-sec");
const plusBtns = document.querySelectorAll(".plus");
const minusBtns = document.querySelectorAll(".minus");

// ----------------All Functions------------------
//when Send button is clicked
const clickedSend = () => {
  //user comment msg
  const commentValue = sendMsg.value;
  //if a value is inputed
  if (commentValue) {
    //save comment to local storage
    // localStorage.setItem('value', JSON.stringify(commentValue));

    //get info
    const userName = getUserName();

    //create and append new comment
    createNewComment(commentValue, userName);
    //Selecting new element
    const editBtns = document.querySelectorAll(".edit");
    const deleteBtns = document.querySelectorAll(".delete");

    //When reply button is clicked
    editBtns.forEach((editBtn) => {
      editBtn.addEventListener("click", enableEditInput);
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
//when edit button in clicked
const enableEditInput = (e) => {
  //get the comment div
  const getparentDiv = e.target.closest(".msg-content");
  const replyingTo = getparentDiv.querySelector(".user-name").textContent;
  const getMsgValue = getparentDiv.querySelector(".comment-text").textContent;
  const editedValue = removeFirstWord(getMsgValue);
  const getCommentDiv = getparentDiv.querySelector(".comment-text-div");

  // get width and height of comment div
  const CommentDivHeight = getCommentDiv.getBoundingClientRect().height;
  const CommentDivWidth = getCommentDiv.getBoundingClientRect().width;

  //create new text area and btn tag and append
  const textArea = document.createElement("textarea");
  const updateBtn = document.createElement("button");
  textArea.classList.add("edit-textarea");
  updateBtn.classList.add("reply-btn", "update-btn");
  textArea.value = `${editedValue}`;
  textArea.style.width = CommentDivWidth + "px";
  textArea.style.height = CommentDivHeight + "px";
  updateBtn.textContent = "UPDATE";

  //Remove and append new child
  getCommentDiv.innerHTML = "";
  getCommentDiv.appendChild(textArea);
  getCommentDiv.appendChild(updateBtn);

  //Update comment
  document.querySelector(".update-btn").addEventListener("click", () => {
    const textAreaValue = textArea.value;
    getCommentDiv.innerHTML = "";
    const newParagraph = document.createElement("p");
    newParagraph.classList.add("comment-text");
      newParagraph.innerHTML = textAreaValue;
    if (replyingTo == `undefined`) {
      newParagraph.innerHTML = textAreaValue;
    } else {
      newParagraph.innerHTML = `<span class='replying-name'>@${replyingTo}</span> ${textAreaValue}`;
      console.log('yes');
    }
    getCommentDiv.appendChild(newParagraph);
  });
};
// when delete btn is clicked
const enableDeleteModal = (e) => {
  // Element to delete;
  const commentToRemove = e.target.closest(".msg-content");
  //add modal
  activeModal.classList.add("active-modal");

  //delete modal and element
  deleteModal.addEventListener("click", () => {
    commentToRemove.remove();
    activeModal.classList.remove("active-modal");
    // localStorage.removeItem("value");
  });

  //cancel modal
  cancelModal.addEventListener("click", () => {
    activeModal.classList.remove("active-modal");
  });
};
//remove first word
function removeFirstWord(sentence) {
  const words = sentence.trim().split(/\s+/);
  // Remove the first word (element) from the array
  words.shift();
  // Join the remaining words back into a sentence
  const newSentence = words.join(" ");
  return newSentence;
}
//positive rating
const positiveRating = (e) => {
  const ratingSec = e.target.closest(".rating-sec");
  const ratingValue = ratingSec.querySelector(".rating");
  let rating = parseInt(ratingValue.textContent);
  rating++;
  ratingValue.textContent = rating;
};

//negative rating
const negativeRating = (e) => {
  const ratingSec = e.target.closest(".rating-sec");
  const ratingValue = ratingSec.querySelector(".rating");
  let rating = parseInt(ratingValue.textContent);
  rating--;
  ratingValue.textContent = rating;
};

//When reply button button is clicked
const clickedReply = (e) => {
  //get parent div
  const clickedReplyDiv = e.target.closest(".msg-content");
  const replyingTo = clickedReplyDiv.querySelector(".user-name").textContent;
  //create new div
  const replyCommentDiv = document.createElement("div");
  replyCommentDiv.classList.add("reply-content", "reply-input");
  replyCommentDiv.innerHTML = `<div class="reply-text">
    <textarea class="reply-textarea" id="" placeholder="@${replyingTo}:"></textarea>
  </div>
  <div class="reply-pic">
    <img src="./images/avatars/image-maxblagun.png" alt="?">
  </div>
  <div class="reply-btn-container">
    <button class="reply-btn">Reply</button>
  </div>`;
  // Append the div after the clicked reply div
  clickedReplyDiv.insertAdjacentElement("afterend", replyCommentDiv);

  //Send and Post reply
  const replyMsg = document.querySelector(".reply-textarea");
  const postReplyBtns = document.querySelectorAll(".reply-btn");
  postReplyBtns.forEach((postReplyBtn) => {
    postReplyBtn.addEventListener("click", (e) => {
      const replyMsgValue = replyMsg.value;
      if (replyMsgValue) {
        //change div class and content
        replyCommentDiv.classList.remove("reply-content", "reply-input");
        replyCommentDiv.innerHTML = "";
        replyCommentDiv.classList.add("msg-content", "posted-reply");
        replyCommentDiv.innerHTML = `<div class="comment-sec">
            <div class="text-sec">
                <div class="profile">
                    <div class="comment-pic"><img src="./images/avatars/image-amyrobson.png" alt="?"></div>
                    <p class="user-name">Theabdull</p>
                    <p class="user-tag">you</p>
                    <p class="date-posted">2 days ago</p>
                    <div class="del-ed">
                        <div class="delete"><img src="./images/icon-delete.svg" alt="reply"><span class="reply-text">Delete</span></div>
                        <div class="edit"><img src="./images/icon-edit.svg" alt="reply"><span class="reply-text">Edit</span></div>
                    </div>
                </div>
                <div class="comment-text-div">
                    <p class="comment-text"> 
                        <span class='replying-name'>@${replyingTo}</span> ${replyMsgValue}
                    </p>
                </div>
            </div>
            <div class="rating-sec">
                <div class="plus"><img src="./images/icon-plus.svg" alt="+"></div>
                <p class="rating">14</p>
                <div class="minus"><img src="./images/icon-minus.svg" alt="-"></div>
            </div>
        </div>`;
        //Selecting new element
        const editBtns = document.querySelectorAll(".edit");
        const deleteBtns = document.querySelectorAll(".delete");
        const plusBtns = document.querySelectorAll(".plus");
        const minusBtns = document.querySelectorAll(".minus");

        //click plus
        plusBtns.forEach((plusBtn) => {
          plusBtn.addEventListener("click", positiveRating);
        });
        //click minus
        minusBtns.forEach((minusBtn) => {
          minusBtn.addEventListener("click", negativeRating);
        });
        //When reply button is clicked
        editBtns.forEach((editBtn) => {
          editBtn.addEventListener("click", enableEditInput);
        });
        //When all delete button is clicked
        deleteBtns.forEach((deleteBtn) => {
          deleteBtn.addEventListener("click", enableDeleteModal);
        });
      } else {
        replyCommentDiv.remove();
      }
    });
  });
};

//getting user details from local storage
const getUserName = () => {
  const userName = `Abdull`
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
                  <div class="comment-pic"><img src="./images/avatars/image-juliusomo.png" alt="?"></div>
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

  //select element
  const plusBtns = document.querySelectorAll(".plus");
  const minusBtns = document.querySelectorAll(".minus");

  //click plus
  plusBtns.forEach((plusBtn) => {
    plusBtn.addEventListener("click", positiveRating);
  });
  //click minus
  minusBtns.forEach((minusBtn) => {
    minusBtn.addEventListener("click", negativeRating);
  });
};

// ------------All Event Listeners----------------
// When send button is clicked
sendBtn.addEventListener("click", clickedSend);
//When reply button is clicked
replyBtns.forEach((replyBtn) => {
  replyBtn.addEventListener("click", clickedReply);
});
//When reply minus is clicked
plusBtns.forEach((plusBtn) => {
  plusBtn.addEventListener("click", positiveRating);
});
//When reply minus is clicked
minusBtns.forEach((minusBtn) => {
  minusBtn.addEventListener("click", negativeRating);
});
