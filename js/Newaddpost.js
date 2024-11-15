let postdata1 = document.querySelector("#postdata1");
let postdata2 = document.querySelector("#postdata2");
let postdata3 = document.querySelector("#postdata3");
let postdata4 = document.querySelector("#postdata4");

let post_title = document.querySelector("#post_title");
let post_sub = document.querySelector("#post_sub");
let post_pic = document.querySelector("#post_pic");
let post_des = document.querySelector("#post_des");
let postCategory = document.querySelector("#postCategory");
let btn_addPost = document.querySelector("#btn_addPost");
let post_url;

let sports = [];
let fitness = [];
let letestnews = [];
let foodtraivels = [];

post_pic.addEventListener("change", () => {
  let Freader = new FileReader();
  Freader.addEventListener("load", function (e) {
    post_url = e.target.result;
  });
  Freader.readAsDataURL(post_pic.files[0]);
});



btn_addPost.addEventListener("click", function (e) {
  e.preventDefault();

  if (postCategory.value == "sport") {
    sports.push({
      title: post_title.value,
      sub: post_sub.value,
      Category: postCategory.value,
      des: post_des.value,
      img: post_url,
    });
    localStorage.setItem("sports", JSON.stringify(sports));
  }


  if (postCategory.value == "fitness") {

    fitness.push({
      title: post_title.value,
      sub: post_sub.value,
      Category: postCategory.value,
      des: post_des.value,
      img: post_url,
    })

    localStorage.setItem("fitness", JSON.stringify(fitness))

  }


  if (postCategory.value == "letestnews") {

    letestnews.push({
      title: post_title.value,
      sub: post_sub.value,
      Category: postCategory.value,
      des: post_des.value,
      img: post_url,
    })

    localStorage.setItem("letestnews", JSON.stringify(letestnews))

  }


  if (postCategory.value == "foodtraivels") {

    foodtraivels.push({
      title: post_title.value,
      sub: post_sub.value,
      Category: postCategory.value,
      des: post_des.value,
      img: post_url,
    })

    localStorage.setItem("foodtraivels", JSON.stringify(foodtraivels))

  }


  addpostdata();
});

function addpostdata() {
  sports = JSON.parse(localStorage.getItem("sports")) ?? [];
  postdata1.innerHTML = "";

  sports.forEach((e, i) => {
    postdata1.innerHTML += `
        <tr>
          <td>${i + 1}</td>

          <td>${e.Category}</td>
          <td><img src="${e.img}" width="40"></td>
          <td>${e.title}</td>
          <td>${e.sub}</td>
          <td>${e.des}</td>
          <td>
            <button  onclick="editpost(${i},'${e.Category}','${e.img}','${e.title}','${e.sub}','${e.des}')" class="btn text-success editbtn " data-bs-toggle="modal" data-bs-target="#staticBackdrop7">
              <i class="fa-solid fa-pen"></i>
            </button>
          </td>
          <td>
            <button onclick="removedata(${i},'${e.Category}')" class="btn text-danger editbtn">
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      `;
  });


  fitness = JSON.parse(localStorage.getItem("fitness")) ?? [];
  postdata2.innerHTML = "";

  fitness.forEach((e, i) => {
    postdata2.innerHTML += `
        <tr>
          <td>${i + 1}</td>
          <td>${e.Category}</td>
          <td><img src="${e.img}" width="40"></td>
          <td>${e.title}</td>
          <td>${e.sub}</td>
          <td>${e.des}</td>
          <td>
            <button  onclick="editpost(${i},'${e.Category}','${e.img}','${e.title}','${e.sub}','${e.des}')" class="btn text-success editbtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop7">
              <i class="fa-solid fa-pen"></i>
            </button>
          </td>
          <td>
            <button  onclick="removedata(${i},'${e.Category}')" class="btn text-danger editbtn">
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      `;
  });


  letestnews = JSON.parse(localStorage.getItem("letestnews")) ?? [];
  postdata3.innerHTML = "";

  letestnews.forEach((e, i) => {
    postdata3.innerHTML += `
        <tr>
          <td>${i + 1}</td>
          <td>${e.Category}</td>
          <td><img src="${e.img}" width="40"></td>
          <td>${e.title}</td>
          <td>${e.sub}</td>
          <td>${e.des}</td>
          <td>
            <button  onclick="editpost(${i},'${e.Category}','${e.img}','${e.title}','${e.sub}','${e.des}')" class="btn text-success editbtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop7">
              <i class="fa-solid fa-pen"></i>
            </button>
          </td>
          <td>
            <button onclick="removedata(${i},'${e.Category}')" class="btn text-danger editbtn">
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      `;
  });


  foodtraivels = JSON.parse(localStorage.getItem("foodtraivels")) ?? [];
  postdata4.innerHTML = "";

  foodtraivels.forEach((e, i) => {
    postdata4.innerHTML += `
        <tr>
          <td>${i + 1}</td>
          <td>${e.Category}</td>
          <td><img src="${e.img}" width="40"></td>
          <td>${e.title}</td>
          <td>${e.sub}</td>
          <td>${e.des}</td>
          <td>
            <button onclick="editpost( ${i},'${e.Category}','${e.img}','${e.title}','${e.sub}','${e.des}')" class="btn text-success editbtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop7">
              <i class="fa-solid fa-pen"></i>
            </button>
          </td>
          <td>
            <button onclick="removedata(${i},'${e.Category}')" class="btn text-danger editbtn">
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      `;
  });
}

