// Аutotests for Postman


pm.test("Мой первый автотест", function () {
    pm.response.to.have.status(200);
});

pm.test("Body matches string Яндекс.Практикум", function () {
    pm.expect(pm.response.text()).to.include("Яндекс.Практикум");
});

pm.test("Response time is less than 50ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(50);
});

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});

pm.test("The Starship name is Sentinel-class landing craft", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("Sentinel-class landing craft");
});