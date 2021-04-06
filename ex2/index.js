const axios = require('axios');

(async () => {
    const response = await axios.get('https://opentdb.com/api.php?amount=10&type=multiple');
    const data = response.data;
  
    console.log('[async/await]クイズデータ : ', data.results);
  })();