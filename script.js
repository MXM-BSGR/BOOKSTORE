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
    const BUTTON_REF = document.getElementById(`idUnlikedHeart(${i})`);

    BUTTON_REF.classList.remove("Like");
    BUTTON_REF.classList.add("hide");
}
function hideLikedButton(i) {
    const BUTTON_REF = document.getElementById(`idLikedHeart(${i})`);

    BUTTON_REF.classList.remove("show");
    BUTTON_REF.classList.add("hide");
}
function showLikedButton(i) {
    const BUTTON_REF = document.getElementById(`idLikedHeart(${i})`);
    BUTTON_REF.classList.remove("hide");
    BUTTON_REF.classList.add("show");
}
function showUnlikedButton(i) {
    const BUTTON_REF = document.getElementById(`idUnlikedHeart(${i})`);
    BUTTON_REF.classList.remove("hide");
    BUTTON_REF.classList.add("show");
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

/* #endregion */
/* ------------------------------------------------------------- */



/* #endregion */
/* ------------------------------------------------------------- */

/* ============================================================== */







// /* #region  */



/* #endregion */
/* ------------------------------------------------------------- */