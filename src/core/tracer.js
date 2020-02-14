import tracerLib from "tracer";

export default tracerLib.colorConsole({
  format : [
    "{{timestamp}} {{file}}:{{line}} <{{title}}> {{message}}",
    {
      error : "{{timestamp}} {{file}}:{{line}} <{{title}}> {{message}}\nCall Stack:\n{{stack}}" // error format
    }
  ],
  dateformat : "HH:MM:ss.L",
  preprocess :  data => {
    data.title = data.title.toUpperCase();
  },
});
