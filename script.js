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
        renderComments(i);
    }

}


function renderComments(i) {
    let comments0fBook = document.getElementById(`idCommentsBook${i}`);
    for (let c = 0; c < books[i].comments.length; c++) {
        let userName = books[i].comments[c].name;
        let comment = books[i].comments[c].comment;
        comments0fBook.innerHTML += getCommentsTemplate(i, userName, comment);
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


/* #endregion */
/* ------------------------------------------------------------- */



/* #endregion */
/* ------------------------------------------------------------- */

/* ============================================================== */







// /* #region  */



/* #endregion */
/* ------------------------------------------------------------- */