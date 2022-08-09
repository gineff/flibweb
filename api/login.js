import axios from 'axios';
import qs from 'qs';

export default function login(req, res) {

  let response = {};

  const data = {
    name: "gneff",
    pass: "an1980",
    op: "Вход в систему",
    persistent_login: 1,
    form_build_id: "form-S4Gy80iMmDow0RB0QeNiWgoEsOzRPp_s5H1kN15YSMM",
    form_id: "user_login_block",
    'openid.return_to': 'http://flibusta.is/openid/authenticate?destination=node'
  };

  const options = {
    method: 'POST',
    headers: {
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'accept-encoding': 'gzip, deflate',
      'accept-language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
      'cache-control': 'max-age=0',
      'content-length':  313,
      'content-type':  'application/x-www-form-urlencoded',
      'host':  'flibusta.is',
      'origin': 'http://flibusta.is',
      'proxy-connection': 'keep-alive',
      'referer': 'http://flibusta.is/',
      'upgrade-insecure-requests':  1,
      'user-agent':  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36'
    },
    data: qs.stringify(data),
    url: 'http://flibusta.is'
  };

  axios(options).then(({data})=> {
    response.data = JSON.stringify(data)
    res.statusCode = 200;
    res.json(response);
  }).catch((err)=> {
    //console.log(err);
    res.statusCode = 200;
    res.json(err);
    // handleAuthenticationError(err, setError);
  })


  //res.statusCode = 200;
 // res.json(response);
}
