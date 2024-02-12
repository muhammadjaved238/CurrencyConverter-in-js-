    const  BASE_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
    const dropdowns = document.querySelectorAll(".dropdown select");
    const btn =document.querySelector("form button");
    const fromCurr = document.querySelector(".from select");
    const toCurr = document.querySelector(".to select");
    const message=document.querySelector(".message");
    



    for( let  select of dropdowns){
        for ( let Curcode in countryList) {
            // console.log(Curcode,countryList[code]);
            let newOption=document.createElement("option");
            newOption.innerText=Curcode;
            newOption.value=Curcode;
            if(select.name==="FROM"&& Curcode==="USD"){
                newOption.selected="selected"
            }
            else if(select.name==="To"&& Curcode==="PKR"){
        newOption.selected="selected" }
            select.append(newOption)
        }
        select.addEventListener("change",(e)=>{
                UpdateFlag(e.target)
        })             
    }

    const upDateExchangRate= async()=>{
        let amount=document.querySelector(".amount input");
        let amtVal=amount.value;
        // console.log(amtVal);
        if(amtVal=="1"|| amtVal=="1"){
            amtVal=1;
            amount.value="1"
        }
        // console.log(fromCurr.value , toCurr.value)
        const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
        let responnse=  await fetch(URL);
        let data= await responnse.json()
        let rate=data[toCurr.value.toLowerCase()];
        let finalamount=amtVal * rate;
        message.innerText=`${amtVal}${fromCurr.value}=${finalamount}${toCurr.value} `
    }


    const UpdateFlag = (element)=>{
        Curcode=element.value;
        let countrycode=countryList[Curcode];
    let  = nweSrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
        img.src=nweSrc;
    }

     
    btn.addEventListener("click",(e)=>{
        e.preventDefault();
        upDateExchangRate();
    });
    
    window.document.addEventListener("load",()=>{
        upDateExchangRate();
})