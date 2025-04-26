let information_box=document.querySelector(".container  .infom");
console.log(information_box)
let c_name=document.querySelector(".container .serch-b .ui ");
console.log(c_name)

// 
let getcontry_detail=(country)=>
    {
 let link=`https://restcountries.com/v3.1/name/${country}?fullText=true`
 fetch(link).then((re)=> re.json()).then((dt)=> {
    console.log(dt[0]);

    let info_in=` <div class="flg-name">
                <div class="flg">
                    <img src="${dt[0].flags.svg}" alt="">
                </div>
                <p class="cntr-name">${dt[0].name.common}</p>
            </div>
            <div class="otinfo">
             <p>capital - ${dt[0].capital} </p><br>
                <p>continent ${dt[0].continents} </p><br>
                <p>population ${dt[0].population}  </p><br>
                <p>currency${Object.keys(dt[0].currencies)} -${dt[0].currencies[Object.keys(dt[0].currencies)].name}   (${dt[0].currencies}</p><br>
                <p>common languages ${Object.values(dt[0].languages).join(" ,")}  </p>
            </div>`
            information_box.innerHTML=info_in;

        

 }).catch(()=>{
    if(c_name.value.length==0){

        // alert(" input field not be empty");
        information_box.innerHTML=`<h3 class="invalid-mess">
        please ente country name😒
        </h3>`;
    
    }
    else{
        information_box.innerHTML=`<h3 class="er-mess">
        please enter the correct name
        </h3>`;
    }
    
 })
}

getcontry_detail(c_name);
c_name.addEventListener("keyup",(t)=>{
    if(t.key=="Enter" && c_name.value!=""){
        getcontry_detail(c_name.value);
    }
})