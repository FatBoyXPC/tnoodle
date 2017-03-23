export const me = function(me=null, action) {
  switch(action.type) {
    case "FETCH_ME_SUCCESS":
      return action.me;
    default:
      return me;
  }
};

export const competitionJson = function(competitionJson=null, action) {
  switch(action.type) {
    case "FETCH_COMPETITION_JSON_SUCCESS":
      return action.competitionJson;
    default:
      return competitionJson;
  }
};