let text="Information not available"
const user = { 
    id:123,
    profile: { 
        name: "John Doe", 
        address: { 
            city: "Los Angeles", 
             zipcode: "90001"
        } 
    } 
};

const {id=text,profile:{name=text, address:{city=text,zipcode=text}}}=user
console.log(`user ${name} (ID: ${id}) lives in ${city} (ZIP: ${zipcode})`)