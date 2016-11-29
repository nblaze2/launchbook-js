// Exercise: Find the top navbar by query for the element type, which is <nav>.
document.getElementsByTagName('nav')[0];
// Exercise: Find the sidebar on the right by using it's id.
document.getElementById('sidebar-right');
// Exercise: Find the "Pages" and "Groups" sections of the sidebar by using their class.
document.getElementsByClassName('pages')[0];
document.getElementsByClassName('groups')[0];
// Exercise: Find all of the comments on the page.
document.getElementsByClassName('comments');
// Exercise: Find the first comment on the page.
document.getElementsByClassName('comments')[0];
// Exercise: Find the last comment on the page.
let comments = document.getElementsByClassName('comments');
let lastCommentIndex = comments.length - 1;
comments[lastCommentIndex];
// Exercise: Find the fourth comment on the page.
document.getElementsByClassName('comments')[3];
// Exercise: Find one of the ads in the sidebar and hide them.
let adSlot = document.getElementsByClassName('ad-slot')[2];
adSlot.style.visibility = 'hidden';
// Exercise: Set the visibility to the form that you hid in the previous step to make it visible again.
adSlot.style.visibility = 'visible';
// Exercise: Use setAttribute to change src attribute of one of the ads in the sidebar.
let adSlot = document.getElementsByClassName('ad-slot')[0];
let firstAd = adSlot.getElementsByTagName('img')[0];
firstAd.setAttribute('src', 'http://placebear.com/200/300');
// Exercise: Find Sam's post and change it's text to something incredible.
let postArea = document.getElementsByClassName('post media')[3];
let postSam = postArea.getElementsByClassName('media-body')[0];
let post = postSam.getElementsByTagName('p')[0];
post.innerHTML = 'Never gonna give you up, never gonna let you down...';
// Exercise: Find the first post and add the .post-liked class to it.
let postArea = document.getElementsByClassName('post media')[0];
let postFirst = postArea.getElementsByClassName('media-body')[0];
let postText = postFirst.getElementsByTagName('p')[0];
postText.className = postText.className + ' post-liked'
// Exercise: Find the second post and remove the .post-liked class.
let postArea = document.getElementsByClassName('post media')[1];
postArea.classList.remove('post-liked');
