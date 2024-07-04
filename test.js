function addNewSkillsButton(){
      let newNode = document.createElement("textarea");
      newNode.classList.add("form-control");
      newNode.classList.add("skillsFeild");
      newNode.classList.add("mt-2");
      newNode.setAttribute("rows",2);
      newNode.setAttribute("placeholder","Add here");
      let skillsOb = document.getElementById("skills");
      let skillsAddButtonOb = document.getElementById("skillsAddButton");
      skillsOb.insertBefore(newNode, skillsAddButtonOb);
      }
      
      function addNewWEFeild(){
      let newNode = document.createElement("textarea");
      newNode.classList.add("form-control");
      newNode.classList.add("weFeild");
      newNode.classList.add("mt-2");
      newNode.setAttribute("placeholder","Add here");
      newNode.setAttribute("rows",2);
      let weOb = document.getElementById("we");
      let weAddButtonOb = document.getElementById("weAddButton");
      weOb.insertBefore(newNode, weAddButtonOb);
      }
      
      function addNewAQ(){
            let newNode = document.createElement("textarea");
            newNode.classList.add("form-control");
            newNode.classList.add("aqFeild");
            newNode.classList.add("mt-2");
            newNode.setAttribute("placeholder","Add here");
            newNode.setAttribute("rows",2);
            let aqOb = document.getElementById("aq");
            let aqAddButtonOb = document.getElementById("aqAddButton");
            aqOb.insertBefore(newNode, aqAddButtonOb);
      }
      
      function addNewINT(){
            let newNode = document.createElement("textarea");
            newNode.classList.add("form-control");
            newNode.classList.add("intFeild");
            newNode.classList.add("mt-2");
            newNode.setAttribute("placeholder","Add here");
            newNode.setAttribute("rows",1);
            let intOb = document.getElementById("int");
            let intAddButtonOb = document.getElementById("intAddButton");
            intOb.insertBefore(newNode, intAddButtonOb);
      }
      
      
      //generating cv
      function generatecv(){
            // console.log("generating cv");
            let namefeild=document.getElementById("namefeild").value;
            let nameT=document.getElementById("nameT");
            nameT.innerHTML=namefeild;
      
            //CONTACT
            document.getElementById("contactT").innerHTML=document.getElementById("contactfeild").value;
            document.getElementById("mailT").innerHTML=document.getElementById("mailfeild").value;

            //address
            document.getElementById("addressT").innerHTML=document.getElementById("addressfeild").value;
            //important links
            document.getElementById("linkedT").href=document.getElementById("linkedFeild").value;
            document.getElementById("twT").href=document.getElementById("twFeild").value;
            document.getElementById("instaT").href=document.getElementById("instaFeild").value;
            document.getElementById("fbT").href=document.getElementById("fbFeild").value;
            //objective
            document.getElementById("objT").innerHTML=document.getElementById("objFeild").value;
            //skills
            let sfs = document.getElementsByClassName("skillsFeild");
            let str="";
            for(let e of sfs) {
            str = str + `<li>${e.value}</li>`;
            }
            document.getElementById("skillsT").innerHTML = str;
      
            //we
            let wes = document.getElementsByClassName("weFeild");
            let str1="";
            for(let e of wes) {
                  str1+= `<li>${e.value}</li>`;
            }
            document.getElementById("weT").innerHTML = str1;
      
            //aq
            let aqs = document.getElementsByClassName("aqFeild");
            let str2="";
            for(let e of aqs) {
                  str2+= `<li>${e.value}</li>`;
            }
            document.getElementById("academicT").innerHTML = str2;
      
            //int
            let ints = document.getElementsByClassName("intFeild");
            let str3="";
            for(let e of ints) {
                  str3+= `<li>${e.value}</li>`;
            }
            document.getElementById("intT").innerHTML = str3;
      
            
            
            
                  // showing CV
                  // document.getElementById("cahngeButton").style.display = 'none';
                  document.getElementById("nav1").style.display = 'none';
                  document.getElementById("cv-form").style.display = 'none';
                  document.getElementById("cv-template").style.display = 'block';
                  document.body.style.background = "white";
            }
      
            document.getElementById('changeButton').addEventListener('click', function() {
                  const fileInput = document.getElementById('imgUpload');
                  const currentImage = document.getElementById('currentImage');
                  
                  const file = fileInput.files[0];
                  if (file) {
                        const reader = new FileReader();
                        reader.onload = function(e) {
                        currentImage.src = e.target.result;
                        };
                        reader.readAsDataURL(file);
                  } else {
                        alert("No file chosen");
                  }
                  });
      

                  document.getElementById("changeButton").addEventListener("click", function() {
                        var emailInput = document.getElementById("mailfeild").value;
                        var emailLink = document.getElementById("emailLink");
            
                        // Set the mailto link
                        var mailtoLink = `mailto:${emailInput}`;
                        emailLink.href = mailtoLink;
                  });
                  
      function printcv(){
            window.print();
      }
      