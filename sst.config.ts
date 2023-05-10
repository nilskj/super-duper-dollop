import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "notes",
      region: "",
    };
  },
  stacks(app) {
    app.stack(API);
  },
} satisfies SSTConfig;
