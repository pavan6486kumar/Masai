const profile={
    name:"pavan",
    age:21,
    address:{
        zipcode:515551,
        city:"kadiri"
    }
}

const update=(newAge,newZipCode,country)=>{
    profile.age=newAge
    profile.address.zipcode=newZipCode
    profile.address.country=country
}

const merged=()=>{
    return {...profile}
}

update(22,515552,"India")
console.log(merged())