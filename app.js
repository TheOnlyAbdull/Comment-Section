/* TODO :
1-populate the ui ON LOAD*/


// ------------Selcting DOM Element---------------
const mainContainer = document.querySelector('.content');
const replyBtns = document.querySelectorAll('.reply');


// ----------------All Functions------------------


// Load page func
const pageLoads = ()=>{
    fetch('./data.json')
    .then(res => {
        return res.json()
    })
    .then(data =>{
        mainContainer.innerHTML = `<div class="msg-content">
        <div class="comment-sec" id="1" data-id="1">
            <div class="text-sec">
                <div class="profile">
                    <div class="comment-pic"><img src="./images/avatars/image-amyrobson.png" alt="?"></div>
                    <p class="user-name">Theonlyabdull</p>
                    <p class="date-posted">1 month ago</p>
                    <div class="reply"><img src="./images/icon-reply.svg" alt="reply"><span class="reply-text">Reply</span></div>
                </div>
                <div class="comment-text-div">
                    <p class="comment-text"> 
                        Impressive! Though it seems the drag feature could be improved. 
                        But overall it looks incredible. You've nailed the design and the
                        responsiveness at various breakpoints works really well.
                    </p>
                </div>
            </div>
            <div class="rating-sec">
                <div class="plus"><img src="./images/icon-plus.svg" alt="+"></div>
                <p class="rating">14</p>
                <div class="minus"><img src="./images/icon-minus.svg" alt="-"></div>
            </div>
        </div>
    </div>

    <!-- COMMENT-2 -->
    <div class="msg-content">
        <div class="comment-sec" id="2" data-flow="2">
            <div class="text-sec">
                <div class="profile">
                    <div class="comment-pic"><img src="./images/avatars/image-amyrobson.png" alt="?"></div>
                    <p class="user-name">Theonlyabdull</p>
                    <p class="date-posted">1 month ago</p>
                    <div class="reply"><img src="./images/icon-reply.svg" alt="reply"><span class="reply-text">Reply</span></div>
                </div>
                <div class="comment-text-div">
                    <p class="comment-text"> 
                        Impressive! Though it seems the drag feature could be improved. 
                        But overall it looks incredible. You've nailed the design and the
                        responsiveness at various breakpoints works really well.
                    </p>
                </div>
            </div>
            <div class="rating-sec">
                <div class="plus"><img src="./images/icon-plus.svg" alt="+"></div>
                <p class="rating">14</p>
                <div class="minus"><img src="./images/icon-minus.svg" alt="-"></div>
            </div>
        </div>
    </div>

    <!-- POSTED REPLY -->
    <div class="posted-reply-container">
        <div class="msg-content posted-reply">
            <div class="comment-sec">
                <div class="text-sec">
                    <div class="profile">
                        <div class="comment-pic"><img src="./images/avatars/image-amyrobson.png" alt="?"></div>
                        <p class="user-name">Theonlyabdull</p>
                        <p class="date-posted">1 month ago</p>
                        <div class="reply"><img src="./images/icon-reply.svg" alt="reply"><span class="reply-text">Reply</span></div>
                    </div>
                    <div class="comment-text-div">
                        <p class="comment-text"> 
                            Impressive! Though it seems the drag feature could be improved. 
                            But overall it looks incredible. You've nailed the design and the
                            responsiveness at various breakpoints works really well.
                        </p>
                    </div>
                </div>
                <div class="rating-sec">
                    <div class="plus"><img src="./images/icon-plus.svg" alt="+"></div>
                    <p class="rating">14</p>
                    <div class="minus"><img src="./images/icon-minus.svg" alt="-"></div>
                </div>
            </div>
        </div>
    </div><div class="reply-content post">
    <div class="reply-text">
        <textarea class="post-txt-area" name="" id="" placeholder="Add a comment..."></textarea>
    </div>
    <div class="reply-pic">
        <img src="./images/avatars/image-maxblagun.png" alt="?">
    </div>
    <div class="reply-btn-container">
        <button class="reply-btn">SEND</button>
    </div>
</div>`
        
    })
    .catch(err => console.error(err));
}

const clickedReply = (e)=>{
    console.log(`fuck it worked`);
    const replyMainParent = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    const replyParent = e.target.parentNode.parentNode.parentNode.parentNode;
    console.log(replyMainParent);
    console.log(replyParent);
    const replyMsgBox = `<div class="reply-content post">
    <div class="reply-text">
        <textarea class="post-txt-area" name="" id="" placeholder="Add a comment..."></textarea>
    </div>
    <div class="reply-pic">
        <img src="./images/avatars/image-maxblagun.png" alt="?">
    </div>
    <div class="reply-btn-container">
        <button class="reply-btn">SEND</button>
    </div>
</div>`;
    replyMainParent.insertBefore(replyMsgBox, replyParent.nextSibling);
//insert the div under the reply parent
}




// ------------All Event Listeners----------------
// when page load
// window.addEventListener('load', pageLoads);

// When reply button is clicked
replyBtns.forEach((replyBtn)=>{
    replyBtn.addEventListener('click', clickedReply)
});



