// ==============================================================
// TEMPLATE FUNCTIONS
// ==============================================================
const html = (strings, ...values) => String.raw({ raw: strings }, ...values);

// Konstante und Arrow-Function werden für die Erweiterung "lit-html" benötigt
// (ermöglicht HTML-Formatierung, Syntax-Highlighting und Autovervollständigung in JS-Dateien).
// Ohne diese Definition würde das "html"-Tag vor den Backticks einen ReferenceError auslösen.

function bookCardTemplate(i, bookName, price) {
    return html`
            <section id="idBooksWrapper${i}" class="BooksWrapper">
                <article id="idBook${i}" class="Book">
                    <header id="idHeaderBook${i}" class="HeaderBook">
                        <h2 id="idTitleOfBook${i}" class="TitleOfBook">
                            ${bookName}
                        </h2>
                        <div id="idLikesAreaWrapper${i}" class="LikesAreaWrapper">
                        </div>
                    </header>
                    <figure id="idBookCover" class="CoverArea">
                        <img id="idBookCover${i}" class="BookCover" src="../assets/img/${i + 1}.jpg">
                    </figure>
                    <p id="idPriceBook${i}" class="Price">
                        <b> Preis: ${price} €</b>
                    </p>
                    <section id="idCommentsWrapper" class="CommentsWrapper">
                        <h3>
                            Kommentare:
                        </h3>
                        <form id="idCommentInputArea" class="CommentInputArea">
                            <div id="idInputfieldWrapper" class="InputfieldWrapper">
                                <label for="idUserNameInputfield${i}">
                                    Username:
                                </label>
                                <input id="idUserNameInputfield${i}" class="UserNameInputfield" type="text" placeholder="type in your Name">
                                <label for="idCommentInputfield${i}">
                                    Comment:
                                </label>
                                <input id="idCommentInputfield${i}" class="CommentInputfield" type="text" placeholder="write a comment">
                            </div>
                            <button id="idAddCommentButton" class="AddCommentButton" type="button" onclick="addComment(${i})">
                                ADD
                            </button>
                        </form>
                        <ul id="idCommentsBook${i}" class="CommentsArea">
                        </ul>
                    </section>
                </article>
            </section>
    `
}

function getCommentsTemplate(i, userName, comment) {
    return html`
                <li id="idComment${i}" class="Comment">
                    <p id="idComment${i}Username" class="Username">${userName}:</p>
                    <p id="idComment${i}Content" class="CommentContent">${comment}</p>
                </li>
    `
}

function getLikesAreaWrapperTemplate(i, likesCount) {
    return html`
                <p id="idLikesCounterBook${i}" class="LikesCounter">
                ${likesCount}
                </p>
                <button id="idLikeButtonForBook${i}" class="LikeButtonForBook" 
                        onclick="updateLikes(${i}), renderLikes(${i}), changeLikeButton(${i})" 
                        onmouseenter="hoverUnlikedIcon(${i}), hoverLikedIcon(${i})" 
                        onmouseleave="hideHeartWithPlus(${i}), hideHeartWithMinus(${i})">
                    <img id="idUnlikedHeart(${i})" class="Like" src="./assets/icons/like.svg" >
                    <img id="idHeartWithPlus(${i})" class="Hover_Add_Like hide" src="./assets/icons/heart-plus.svg">
                    <img  id="idLikedHeart(${i})" class="Liked " src="./assets/icons/heart-checked.svg">
                    <img id="idHeartWithMinus(${i})" class="Hover_Remove_Like hide " src="./assets/icons/heart-minus.svg">
                </button>
    `
}



//#region BLANCO



// #endregion
// -------------------------------------------------------------

