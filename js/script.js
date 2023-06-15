//Вставка картинки, изменение свойств выплывающих кнопок
let title = document.querySelector('#title'),
    subtitle = document.querySelector('#subtitle'),
    author_name = document.querySelector('#author_name'),
    date = document.querySelector('#date'),
    article_title = document.querySelector('#article_title'),
    article_subtitle = document.querySelector('#article_subtitle'),
    post_card_title = document.querySelector('#post_card_title'),
    post_card_subtitle = document.querySelector('#post_card_subtitle'),
    post_card_author = document.querySelector('#post_card_author'),
    post_card_data = document.querySelector('#post_card_data');
    uploaded_image = "";

title.addEventListener('keyup', function(e) {
    article_title.textContent = e.target.value
    post_card_title.textContent = e.target.value
})

subtitle.addEventListener('keyup', function(e) {
  article_subtitle.textContent = e.target.value
  post_card_subtitle.textContent = e.target.value
})

author_name.addEventListener('keyup', function(e) {
  post_card_author.textContent = e.target.value
})

date.addEventListener('change', function(e) {
  post_card_data.textContent = e.target.value
})

document.getElementById('author_input').addEventListener('change', function() {
  if(this.files && this.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
          document.getElementById('author').setAttribute('src', e.target.result);
             
      };
    reader.addEventListener("load", () => {
      uploaded_image = reader.result;
      document.querySelector('.author-photo__border').style = 'border: none;';
      document.getElementById('author').style = 'width: 48px; height: 48px; object-fit: cover;';
      document.getElementById('author_btn').style = 'display: none;';
      document.getElementById('author_line').style = 'display: flex; align-items: center;';
      const PostdisplayImage = document.querySelector("#post_card_item");
      PostdisplayImage.style.background = `url(${uploaded_image})`;
      PostdisplayImage.style.backgroundSize = "cover";
      PostdisplayImage.style.backgroundRepeat = "no-repeat";
      uploaded_image = "";
    })
    reader.readAsDataURL(this.files[0]);
  };
});

document.getElementById('author_remove_btn').addEventListener("click", function(event){
  event.preventDefault(); // Prevent page reload
  document.querySelector('.author-photo__border').style = 'border: "";';
  document.getElementById('author_btn').style = 'display: "";';
  document.getElementById('author_line').style = 'display: none;';
  document.getElementById('author').setAttribute('src', "../static/img/admin/admin_icons/camera.svg");
  document.getElementById('author').style = 'width: ""; height: ""; object-fit: "";';
  const PostdisplayImage = document.querySelector("#post_card_item");
  PostdisplayImage.style.background = "";
  /* PostdisplayImage.style.backgroundSize = "";
  PostdisplayImage.style.backgroundRepeat = ""; */
});

document.getElementById('hero_post').addEventListener('change', function() {
  if(this.files && this.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
          document.getElementById('hero_icon').setAttribute('src', e.target.result); 
             
      };
    reader.addEventListener("load", () => {
      uploaded_image = reader.result;
      document.querySelector('.hero-image__border').style = 'border: none;';
      document.getElementById('hero_icon').style = 'width: 560px; height: 160px; object-fit: cover;';
      document.getElementById('hero_btn').style = 'display: none;';
      document.getElementById('hero_line').style = 'display: flex; align-items: center;';
      document.getElementById('hero_text').style = 'display: none;';
      const ArticledisplayImage = document.querySelector("#article_image");
      ArticledisplayImage.style.background = `url(${uploaded_image})`;
      ArticledisplayImage.style.backgroundSize = "cover";
      ArticledisplayImage.style.backgroundRepeat = "no-repeat";
      uploaded_image = "";
    })
    reader.readAsDataURL(this.files[0]);
  }
});

document.getElementById('hero_remove_btn').addEventListener("click", function(event){
  event.preventDefault(); // Prevent page reload
  document.querySelector('.hero-image__border').style = 'border: "";';
  document.getElementById('hero_btn').style = 'display: "";';
  document.getElementById('hero_line').style = 'display: none;';
  document.getElementById('hero_icon').setAttribute('src', "../static/img/admin/admin_icons/camera.svg");
  document.getElementById('hero_icon').style = 'width: ""; height: ""; object-fit: "";';
  document.getElementById('hero_text').style = 'display: "";';
  const ArticledisplayImage = document.querySelector("#article_image");
  ArticledisplayImage.style.background = "";
  /* ArticledisplayImage.style.backgroundSize = "";
  ArticledisplayImage.style.backgroundRepeat = ""; */
});

document.getElementById('hero_small_post').addEventListener('change', function() {
  if(this.files && this.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
          document.getElementById('hero_small_icon').setAttribute('src', e.target.result); 
             
      };
    reader.addEventListener("load", () => {
      uploaded_image = reader.result;
      document.querySelector('.hero-image-small').style = 'border: none;';
      document.getElementById('hero_small_icon').style = 'width: 296px; height: 160px; object-fit: cover;';
      document.getElementById('hero_small_btn').style = 'display: none;';
      document.getElementById('hero_small_line').style = 'display: flex; align-items: center;';
      document.getElementById('hero_small_text').style = 'display: none;';
      const PostdisplayImage = document.querySelector("#post_card_image");
      PostdisplayImage.style.background = `url(${uploaded_image})`;
      PostdisplayImage.style.backgroundSize = "cover";
      PostdisplayImage.style.backgroundRepeat = "no-repeat";
      uploaded_image = "";
    })
    reader.readAsDataURL(this.files[0]);
  }
});

document.getElementById('hero_small_remove_btn').addEventListener("click", function(event){
  event.preventDefault(); // Prevent page reload
  document.querySelector('.hero-image-small').style = 'border: "";';
  document.getElementById('hero_small_btn').style = 'display: "";';
  document.getElementById('hero_small_line').style = 'display: none;';
  document.getElementById('hero_small_icon').setAttribute('src', "../static/img/admin/admin_icons/camera.svg");
  document.getElementById('hero_small_icon').style = 'width: ""; height: ""; object-fit: "";';
  document.getElementById('hero_small_text').style = 'display: "";';
  const PostdisplayImage = document.querySelector("#post_card_image");
  PostdisplayImage.style.background = "";
  /* PostdisplayImage.style.backgroundSize = "";
  PostdisplayImage.style.backgroundRepeat = ""; */
});



//UPLOAD JSON DATA
const upload_btn = document.querySelector("#upload_btn");

upload_btn.addEventListener("click", function() {
  const JsonData = {
   title: title.value,
   subtitle: subtitle.value, 
   author_name: author_name.value,
   data: date.value,
   text_area: document.querySelector("#textarea").value,
   author_photo: author_input.value,
   hero_big: hero_post.value,
   hero_small: hero_small_post.value,
  };
  console.log(JSON.stringify(JsonData, undefined, 4));
  
}); 
