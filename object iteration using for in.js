let book = (obj1) => {
    res=""
    for(key in obj1){
        res+=key+" : "+obj1[key] + "\n"
    }
    return res
}
console.log(book({"title" : "The Hobbit", "author" : "Pavan Kumar" , "price" : 249}))