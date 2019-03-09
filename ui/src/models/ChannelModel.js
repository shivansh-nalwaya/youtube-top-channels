import BaseModel from "./BaseModel";
import { extendObservable } from "mobx";

class ChannelModel extends BaseModel {
  constructor() {
    super("api/");
    extendObservable(this, {
      all: [],
      isLoading: true
    });
  }

  getAll = () => {
    return fetch(`${this.baseApi}/${this.api}`)
      .then(data => data.json())
      .then(res => {
        this.all = res.data.map(e => {
          e.key = e._id;
          return e;
        });
        this.isLoading = false;
      });
  };

  topChannels = () => {
    return fetch(`${this.baseApi}/${this.api}top_channels`).then(data =>
      data.json()
    );
  };
}

export default ChannelModel;
