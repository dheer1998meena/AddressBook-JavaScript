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
        let firstNameRegExp = RegExp('^[A-Z]{1}[a-z]{2,}$');
     if (firstNameRegExp.test(firstName))
        this._firstName=firstName;
     else
        throw 'Invalid first name!';
    }

     //getter and setter for lastName
     get lastName() { return this._lastName; }
     set lastName(lastName) {
         let lastNameRegExp = RegExp('^[A-Z]{1}[a-z]{2,}$');
     if (lastNameRegExp.test(lastName))
         this._lastName = lastName;
     else
         throw 'Invalid last name!';
     }
 
     //getter and setter for address
    get address() { return this._address; }
    set address(address) {
        let addressRegExp = RegExp('^[A-Za-z]{4,}$');
        if (addressRegExp.test(address))
            this._address = address;
        else
            throw 'Invalid address!';
    }

    //getter and setter for city
    get city() { return this._city; }
    set city(city) {
        let cityRegExp = RegExp('^[A-Za-z]{4,}$');
        if (cityRegExp.test(city))
            this._city = city;
        else
            throw 'Invalid city!';
    }

    //getter and setter for state
    get state() { return this._state; }
    set state(state) {
        let stateRegExp = RegExp('^[A-Za-z]{4,}$');
        if (stateRegExp.test(state))
            this._state = state;
        else
            throw 'Invalid state!';
    }

    //getter and setter for zip
    get zip() { return this._zip; }
    set zip(zip) {
        let zipRegExp = RegExp('^[0-9]{3}[ ]*[0-9]{3}$');
        if (zipRegExp.test(zip))
            this._zip = zip;
        else
            throw 'Invalid zip!';
    }

    // getter and setter for PhoneNo
    get phoneNo() { return this._phoneNo; }
    set phoneNo(phoneNo) {
        let phoneRegExp = RegExp('^[0-9]{2}[ ]*[0-9]{10}$');
        if (phoneRegExp.test(phoneNo))
            this._phoneNo = phoneNo;
        else
            throw 'Invalid phone number!';
    }

    // getter and setter for email
    get emailId() { return this._emailId; }
    set emailId(emailId) {
        let emailIdRegExp = RegExp('^[a-zA-Z0-9]+([.+_-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.][a-zA-Z]{3})+([.][a-zA-Z]{2})?$');
        if (emailIdRegExp.test(emailId))
            this._emailId = emailId;
        else
            throw 'Invalid email!';
    }

     // overriding toString() method
    toString() {
        return "\nFirstName: " + this.firstName + "\nLastName: " + this.lastName + "\nAddress: " + this.address + "\nCity: " + this.city + "\nState: " + this.state + "\nZip: " + this.zip + "\nPhone Number: " + this.phoneNo + "\nEmailId: " + this.emailId;
    }
}
// UC3 New address book array to store contacts.
let addressBook = new Array();
try{
    contact = new Contact("Rajat","Sharma","Kotla","Delhi","Delhi", "678546","91 7894563256","rs@gmail.com");
    addressBook.push(contact);
    addressBook.push(new Contact("Lokesh", "Rahul", "Mohali", "Mohali", "Punjab", "345 678", "91 8765432345", "kr@gmail.com"));
    addressBook.push(new Contact("Dinesh", "Kartik", "EdenGarden", "Kolkata", "WestBengal", "875 678", "91 2342123456", "gg@gmail.com"));
    addressBook.push(new Contact("Virendra", "Sehwag", "Kotla", "Delhi", "NewDelhi", "002 678", "91 5674567890", "vs@gmail.com"));
    addressBook.forEach(contact=>console.log(contact.toString()));
    }

 catch(e){
    console.error(e);
 }
    