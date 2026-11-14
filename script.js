/* ============================================================== */
/* SCRIPT*/
/* ============================================================== */



/* #region   CONST  */
const BOOKS_WRAPPER_REF = document.getElementById("idBooksWrapper");

/* #endregion */
/* ------------------------------------------------------------- */
/* ============================================================== */

/* #region   VARIABLES  */



/* #endregion */
/* ------------------------------------------------------------- */
/* ============================================================== */

/* #region   FUNCTIONS  */

/* #region   GENERAL FUNCTIONS  */
function init() {
    renderBooks();
}

function renderBooks() {
    BOOKS_WRAPPER_REF.innerHTML = "";


    for (let i = 0; i < books.length; i++) {
        let bookName = getTitle(i);

        let price = getPrice(i);
        BOOKS_WRAPPER_REF.innerHTML += bookCardTemplate(i, bookName, price);
        renderLikes(i);
        changeLikeButton(i);
        renderComments(i);
    }

}


function renderComments(i) {
    let commentsOfBook = document.getElementById(`idCommentsBook${i}`);
    commentsOfBook.innerHTML = "";
    for (let c = 0; c < books[i].comments.length; c++) {
        let userName = books[i].comments[c].name;
        let comment = books[i].comments[c].comment;
        commentsOfBook.innerHTML += getCommentsTemplate(i, userName, comment);
    }


}

// function getInfo(i) {
//     let title = getTitle(i);
//     let likesCount = getLikesCount(i);
//     let price = getPrice(i);

//     return title, likesCount, price;
// }

function getTitle(i) {
    let bookName = books[i].name;
    return bookName;
}
function getLikesCount(i) {
    let likesCount = books[i].likes;
    return likesCount;
}
function getPrice(i) {
    let price = books[i].price;
    let renderPrice = price.toFixed(2);
    return renderPrice;
}


function updateLikes(i) {

    if (books[i].liked === false) {
        books[i].likes++;
        books[i].liked = true;

    } else {
        books[i].likes--;
        books[i].liked = false;
    }


}

function renderLikes(i) {
    const LIKE_AREA_WRAPPER_REF = document.getElementById(`idLikesAreaWrapper${i}`);

    let currentlikesCount = getLikesCount(i);
    LIKE_AREA_WRAPPER_REF.innerHTML = getLikesAreaWrapperTemplate(i, currentlikesCount);

}

function hideUnlikedButton(i) {
    const UNLIKE_BUTTON_REF = document.getElementById(`idUnlikedHeart(${i})`);

    UNLIKE_BUTTON_REF.classList.remove("Like");
    UNLIKE_BUTTON_REF.classList.add("hide");
}
function hideLikedButton(i) {
    const LIKE_BUTTON_REF = document.getElementById(`idLikedHeart(${i})`);

    // LIKE_BUTTON_REF.classList.remove("show");
    LIKE_BUTTON_REF.classList.add("hide");
    // hideLikedButton(i)
}
function showLikedButton(i) {
    const LIKE_BUTTON_REF = document.getElementById(`idLikedHeart(${i})`);
    LIKE_BUTTON_REF.classList.remove("hide");
    LIKE_BUTTON_REF.classList.add("show");
}
function showUnlikedButton(i) {
    const UNLIKE_BUTTON_REF = document.getElementById(`idUnlikedHeart(${i})`);
    if (books[i].liked === false) {
        // UNLIKE_BUTTON_REF.classList.remove("hide");
        UNLIKE_BUTTON_REF.classList.add("show");
    }
}
function hideHeartWithPlus(i) {
    const BUTTON_HOVER_REF = document.getElementById(`idHeartWithPlus(${i})`);
    BUTTON_HOVER_REF.classList.remove("show");
    BUTTON_HOVER_REF.classList.add("hide");
    showUnlikedButton(i);
}
function hideHeartWithMinus(i) {
    const LIKED_BUTTON_HOVER_REF = document.getElementById(`idHeartWithMinus(${i})`);
    const LIKE_BUTTON_REF = document.getElementById(`idLikedHeart(${i})`);
    if (LIKED_BUTTON_HOVER_REF.classList.contains("show")) {
        LIKED_BUTTON_HOVER_REF.classList.remove("show");
        LIKED_BUTTON_HOVER_REF.classList.add("hide");
        LIKE_BUTTON_REF.classList.remove("hide");
        LIKE_BUTTON_REF.classList.add("show");
    }
    // showUnlikedButton(i);
}

function changeLikeButton(i) {
    if (books[i].liked === true) {
        showLikedButton(i);
        hideUnlikedButton(i);

    } else {
        hideLikedButton(i);
        showUnlikedButton(i);
    }
}

function hoverUnlikedIcon(i) {
    const BUTTON_HOVER_REF = document.getElementById(`idHeartWithPlus(${i})`);
    const UNLIKE_BUTTON_REF = document.getElementById(`idUnlikedHeart(${i})`);
    if (books[i].liked === false && BUTTON_HOVER_REF.classList.contains("hide")) {

        UNLIKE_BUTTON_REF.classList.remove("Like");
        UNLIKE_BUTTON_REF.classList.remove("show");
        UNLIKE_BUTTON_REF.classList.add("hide");
        BUTTON_HOVER_REF.classList.remove("hide");
        BUTTON_HOVER_REF.classList.add("show");
        // BUTTON_HOVER_REF
    }
}
function hoverLikedIcon(i) {
    const LIKED_BUTTON_REF = document.getElementById(`idLikedHeart(${i})`);
    const LIKED_BUTTON_HOVER_REF = document.getElementById(`idHeartWithMinus(${i})`);

    const BUTTON_HOVER_REF = document.getElementById(`idHeartWithPlus(${i})`);
    const UNLIKE_BUTTON_REF = document.getElementById(`idUnlikedHeart(${i})`);
    if (books[i].liked === true && LIKED_BUTTON_HOVER_REF.classList.contains("hide")) {

        // LIKE_BUTTON_REF.classList.remove("Like");
        LIKED_BUTTON_REF.classList.remove("show");
        LIKED_BUTTON_REF.classList.add("hide");
        LIKED_BUTTON_HOVER_REF.classList.remove("hide");
        LIKED_BUTTON_HOVER_REF.classList.add("show");
        // BUTTON_HOVER_REF
    }
}


function addComment(i) {
    const USERNAME_INPUT_REF = document.getElementById(`idUserNameInputfield${i}`);
    const COMMENT_INPUT_REF = document.getElementById(`idCommentInputfield${i}`);
    let userName = USERNAME_INPUT_REF.value;
    let comment = COMMENT_INPUT_REF.value;

    if (userName != "" && comment != "") {
        let newComment = { "name": userName, "comment": comment };
        books[i].comments.unshift(newComment);
        renderComments(i);
        resetInputFields(USERNAME_INPUT_REF, COMMENT_INPUT_REF);
    } else {
        USERNAME_INPUT_REF.placeholder = "pls type in your Name";
        COMMENT_INPUT_REF.placeholder = "pls enter a comment";
    }

}

function resetInputFields(USERNAME_INPUT_REF, COMMENT_INPUT_REF) {
    USERNAME_INPUT_REF.value = "";
    COMMENT_INPUT_REF.value = "";
    USERNAME_INPUT_REF.placeholder = "type in your Name";
    COMMENT_INPUT_REF.placeholder = "write a comment";
}


// function likeButtonChanger() {
// for later clean code
// }

/* #endregion */
/* ------------------------------------------------------------- */



/* #endregion */
/* ------------------------------------------------------------- */

/* ============================================================== */







// /* #region  */



/* #endregion */
/* ------------------------------------------------------------- */