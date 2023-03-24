const express = require("express");
const app = express();
const port = 8000;
const faker = require("Faker") ;
// we can create a function to return a random / fake "Product"
const createUser = () => {
    const newFake = {
        id : faker.random.number(100),
        firstname: faker.Name.firstName(),
        lastname: faker.Name.lastName(),
        email: faker.Internet.email(),
        phone: faker.PhoneNumber.phoneNumber(),


        //Generates a random password.Available since v2.0.1
        // password: faker.random.password(20, true, /[A-Z]/)
    };
    return newFake;
};
    
const newFakeUser = createUser();
console.log(newFakeUser);
const createCompany = () => {
    const newFake = {
        id : faker.random.number(100),
        name: faker.Company.companyName(),
        Street: faker.Address.streetName(),
        city: faker.Address.city(),
        state: faker.Address.brState(),
        zipcode: faker.Address.zipCode(),
        country: faker.Address.ukCountry(),
    };
    return newFake;
};
    
const newFakeCompany = createCompany();
console.log(newFakeCompany);


app.get("/api/users/new", (req, res) => {
    res.json(newFakeUser);
});

app.get("/api/companies/new", (req, res) => {
    res.json(newFakeCompany);
});

app.get("/api/user/company/new" , (req,res)=>{
    let output = {
        User: newFakeUser,
        Company: newFakeCompany
    }
    console.log(`===================${output}`);
    res.json(output);
    
    

})

app.listen( port, () => console.log(`Listening on port: ${port}`) );