// edit add post start ++++++++++
let upppostTitle = document.querySelector("#upppostTitle")
let uppostSub = document.querySelector("#uppostSub")
let uppostPic = document.querySelector("#uppostPic")
let uppostDes = document.querySelector("#uppostDes")
let uppostCategory = document.querySelector("#uppostCategory")
let uppostImg = document.querySelector("#uppostImg")
let upbtn_addPost = document.querySelector("#upbtn_addPost")
let upUrl




uppostPic.addEventListener("change", () => {

  let Freader = new FileReader();

  Freader.addEventListener("load", function (e) {

    upUrl = e.target.result;
    uppostImg.src = e.target.result;



  });
  Freader.readAsDataURL(uppostPic.files[0]);



});




function editpost(index, cat, img, tit, sub, des) {
  // console.log(tit);

  upppostTitle.value = tit
  uppostSub.value = sub
  uppostDes.value = des
  uppostCategory.value = cat
  uppostImg.src = img





  upbtn_addPost.addEventListener("click", function (e) {
    e.preventDefault()

  

   if(uppostCategory.value == "sport")
   {
    sports = JSON.parse(localStorage.getItem("sports")) ?? [];

    sports[index] = {
      title: upppostTitle.value,
      sub: uppostSub.value,
      Category: uppostCategory.value,
      des: uppostDes.value,
      img: uppostImg.src,


    }
    localStorage.setItem("sports", JSON.stringify(sports))
    addpostdata()
   }


   if(uppostCategory.value == "fitness")
   {
    fitness = JSON.parse(localStorage.getItem("fitness")) ?? [];

    fitness[index] = {
      title: upppostTitle.value,
      sub: uppostSub.value,
      Category: uppostCategory.value,
      des: uppostDes.value,
      img: uppostImg.src,


    }
    localStorage.setItem("fitness", JSON.stringify(fitness))
    addpostdata()
   }


   if(uppostCategory.value == "letestnews")
   {
    letestnews = JSON.parse(localStorage.getItem("letestnews")) ?? [];

    letestnews[index] = {
      title: upppostTitle.value,
      sub: uppostSub.value,
      Category: uppostCategory.value,
      des: uppostDes.value,
      img: uppostImg.src,


    }
    localStorage.setItem("letestnews", JSON.stringify(letestnews))
    addpostdata();
   }
   

   if(uppostCategory.value == "foodtraivels")
   {
    foodtraivels = JSON.parse(localStorage.getItem("foodtraivels")) ?? [];

    foodtraivels[index] = {
      title: upppostTitle.value,
      sub: uppostSub.value,
      Category: uppostCategory.value,
      des: uppostDes.value,
      img: uppostImg.src,


    }
    localStorage.setItem("foodtraivels", JSON.stringify(foodtraivels))
    addpostdata();
   }




  });

}


// edit add post end ++++++++++







function removedata(index, delCatg) {

  if (delCatg == "sport") {

    sports = JSON.parse(localStorage.getItem("sports")) ?? [];

    sports.splice(index, 1);
    localStorage.setItem("sports", JSON.stringify(sports));


  }


  if (delCatg == "fitness") {
    fitness = JSON.parse(localStorage.getItem("fitness")) ?? [];

    fitness.splice(index, 1);
    localStorage.setItem("fitness", JSON.stringify(fitness));


  }


  if (delCatg == "letestnews") {

    letestnews = JSON.parse(localStorage.getItem("letestnews")) ?? [];

    letestnews.splice(index, 1);
    localStorage.setItem("letestnews", JSON.stringify(letestnews));



  }

  if (delCatg == "foodtraivels") {
    foodtraivels = JSON.parse(localStorage.getItem("foodtraivels")) ?? [];

    foodtraivels.splice(index, 1);
    localStorage.setItem("foodtraivels", JSON.stringify(foodtraivels));


  }


  addpostdata();
}


addpostdata();