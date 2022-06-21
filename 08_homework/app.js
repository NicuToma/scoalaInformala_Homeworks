var post = document.getElementById("post");
post.addEventListener("click", postComment);
function postComment() {
  var name = document.getElementById("name").value;

  var comment = document.getElementById("comment").value;
  var newComment = document.createElement("li");

  // count the numbers of comments
  var commentNr = 1;
  for (i = 1; i <= document.getElementsByTagName("li").length; i++) {
    commentNr = commentNr + 1;
  }
  // console.log(commentNr);

  newComment.setAttribute("id", "datavalue" + commentNr);

  var link = document.createElement("button");
  link.classList.add("deleteItem");
  link.setAttribute("id", "datavalue" + commentNr);
  link.innerHTML = "X";
  newComment.innerHTML = "•  " + name + ":" + "&nbsp &nbsp &nbsp" + comment;

  var ul = document.querySelector(".commentList");

  if (comment != "" && name != "") {
    ul.appendChild(newComment);
    newComment.appendChild(link);
    document.getElementById("comment").value = "";
    document.getElementById("name").value = "";
  } else {
    alert("Please fill the name and comment box first!");
  }

  if (link.id == newComment.id) {
    link.addEventListener("click", deletePost);
  }
  function deletePost(event) {
    if (link.id == newComment.id) {
      ul.removeChild(event.target.parentNode);
    }
  }
}
