// ==============================================================
// TEMPLATE FUNCTIONS
// ==============================================================

function bookCardTemplate(i, bookName, likesCount, price) {
    return `
                <article id="idBook${i + 1}" class="Book">
                <header id="idHeaderBook${i + 1}" class="HeaderBook">
                    <h2 id="idTitleOfBook${i + 1}" class="TitleOfBook">${bookName}</h2>
        <div id="idLikesAreaWrapper" class="LikesAreaWrapper">
            <p id="idLikesCounterBook${i + 1}" class="LikesCounter">${likesCount}</p>
            <button id="idLikeButtonForBook${i + 1}" class="LikeButtonForBook">
                <img  class="Like" src="./assets/icons/like.svg">
                <img  class="Hover_Add_Like" src="./assets/icons/heart-plus.svg">
                <img  class="Liked" src="./assets/icons/heart-checked.svg">
                <img  class="Hover_Remove_Like" src="./assets/icons/heart-minus.svg">
            </button>
        </div>
                </header>
                <figure id="idBookCover" class="CoverArea">
                    <img id="idBookCover${i + 1}" class="BookCover" src="./assets/icons/book.svg">
                </figure>
                <p id="idPriceBook${i + 1}" class="Price">${price}</p>
                <section id="idCommentsWrapper" class="CommentsWrapper">
                    <p>Kommentare:</p>
                    <form id="idCommentInputArea" class="CommentInputArea">
                        <div id="idInputfieldWrapper" class="InputfieldWrapper"> <label for="idUserNameInputfield">
                                Username</label>
                            <input id="idUserNameInputfield" class="UserNameInputfield" type="text"
                                placeholder="type in your Name">
                            <label for="idCommentInputfield">Comment</label>
                            <input id="idCommentInputfield" class="CommentInputfield" type="text"
                                placeholder="write a comment">
                        </div>
                        <button id="idAddCommentButton" class="AddCommentButton" type="button">ADD</button>
                    </form>
                    <ul id="idCommentsBook1" class="Comments">
                        <li id="idComment1" class="Comment">User:<br>kommentar</li>
                        <li id="idComment2" class="Comment">User:<br>kommentar</li>
                        <li id="idComment3" class="Comment">User:<br>kommentar</li>

                    </ul>
                </section>
            </article>
    `
}







//#region BLANCO



// #endregion
// -------------------------------------------------------------

