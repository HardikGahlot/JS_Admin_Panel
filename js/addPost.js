let postdata1 = document.querySelector("#postdata1")
let postdata2 = document.querySelector("#postdata2")
let postdata3 = document.querySelector("#postdata3")
let postdata4 = document.querySelector("#postdata4")


let post_title = document.querySelector("#post_title")
let post_sub = document.querySelector("#post_sub")
let post_pic = document.querySelector("#post_pic")
let post_des = document.querySelector("#post_des")
let postCategory = document.querySelector("#postCategory")

let btn_addPost = document.querySelector("#btn_addPost")
let post_url

let sports=[];
let fitness=[];
let letestnews=[];
let foodtraivels=[];


post_pic.addEventListener("change", ()=>{

    let Freader = new FileReader()

Freader.addEventListener("load", function(e){
    post_url = e.target.result

    // console.log(post_url);

})

Freader.readAsDataURL(post_pic.files[0])


})



btn_addPost.addEventListener("click",function(e){
    e.preventDefault()
    // console.log(postCategory.value);
  
   
    
  if(postCategory.value == "sport"){

    sports.push({
        title: post_title.value,
        sub:post_sub.value,
        des: post_des.value,
        img: post_url,
      })

   localStorage.setItem("sports", JSON.stringify(sports)) 

  }


  if(postCategory.value == "fitness"){

    fitness.push({
        title: post_title.value,
        sub:post_sub.value,
        des: post_des.value,
        img: post_url,
      })

   localStorage.setItem("fitness", JSON.stringify(fitness)) 

  }


  if(postCategory.value == "letestnews"){

    letestnews.push({
        title: post_title.value,
        sub:post_sub.value,
        des: post_des.value,
        img: post_url,
      })

   localStorage.setItem("letestnews", JSON.stringify(letestnews)) 

  }


  if(postCategory.value == "foodtraivels"){

    foodtraivels.push({
        title: post_title.value,
        sub:post_sub.value,
        des: post_des.value,
        img: post_url,
      })

   localStorage.setItem("foodtraivels", JSON.stringify(foodtraivels)) 

  }

  addpostdata();

})


function addpostdata() {
   
    sports = JSON.parse(localStorage.getItem("sports")) ?? [];
  
    sports.forEach((e, i) => {
    
      postdata1.innerHTML += `
        <tr>
          <td>${i + 1}</td>
          <td>${e.title}</td>
          <td>${e.sub}</td>
          <td>${e.des}</td>
          <td><img src = "${e.img}" width="40"></td>
          <td>
            <button class="btn text-success editbtn">
              <i class="fa-solid fa-pen"></i>
            </button>
          </td>
          <td>
            <button onclick="removedata(${i})" class="btn text-danger editbtn">
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      `;

    });
    addpostdata();
  }
  




  function removedata(index){

    sports = JSON.parse(localStorage.getItem("sports")) ?? [];

sports.splice(index,1);

localStorage.setItem("sports", JSON.stringify(sports));


addpostdata();


  }
  

  // addpostdata();
