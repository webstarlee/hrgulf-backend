import axios from "axios";

export const GET = "GET";
export const POST = "POST";
export const PUT = "PUT";
export const PATCH = "PATCH";
export const DELETE = "DELETE";


let CancelToken = axios.CancelToken;

let cancel = () => {
};
export const cancelRequest = () => {
  return cancel;
};

const getQueryString = (params) => {
  if (!params)
    return "";

  let esc = encodeURIComponent;
  return (
    "?" +
    Object.keys(params)
      .map(k => esc(k) + "=" + esc(params[k]))
      .join("&")
  );
};

const getJsonBody = (params) => {
  return params;
};

export const setHeader = (params) => {
  Object.entries(params).forEach(([key, value]) => {
    axios.defaults.headers.common[key] = value;
  });
};
export default (requestType, resourceURL, parameters, headers, config) => {
  switch (requestType) {
    case GET:
      return new Promise((resolve, reject) => {
        const queryString = getQueryString(parameters);
        axios
          .get(resourceURL + queryString, {
            ...config,
            cancelToken: new CancelToken(c => {
              cancel = c;
            }),
            headers: headers,
          })
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            reject(error);
          });
      });

    case POST:
      return new Promise((resolve, reject) => {
        const jsonBody = getJsonBody(parameters);
        axios
          .post(resourceURL, jsonBody, {
            ...config,
            cancelToken: new CancelToken(c => {
              cancel = c;
            }),
            headers: headers,
          })
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            reject(error);
          });
      });

    case PUT:
      return new Promise((resolve, reject) => {
        const jsonBody = getJsonBody(parameters);
        axios
          .put(resourceURL, jsonBody, {
            ...config,
            cancelToken: new CancelToken(c => {
              cancel = c;
            }),
            headers: headers,
          })
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            reject(error);
          });
      });

    case PATCH:
      return new Promise((resolve, reject) => {
        const jsonBody = getJsonBody(parameters);
        axios
          .patch(resourceURL, jsonBody, {
            ...config,
            cancelToken: new CancelToken(c => {
              cancel = c;
            }),
            headers: headers,
          })
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            reject(error);
          });
      });

    case DELETE:
      return new Promise((resolve, reject) => {
        const queryString = getQueryString(parameters);
        axios
          .delete(resourceURL + queryString, {
            ...config,
            cancelToken: new CancelToken(c => {
              cancel = c;
            }),
            headers: headers,
          })
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            reject(error);
          });
      });

    default:
      break;
  }
};
