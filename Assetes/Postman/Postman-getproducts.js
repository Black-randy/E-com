pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response is in JSON format", function () {
    pm.response.to.be.json;
});

pm.test("Response contains products array", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.be.an('array');
});

pm.test("Each product has required fields", function () {
    var jsonData = pm.response.json();
    jsonData.forEach(function(product) {
        pm.expect(product).to.have.property('id');
        pm.expect(product).to.have.property('name');
        pm.expect(product).to.have.property('price');
        pmexpect(product).to.have.property('description');
    });
});