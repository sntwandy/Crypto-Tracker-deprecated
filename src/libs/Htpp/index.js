export default class Http {
  static instance = new Http();

  get = async (url) => {
    try {
      let request = await fetch(url);
      let json = await request.json();
      return json;
    } catch (err) {
      console.log('Http get method error: ', err);

      throw Error(err);
    }
  };

  post = async (url, body) => {
    try {
      let request = await fetch(url, {
        method: 'POST',
        body,
      });
      let json = await request.json();
      return json;
    } catch (err) {
      console.log('Http post method error: ', err);

      throw Error(err);
    }
  };
}
