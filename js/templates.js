// ==============================================================
// TEMPLATE FUNCTIONS
// ==============================================================

function bookCardTemplate() {
    return `
                <article id="idBook1" class="Book">
                <header id="idHeaderBook1" class="HeaderBook">
                    <h2 id="idTitleOfBook1" class="TitleOfBook1">Title</h2>
                    <button id="idLikeButtonForBook1" class="LikeButtonForBook">
                        <img src="./assets/icons/like.svg">
                    </button>
                </header>
                <figure id="idBookCover" class="CoverArea">
                    <img id="idBookCover1" class="BookCover" src="./assets/icons/book.svg">
                </figure>
                <p id="idPriceBook1" class="Price">19.99€</p>
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

