console.log("Welcome to address book problem.");
// U1 Ability to create contact class and its object with certain fields.
class Contact{
    // Spread operator used to provide multiple dynamic parameters to constructor
    constructor(...param){
        this.firstName = param[0];
        this.lastName = param[1];
        this.address = param[2];
        this.city = param[3];
        this.state = param[4];
        this.zip = param[5];
        this.phoneNo = param[6];
        this.emailId = param[7];
    }
    //gettter and setter for firstName.
    get firstName() { return this._firstName; }
    set firstName(firstName) {
        this._firstName=firstName;
    }

     //getter and setter for lastName
     get lastName() { return this._lastName; }
     set lastName(lastName) {
         this._lastName = lastName;
     }
 
     //getter and setter for address
     get address() { return this._address; }
     set address(address) {
         this._address = address;
     }
 
     //getter and setter for city
     get city() { return this._city; }
     set city(city) {
         this._city = city;
     }
 
     //getter and setter for state
     get state() { return this._state; }
     set state(state) {
         this._state = state;
     }
 
     //getter and setter for zip
     get zip() { return this._zip; }
     set zip(zip) {
         this._zip = zip;
     }
 
     // getter and setter for PhoneNo
     get phoneNo() { return this._phoneNo; }
     set phoneNo(phoneNo) {
         this._phoneNo = phoneNo;
     }
 
     // getter and setter for email
     get emailId() { return this._emailId; }
     set emailId(emailId) {
         this._emailId = emailId;
     }
     // overriding toString() method
    toString() {
        return "\nFirstName: " + this.firstName + "\nLastName: " + this.lastName + "\nAddress: " + this.address + "\nCity: " + this.city + "\nState: " + this.state + "\nZip: " + this.zip + "\nPhone Number: " + this.phoneNo + "\nEmailId: " + this.emailId;
    }
}
contact = new Contact("Rajat","Sharma","Kotla","Delhi","Delhi",674678,7894563256,"rs@gmail.com");
console.log(contact.toString());
