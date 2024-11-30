let myname :any= document.getElementById("name");
// console.log('myname:',myname);


let desig :any= document.getElementById("desig");
// console.log('desig:',desig);

let phone :any= document.getElementById("phone");
// console.log('phone',phone);

let email :any = document.getElementById("email");
// console.log('email',email);

let add :any = document.getElementById("add");
// console.log('add',add);

let pass :any = document.getElementById("pass");
// console.log('pass',pass);

let deg :any = document.getElementById("deg");
// console.log('deg',deg);

let uni  :any = document.getElementById("uni");
// console.log('uni',uni);

let pass2 :any = document.getElementById("pass2");
// console.log('pass2',pass2);

let deg2 :any = document.getElementById("deg2");
// console.log('deg2',deg2);

let uni2 :any = document.getElementById("uni2");
// console.log('uni2',uni2);

let skill1 :any= document.getElementById("skill1");
// console.log('skill1',skill1);

let skill2 :any =document.getElementById("skill2");
// console.log('skill2',skill2);

let skill3 :any= document.getElementById("skill3");
// console.log('skill3',skill3);

let skill4 :any= document.getElementById("skill4");

let skill5 :any= document.getElementById("skill5");

let lang1 :any = document.getElementById("lang1");
// console.log('lang1',lang1);

let lang2 :any= document.getElementById("lang2");
// console.log('lang2',lang2);

let styear :any= document.getElementById("styear");
// console.log(' styear', styear);

let endyear :any = document.getElementById("endyear");
// console.log(' endyear', endyear);

let company :any= document.getElementById("company");
// console.log(' company', company);

let companylocation :any = document.getElementById("companylocation");
// console.log(' companylocation', companylocation);

let jobtittle :any = document.getElementById("jobtittle");
// console.log(' jobtittle', jobtittle);

let achiv1 :any = document.getElementById("achiv1");
// console.log(' achiv1', achiv1);

let achiv2 :any = document.getElementById("achiv2");
// console.log(' achiv2', achiv2);

let achiv3 :any = document.getElementById("achiv3");
// console.log(' achiv3', achiv3);

let pic :any = document.getElementById("pic");

let submitbtn = document.getElementById("submitbtn");
console.log("submitbtn",submitbtn);

let form = document.getElementById("form");
form?.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(myname?.value);

   localStorage.setItem("name",myname.value)
   localStorage.setItem("desig",desig.value)
   localStorage.setItem("phone",phone.value)
   localStorage.setItem("email",email.value)
   localStorage.setItem("add",add.value)
   localStorage.setItem("pass",pass.value)
   localStorage.setItem(" deg", deg.value)
   localStorage.setItem("uni",uni.value)
   localStorage.setItem("pass2",pass2.value)
   localStorage.setItem("deg2",deg2.value)
   localStorage.setItem("skill1",skill1.value)
   localStorage.setItem("skill2",skill2.value)
   localStorage.setItem("skill3",skill3.value)
   localStorage.setItem("skill4",skill4.value)
   localStorage.setItem("skill5",skill5.value)
   localStorage.setItem("lang1",lang1.value)
   localStorage.setItem("lang2",lang2.value)
   localStorage.setItem("styear",styear.value)
   localStorage.setItem("endyear",endyear.value)
   localStorage.setItem("company",company.value)
   localStorage.setItem("companylocation",companylocation.value)
   localStorage.setItem("jobtittle",jobtittle.value)
   localStorage.setItem("achiv1",achiv1.value)
   localStorage.setItem("achiv2",achiv2.value)
   localStorage.setItem("achiv3",achiv3.value)

   if(pic.files && pic.files[0]){
    let reader = new FileReader()
    reader. addEventListener("load",()=>{
     let textImg :any= reader.result
     console.log(textImg);
     localStorage.setItem("profile_pic",textImg)     
    })
    reader.readAsDataURL(pic.files[0])

   }

   window.location.href="./resume/index.html"
   
   
    
})
