import Lib from "jsonapi-serializer";
import HttpError from "../errors/http-error";

export default class Base {
  type = "";
  attributes: Array<string> = [];
  relationships = {};

  serialize = (data, meta = {}) => {
    try {
      const Serializer = new Lib.Serializer(this.type, {
        attributes: this.attributes,
        meta,
        ...this.relationships,
      });
      return Serializer.serialize(data);
    } catch (e) {
      throw new HttpError(500, "Serializer Error");
    }
  };

  deserialize = (data) => {
    try {
      return new Lib.Deserializer({
        keyForAttribute: "camelCase",
      }).deserialize(data);
    } catch (e) {
      throw new HttpError(400, "Serializer Error");
    }
  };
}
