const init = function () {
  const grpc = require("@grpc/grpc-js");

  const protoLoader = require("@grpc/proto-loader");

  const PROTO_PATH = __dirname + "/salary.proto";

  const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  });

  const paymentProto = grpc.loadPackageDefinition(packageDefinition).employee;

  function main() {
    const client = new paymentProto.Employee(
      "localhost:4500",
      grpc.credentials.createInsecure(),
    );
    let employeeIdList = [1, 2, 3];
    client.paySalary(
      { employeeIdList: employeeIdList },
      function (err, response) {
        console.log("Data:", response);
        console.log(err);
      },
    );
  }
  main();
};
exports.init = init;
init();
