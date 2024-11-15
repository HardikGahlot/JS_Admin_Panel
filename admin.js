

let log_admin_name = document.querySelector(".log_admin_name")

let log_admin_password = document.querySelector(".log_admin_password")
let log_btn = document.querySelector(".log_btn")


let res_admin_name = document.querySelector(".res_admin_name")
let res_admin_password = document.querySelector(".res_admin_password")
let res_btn = document.querySelector("#res_btn")

let container = document.querySelector(".container")

let registerdata = [];

let register_admin = document.querySelector("#register_admin")
let main_data = document.querySelector("#main_data")

let a = "0";

let admin_log_res = document.querySelector(".admin_log_res")

let admin_profile_box = document.querySelector(".admin_profile_box")
let logo_out = document.querySelector(".logo_out")
let admin_log_out = document.querySelector(".admin_log_out")




// register btn  start +++++++++++++++========

res_btn.addEventListener("click", function () {

  res_admin_name.value
  res_admin_password.value




  let Res = [];

  Res.push(
    {
      name: res_admin_name.value,
      pass: res_admin_password.value,
      img: "",

    }
  )

  localStorage.setItem("res", JSON.stringify(Res))

  checkregister();

})

// register btn  end +++++++++++++++========


// checking register lenght  start +++++++++++++++
function checkregister() {
  registerdata = JSON.parse(localStorage.getItem("res")) ?? [];

  if (registerdata.length == 1) {
    register_admin.classList.add("hide")


  }


}

checkregister();

// checking register lenght  end +++++++++++++++


// login btn start +++++++++++++++++


log_btn.addEventListener("click", function () {



 Res = JSON.parse(localStorage.getItem("res"))

  Res[0].name;
  Res[0].pass;

  // let container = document.querySelector(".container")

  if (Res[0].name == log_admin_name.value && Res[0].pass == log_admin_password.value) {
    a = 1

    localStorage.setItem("admin_login", a)
    checkform()

  }


  else {
    alert("worng")
    a = 0
    localStorage.setItem("admin_login", a)
  }

  checkform();


})

// login btn end +++++++++++++++++

admin_log_out.addEventListener("click", function () {
  a = 0
  localStorage.setItem("admin_login", a)

  main_data.classList.add("hide")
  admin_log_res.classList.remove("hide")
})
// check admin or not +++++++++++++++++++++

admin_profile_box.addEventListener("click", function () {
  logo_out.classList.toggle("hide")

})

// profile update code start =============


let profileImgBox = document.querySelector(".profileImg_box")
let profileImgInput = document.querySelector("#profile_img_input")
let profileName = document.querySelector("#profile_name")
let profilePass = document.querySelector("#profile_pass")
let profileBtn = document.querySelector("#profileBtn")
let profileView = document.querySelector("#profile_view")
let porfile_img_url 

profileImgInput.addEventListener("change", function(){
  let Freader = new FileReader()

  Freader.addEventListener("load",function(e){
    porfile_img_url= e.target.result
    profileImgBox.src = e.target.result
  })

  Freader.readAsDataURL(profileImgInput.files[0])


})

profileView.addEventListener("click", ()=> {


 
  let registerData = JSON.parse(localStorage.getItem("res")) ?? [];

  
    profileName.value = registerData[0].name;
    profilePass.value = registerData[0].pass;
    
  
  
})

profileBtn.addEventListener("click", (e)=> {
  e.preventDefault();

  let registerData = JSON.parse(localStorage.getItem("res")) ?? [];

  
    // registerData[0].name = profileName.value;
    // registerData[0].pass = profilePass.value;
    registerData[0]={

      name:profileName.value,
      pass:profilePass.value,
      img:porfile_img_url,

    }
   
    localStorage.setItem("res", JSON.stringify(registerData));
    checkform();
  
})


// profile update code end =============


function checkform() {

  let admin_display_name = document.querySelector(".admin_display_name")
  let ad = localStorage.getItem("admin_login")
  let main_admin_img = document.querySelector(".main_admin_img")
  let registerData = JSON.parse(localStorage.getItem("res")) ?? [];

  if (ad == 1) {

    admin_log_res.classList.add("hide")
    main_data.classList.remove("hide")

    admin_display_name.innerHTML = registerData[0].name
    main_admin_img.src = registerData[0].img


    profileImgBox.src = registerData[0].img




  }


}

checkform();

