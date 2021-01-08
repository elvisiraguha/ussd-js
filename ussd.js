module.exports = (req, res) => {
  switch (req.body.text) {
    case '':
      return res.send('CON what do you want to choose \n 1. continue \n 2. exit');
    case '1':
      return res.send('CON sure you want to continue \n 1. yes \n 2. no');
    case '2':
      return res.send('END thank you for trying this!');
    case '1*1':
      return res.send('CON enter your name');
    case '1*2':
      return res.send('END thank you for trying this!');
    default:
      return res.send(
        'END thank you for trying this! ' + req.body.text.split('*')[2].toUpperCase()
      );
  }
};
