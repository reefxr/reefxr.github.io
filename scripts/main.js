const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome");
  await delay(700);
  createText("Starting the server...");
  await delay(1500);
  createText("You can run several commands:");
 
  createCode("about me", "Brief information about me.");
  createCode("all", "See all commands.");
  createCode("social", "My social networks.");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/reefxr";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "all"){
    trueValue(value);
    
    createCode("projects", "My GitHub page with my (soon-to-be-real) projects. Visit me there :>");
    createCode("about me", "Brief information about me.");
    createCode("social", "My social networks.");
    createCode("misc", "All things miscellaenous.");
    createCode("clear", "Clean the terminal.");
    
  }
  else if(value === "projects"){
    trueValue(value);
    createText("<a href='https://github.com/reefxr' target='_blank'><i class='fab fa-github white'></i> github.com/reefxr</a>")
    createText("I don't have any yet")
  }
  else if(value === "about me"){
    trueValue(value);
    createText("Hi, I'm Kai!")
    createText("I am a 19-year-old Computer Science student with special interests in video games and video game development, robotics, data science, and FPV drones. Nice to meet you!")
    createText("NOTE: I am planning to use a new design for this site")
    createText("(This site template is originally made by Heber Leonard, you can follow him on <a href='https://github.com/heberleonard2' target='_blank'><i class='fab fa-github white'></i> github.com/heberleonard2</a>)")
  }
  else if(value === "social"){
    trueValue(value);
    createText("<a href='https://github.com/reefxr' target='_blank'><i class='fab fa-github white'></i> github.com/reefxr</a>")
    createText("<a href='https://stackoverflow.com/users/22055273/reefer' target='_blank'><i class='fab fa-stack-overflow white'></i> stackoverflow.com/reefxr</a> (This is inactive by the way)")
    createText("<a href='https://leetcode.com/u/reefxxr/' target='_blank'><img src='https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png' alt='LeetCode' style='width: 20px;'> leetcode.com/reefxr</a> (Fresh account)")
  }
  else if(value === "misc"){
    trueValue(value);
    createText("I don't know what to put here")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();