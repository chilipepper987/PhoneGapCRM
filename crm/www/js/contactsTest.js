document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.contacts);
    function onSuccess(contacts) {
        alert('Found ' + contacts.length + ' contacts.');
        console.log(contacts);
    }
    ;

    function onError(contactError) {
        alert('onError!');
    }
    ;

// find all contacts with 'Bob' in any name field
    var options = new ContactFindOptions();
    options.filter = "Micah";
    options.multiple = true;
    options.desiredFields = [navigator.contacts.fieldType.id];
    options.hasPhoneNumber = true;
    var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
    navigator.contacts.find(fields, onSuccess, onError, options);
}