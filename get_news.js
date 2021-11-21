const client = require("./client");

// client.getAllNews({}, (error, news) => {
//   if (error) throw error;
//   console.log(news);
// });


// client.AddNews({}, (error, news) => {
//     if (error) throw error;
//     console.log(news);
//   });




  // var call =  client.deleteNews({id:2}, (error, news) => {
  //       if (error) throw error;
  //       console.log(news);
  //     });
 

var call= client.streamfunc( { id: '3', title: "Note 1", body: "Content 1", postImage: "Post image 1" },(error, news) => {
    if(error) throw error;
    console.log(news);
  })

      call.on('data', (data) =>   {console.log('ahmed alo i am here')
        // console.log(data)
        call.write({ id: 'dataname'}) // call or emit the call.on('data') in server
}
      )

      call.on('end', () =>   {console.log('ended')
  call.end();  // call or emit the call.on('end') in server
    }
      // console.log(data)
    )