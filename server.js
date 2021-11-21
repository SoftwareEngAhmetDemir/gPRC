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
  getAllNews: (call, callback) => {
    const _news = { id: '3', title: "Note 1", body: "Content 1", postImage: "Post image 1" };
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
    // console.log(newsId)
  
    news = news.filter(({ id }) => id !== newsId);
    callback(null, {news});
  },
  streamfunc:(call,callback) => {
    const _news = { id: '3', title: "Note 1", body: "Content 1", postImage: "Post image 1" };
    // console.log(   call.request)
    // _.write(_news)
call.on('data', (data) => {
 
  console.log('ahmed')
  console.log(data)
 
}
)

call.on('end', () => {
 
  console.log('finished');
})

call.write(_news) // call on('data') in get_news or client
call.end(); //// call on('end') in get_news or client

// callback(_,{news})
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