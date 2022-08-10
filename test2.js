import axios from 'axios';

const options = {
  headers: {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'accept-encoding': 'gzip, deflate',
    'accept-language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
    'cache-control': 'max-age=0',
    'connection': 'keep-alive',
    'user-agent':  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36'
  },

};


const login = async ()=> {

  const code = Buffer.from( "gneff:an1980" ).toString('base64');
  options.headers.authorization = `Basic ${code}`;


  const resp = await  axios.get("http://flibusta.is/opds/polka",options);

  console.log(resp);
}


login()
