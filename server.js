const grpc = require("@grpc/grpc-js");
const PROTO_PATH = "./news.proto";
var protoLoader = require("@grpc/proto-loader");

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};
var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const newsProto = grpc.loadPackageDefinition(packageDefinition);


const server = new grpc.Server();
let news = [
  { id: "1", title: "Note 1", body: "Content 1", postImage: "Post image 1" },
  { id: "2", title: "Note 2", body: "Content 2", postImage: "Post image 2" },
 
];

server.addService(newsProto.NewsService.service, {
  getAllNews: (_, callback) => {
    // const _news = { id: '3', title: "Note 1", body: "Content 1", postImage: "Post image 1" };
    // news.push(_news);
    
    callback(null, {news});
  },
  AddNews: (_, callback) => {
    const _news = { id: '3', title: "Note 1", body: "Content 1", postImage: "Post image 1" };
    news.push(_news);
    console.log(news)
    callback(null, {news});
  },
  deleteNews: (_, callback) => {
    const newsId = _.request.id;
    console.log(newsId)
    news = news.filter(({ id }) => id !== newsId);
    callback(null, {news});
  }
});

server.bindAsync(
  "127.0.0.1:50051",
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    console.log("Server running at http://127.0.0.1:50051");
    server.start();
  }
);