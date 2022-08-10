import got from 'got';
import FormData from "form-data";
const args = process.argv.slice(2);
const init_data = {
  name: "gneff",
  pass: "an1980",
  op: "Вход в систему",
  persistent_login: 1,
  form_id: "user_login_block",
  'openid.return_to': 'http://flibusta.is/openid/authenticate?destination=node'
};

const config = {
  method: "POST", // POST, PUT, DELETE, etc.
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
  referrer: "http://flibusta.is/", // или "" для того, чтобы не послать заголовок Referer,
  // или URL с текущего источника
  referrerPolicy: "unsafe-url", // no-referrer, origin, same-origin...
  mode: "cors", // same-origin, no-cors
  credentials: "include", // omit, include
  cache: "default", // no-store, reload, no-cache, force-cache или only-if-cached
  redirect: "follow", // manual, error
  keepalive: false, // true
}

const options = {
  headers: {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'accept-encoding': 'gzip, deflate',
    'accept-language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
    'cache-control': 'max-age=0',
    'content-length':  "313",
    'content-type':  'application/x-www-form-urlencoded',
    'host':  'flibusta.is',
    'origin': 'http://flibusta.is',
    'proxy-connection': 'keep-alive',
    'referer': 'http://flibusta.is/',
    'upgrade-insecure-requests':  "1",
    'user-agent':  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36'
  },
};

const getCode = async ()=> {
  const response = await got.get('http://flibusta.is',{
    headers:{'user-agent':  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36'}
  })
  //console.log(response);
  const {body} = response;
  let regexp = /id="form(.*?)"/g;
  let matchAll = body.matchAll(regexp);
  matchAll = Array.from(matchAll);
  let firstMatch = matchAll[0];
  return  "form"+firstMatch[1];
}

const sendRequest = async (code)=> {
  const map = new Map();

  init_data.form_build_id = code;
  const form = new FormData();
  Object.keys(init_data).forEach(function (key) {
    form.append(key, init_data[key]);
  });
  options.body = form;
  options.cache = map;

  const response =  await got.post('http://flibusta.is/node?destination=node', options);

  console.log([...map.keys()])
  return response;
}




const login = async ()=> {

  console.log("args", args);
  let code;
  try {
    if(args[0]){
      code = args[0];
    }else{
      code = await getCode();
    }

    console.log("code", code);
    const response = await sendRequest(code);
    console.log("response",response);
  }catch(e) {
    console.log("error",e);
  }




}


login();
