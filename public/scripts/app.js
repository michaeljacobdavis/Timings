var vm = {
    username: ko.observable("")
};

ko.applyBindings(vm);

var socket = io.connect('/');
socket.on("username", function (data) {
    vm.username(data);
});
