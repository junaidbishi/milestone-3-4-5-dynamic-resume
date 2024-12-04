
let myName=localStorage.getItem("name");

window.addEventListener("load",()=>{

    
    let desig = localStorage.getItem("desig");
    let phone = localStorage.getItem("phone");
    let email = localStorage.getItem("email");
    let add = localStorage.getItem("add");
    let pass=localStorage.getItem("pass");
    let deg = localStorage.getItem(" deg");
    let uni = localStorage.getItem("uni");
    let pass2 = localStorage.getItem("pass2");
    let deg2 = localStorage.getItem("deg2");
    let uni2 = localStorage.getItem("uni2");
    let skill1 = localStorage.getItem("skill1");
    let skill2 = localStorage.getItem("skill2");
    let skill3 = localStorage.getItem("skill3");
    let skill4 = localStorage.getItem("skill4");
    let skill5 = localStorage.getItem("skill5");
    let lang1 = localStorage.getItem("lang1");
    let lang2 = localStorage.getItem("lang2");
    let styear = localStorage.getItem("styear");
    let endyear = localStorage.getItem("endyear");
    let company = localStorage.getItem("company");
    let companylocation = localStorage.getItem("companylocation");
    let jobtittle = localStorage.getItem("jobtittle");
    let achiv1 = localStorage.getItem("achiv1");
    let achiv2 = localStorage.getItem("achiv2");
    let achiv3 = localStorage.getItem("achiv3");
    let pic = localStorage.getItem("pic")
    
    let resumeName: any= document.getElementById('resumeName')
    resumeName.textContent =myName

    let resdesig: any= document.getElementById('resdesig')
    resdesig.textContent =  desig

    let resumephone: any= document.getElementById('resumephone')
    resumephone.textContent =  phone

    let resemail: any= document.getElementById('resemail')
    resemail.textContent =  email

    let resaddress: any= document.getElementById('resaddress')
    resaddress.textContent =  add

    let respass: any= document.getElementById('respass')
    respass.textContent =  pass

    let resdeg: any= document.getElementById('resdeg')
    resdeg.textContent =  deg

    let resuni: any= document.getElementById('resuni')
    resuni.textContent =  uni

    let respass2: any= document.getElementById('respass2')
    respass2.textContent = pass2

    let resdeg2: any= document.getElementById('resdeg2')
    resdeg2.textContent = deg2
    
    let resuni2: any= document.getElementById('resuni2')
    resuni2.textContent =uni2 
    
    let resskill1: any= document.getElementById('resskill1')
    resskill1.textContent = skill1

    let resskill2: any= document.getElementById('resskill2')
    resskill2.textContent =skill2
    
    let resskill3: any= document.getElementById('resskill3')
    resskill3.textContent = skill3

    let resskill4: any= document.getElementById('resskill4')
    resskill4.textContent = skill4

    let resskill5: any= document.getElementById('resskill5')
    resskill5.textContent = skill5

    let reslang1: any= document.getElementById('reslang1')
    reslang1.textContent = lang1

    let reslang2: any= document.getElementById('reslang2')
    reslang2.textContent = lang2

    let resstartingyear: any= document.getElementById('resstartingyear')
    resstartingyear.textContent = styear
    
    let resendyear: any= document.getElementById('resendyear')
    resendyear.textContent = endyear

    let rescompany: any= document.getElementById('rescompany')
    rescompany.textContent = company 

    let rescompanylocation: any= document.getElementById('rescompanylocation')
    rescompanylocation.textContent = companylocation 

    let resjobtittle: any= document.getElementById('resjobtittle')
    resjobtittle.textContent = jobtittle

    let resachiv1: any = document.getElementById('resachiv1')
    resachiv1.textContent = achiv1

    let resachiv2 :any= document.getElementById('resachiv2')
    resachiv2.textContent = achiv2    

    let resachiv3: any= document.getElementById('resachiv3')
    resachiv3.textContent = achiv3

    let resImg: any= document.getElementById('resImg')
    resImg.src = pic;
    

})


// printbtn
let print_btn = document.getElementById('print_btn')
print_btn?.addEventListener('click',()=>{
    window.print()
})

// editable
let edit_btn = document.getElementById('edit_btn');
edit_btn?.addEventListener("click",()=>{
    window.history.back()
})

// share-able 
let share_btn = document.getElementById("share_btn")
let anc = document.getElementById("anc")
let userName;
if(myName){

   userName= myName.toLowerCase().replace(/\s+/g,"-")
}else{
    userName ="user"

}

let baseUrl ="file:///D:/hackaton/milestone5/index.html"
let uniqueUrl = `${baseUrl}?/${myName}`

share_btn?.addEventListener("click",()=>{
    anc?.setAttribute("href",uniqueUrl)

  
})

let copy_btn = document.getElementById("copy_btn")
copy_btn?.addEventListener("click",()=>{


    navigator.clipboard.writeText(uniqueUrl).then(()=>{

    alert("copy done")

    })
})


