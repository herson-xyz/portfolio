const express = require('express');
const app = express();
let port = process.env.PORT || 3000;
app.listen(port, () => console.log('listening at ' + port));
app.use(express.static('public'));

// app.get('/.well-known/acme-challenge/:content', function(req, res) {
//     res.send('J-XBhKLq6jp86ixjaLGw20U4KzkrzWQ6vkEW6U8SiQM.k9l5F51z8IaUgTLz7bZd-unw6t2WWsF9-bygm0ZVkvA')
//   })