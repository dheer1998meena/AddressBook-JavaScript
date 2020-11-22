console.log("Welcome to address book problem.");
// U1 Ability to create contact class and its object with certain fields.
class Contact{
    // Spread operator used to provide multiple dynamic parameters to constructor
    constructor(...param) {
        //UC 7 refactor
        if(checkDuplicate(param[0],param[1])!=0)
        {
            console.log("Contact with name: "+param[0]+" "+param[1]+" already exists!");
            return;
        }
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
        throw 'Invalid first name: '+firstName;
    }

     //getter and setter for lastName
     get lastName() { return this._lastName; }
     set lastName(lastName) {
         let lastNameRegExp = RegExp('^[A-Z]{1}[a-z]{2,}$');
     if (lastNameRegExp.test(lastName))
         this._lastName = lastName;
     else
       throw 'Invalid last name: '+lastName;
     }
 
     //getter and setter for address
     get address() { return this._address; }
     set address(address) {
         let addressRegExp = RegExp('^[A-Za-z ]{4,}[ ]*$');
         if (addressRegExp.test(address))
             this._address = address;
         else
             throw 'Invalid address: '+address;
     }
 
     //getter and setter for city
     get city() { return this._city; }
     set city(city) {
         let cityRegExp = RegExp('^[A-Za-z ]{4,}$');
         if (cityRegExp.test(city))
             this._city = city;
         else
             throw 'Invalid city: '+city;
     }
 
     //getter and setter for state
     get state() { return this._state; }
     set state(state) {
         let stateRegExp = RegExp('^[A-Za-z ]{4,}$');
         if (stateRegExp.test(state))
             this._state = state;
         else
             throw 'Invalid state: '+state;
     }
 
     //getter and setter for zip
     get zip() { return this._zip; }
     set zip(zip) {
         let zipRegExp = RegExp('^[0-9]{3}[ ]*[0-9]{3}$');
         if (zipRegExp.test(zip))
             this._zip = zip;
         else
             throw 'Invalid zip: '+zip;
     }
 
     // getter and setter for PhoneNo
     get phoneNo() { return this._phoneNo; }
     set phoneNo(phoneNo) {
         let phoneRegExp = RegExp('^[0-9]{2}[ ]*[0-9]{10}$');
         if (phoneRegExp.test(phoneNo))
             this._phoneNo = phoneNo;
         else
             throw 'Invalid phone number: '+phoneNo;
     }

    // getter and setter for email
    get emailId() { return this._emailId; }
    set emailId(emailId) {
        let emailIdRegExp = RegExp('^[a-zA-Z0-9]+([.+_-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.][a-zA-Z]{3})+([.][a-zA-Z]{2})?$');
        if (emailIdRegExp.test(emailId))
            this._emailId = emailId;
            else
            throw 'Invalid Email : '+emailId;
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
    addressBook.push(new Contact("Dinesh", "Kartik", "EdenGarden", "Kolkatta", "WestBengal", "875 678", "91 2342123456", "gg@gmail.com"));
    addressBook.push(new Contact("Dinesh", "Kartik", "EdenGardens", "Fwrff", "Bengal", "875 678", "91 2342123456", "gg@gmail.com"));
    addressBook.push(new Contact("Virendra", "Sehwag", "Kotla", "Delhi", "NewDelhi", "002 678", "91 5674567890", "vs@gmail.com"));
    //UC 7 refactor
    //remove empty elements from array
    for(let i in addressBook)
    {
        if(addressBook[i].firstName==undefined)
        addressBook.splice(i,1);
    }
    addressBook.forEach(contact=>console.log(contact.toString()));
    }

 catch(e){
    console.error(e);
 }
 // UC 4 : Ability to find existing contact person using their name and edit it
editContact("Lokesh Rahul","Kurukshetra");
editContact("Virendra Sehwag","Jabalpur");
console.log("Details after updation:")
addressBook.forEach(contact=>console.log(contact.toString()));
function editContact(fullName,value)
{
    var splitStr=fullName.split(" ");
    for(let i=0;i<addressBook.length;i++)
    {
        //find the contact using name
        if(addressBook[i].firstName==splitStr[0] && addressBook[i].lastName==splitStr[1])
        {  
            //update address of the found contact    
            addressBook[i].address=value;
            break;
        }        
    }
}
// UC5 Ability to find a person with name delete it from the array
deleteContact("Lokesh Rahul");
console.log("\nArray details after deletion:")
addressBook.forEach(contact=>console.log(contact.toString()));
function deleteContact(fullName)
{
    var splitStr=fullName.split(" ");
    for(let i in addressBook)
    {
        if(addressBook[i].firstName==splitStr[0] && addressBook[i].lastName==splitStr[1])
        {
            //splice(x,y) removes next y elements from the xth position in an array
            addressBook.splice(i,1);
            break;
        }
    }
}
// UC6 Find number of contacts in array using reduce()
let count = addressBook.reduce((count)=>count+1,0);
console.log("Total no of contacts in array: "+count);
// UC7 Ability to ensure there is no Duplicate Entry of the same Person in the Address Book
function checkDuplicate(fname,lname)
{
    let count=addressBook.filter(contact => contact.firstName == fname && contact.lastName == lname).reduce(count=>count+1,0);
    return count;
}

// UC8 Ability to search Person in a particular City or State
console.log("Contact present in the city: "+searchContactInCityOrState("Lokesh Rahul","Mohali"));
function searchContactInCityOrState(fullName,city)
{
    var splitStr=fullName.split(" ");
    var contactExists=addressBook.filter(contact=>contact.city==city && contact.firstName==splitStr[0] && contact.lastName==splitStr[1]);
    if(contactExists!=null)
    {
        return true;
    }
    else
    return false;
}
// UC 9 : Ability to view Persons by City or State
console.log("\nContacts present in city:")
viewPersonsInACityOrState("Delhi");
function viewPersonsInACityOrState(city)
{
    addressBook.filter(contact=>contact.city==city).forEach(contact=>console.log(contact.toString()));
}
