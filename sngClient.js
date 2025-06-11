const init = function () {
  const grpc = require("@grpc/grpc-js");

  const protoLoader = require("@grpc/proto-loader");

  const PROTO_PATH = __dirname + "/sng.proto";

  const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  });

  const sngProto = grpc.loadPackageDefinition(packageDefinition).poker;

  function main() {
    const client = new sngProto.Sng(
      "15.220.21.119:9001",
      grpc.credentials.createInsecure(),
    );
    client.Test(function (err, response) {
      console.log("Data:", response);
      console.log(err);
    });
  }
  main();
};
exports.init = init;
init();
