const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();

//任何时候访问如下路径时，让expressGraphQL处理
app.use('/graphql', expressGraphQL({
  graphiql: true
}))

app.listen( 4000, () => {
  console.log('Listening');
});