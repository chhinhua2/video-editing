import axiosClient from "./axios.client";

const videoEditingApi = {
  getMatches: () => {
    const url = "/VideoEditings/getMatch";
    return axiosClient.get(url);
  },

  getMatchById: (params) => {
    const url = "/VideoEditings/getMatchById";
    return axiosClient.get(url, { params });
  },

  getTournaments: () => {
    const url = "/VideoEditings/getTournament";
    return axiosClient.get(url);
  },

  addMatch: (data) => {
    const url = "/VideoEditings/addMatch";
    return axiosClient.post(url, data);
  },

  concatHighlight: (matchId, hlDescription, data) => {
    const url = `/VideoEditings/concatHighlight`;
    const body = {
      matchId: matchId,
      description: hlDescription,
      jsonFile: data,
    };
    return axiosClient.post(url, body);
  },

  notConcatHighlight: (matchId, hlDescription, data) => {
    const url = `/VideoEditings/notConcatHighlight`;
    const body = {
      matchId: matchId,
      description: hlDescription,
      jsonFile: data,
    };
    return axiosClient.post(url, body);
  },

  getHighlight: () => {
    const url = "/VideoEditings/getHighlight";
    return axiosClient.get(url);
  },

  getHighlightOfMatch: (matchId) => {
    const url = `/VideoEditings/getHighlightOfMatch/${matchId}`;
    return axiosClient.get(url);
  },

  deleteHighlight: (id) => {
    const url = `/VideoEditings/deleteHighlight/${id}`;
    return axiosClient.delete(url);
  },
  deleteMatch: (id) => {
    const url = `/VideoEditings/deleteMatch/${id}`;
    return axiosClient.delete(url);
  },

  uploadJsonFile: (id, formdata) => {
    const url = `/VideoEditings/uploadJson/${id}`;
    return axiosClient.post(url, formdata);
  },

  updateLogTrimmed: (id, eventStorage) => {
    const url = `VideoEditings/updateLogTrimmed/${id}`;
    return axiosClient.post(url, eventStorage);
  },

  downloadOne: (matchId, hlDescription, data) => {
    const url = `/VideoEditings/download`;
    const body = {
      matchId: matchId,
      description: hlDescription,
      jsonFile: data,
    };
    return axiosClient.post(url, body);
  },

  downloadNotMerge: (matchId, hlDescription, data) => {
    const url = `/VideoEditings/notConcatHighlight`;
    const body = {
      matchId: matchId,
      description: hlDescription,
      jsonFile: data,
    };
    return axiosClient.post(url, body);
  },

  uploadSmallVideo: (formdata) => {
    const url = `/VideoEditings/uploadSmallVideo`;
    return axiosClient.post(url, formdata);
  },

  uploadLogo: (matchId, formdata) => {
    const url = `/VideoEditings/uploadLogo/${matchId}`;
    return axiosClient.post(url, formdata);
  },

  deleteLogo: (matchId, position) => {
    const url = `/VideoEditings/deleteLogo/${matchId}/${position}`;
    return axiosClient.post(url);
  },
};

export default videoEditingApi;
