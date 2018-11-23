import Vue from "vue";
import { format } from "@/helpers.js";

export const filters = {
  titleCase: str => {
    if (typeof str !== "string" || str.length === 0) {
      return "";
    }
    return str
      .toLowerCase()
      .split(" ")
      .map(word => word.replace(word[0], word[0].toUpperCase()))
      .join(" ");
  },
  format
};

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));
