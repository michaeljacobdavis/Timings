var buster = require("buster");

buster.testCase("Fun", {
    "is true": function () {
        assert.equals(2 + 3, 5);
    }
});