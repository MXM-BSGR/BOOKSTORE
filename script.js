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
        let likesCount = getLikesCount(i);
        let price = getPrice(i);
        BOOKS_WRAPPER_REF.innerHTML += bookCardTemplate(i, bookName, likesCount, price);
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
    return price;
}


/* #endregion */
/* ------------------------------------------------------------- */



/* #endregion */
/* ------------------------------------------------------------- */

/* ============================================================== */







// /* #region  */



/* #endregion */
/* ------------------------------------------------------------- */