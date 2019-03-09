export default class BaseModel {
  constructor(api) {
    this.baseApi = "https://youtube-top.herokuapp.com/";
    this.api = api;
  }

  find = id => {
    return fetch(`${this.baseApi}/${this.api}/${id}`).then(data => data.json());
  };

  create = data => {
    return fetch(`${this.baseApi}/${this.api}`, {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(data => data.json());
  };

  delete = id => {
    return fetch(`${this.baseApi}/${this.api}/${id}`, {
      method: "delete"
    }).then(data => data.json());
  };

  update = (id, data) => {
    return fetch(`${this.baseApi}/${this.api}/${id}`, {
      method: "put",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(data => data.json());
  };
}
