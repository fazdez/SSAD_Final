gdjs.evtsExt__UpdateManager__onLevelComplete = {};

gdjs.evtsExt__UpdateManager__onLevelComplete.conditionTrue_0 = {val:false};
gdjs.evtsExt__UpdateManager__onLevelComplete.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__UpdateManager__onLevelComplete.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{gdjs.evtTools.network.sendAsyncRequest("http://localhost:3001/api/scores/" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("userName")), "{\"world\":" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("world")) + ",\"level\":" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("level")) + ",\"time\":" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("levelDuration")) + ",\"score\":" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("endScore")) + " }", "POST", "application/json", runtimeScene.getVariables().get("error"), runtimeScene.getVariables().get("error"));
}}

}


};

gdjs.evtsExt__UpdateManager__onLevelComplete.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__UpdateManager__onLevelComplete.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

