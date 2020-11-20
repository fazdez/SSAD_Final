gdjs.evtsExt__Grid__Snap = {};
gdjs.evtsExt__Grid__Snap.GDTileObjects1= [];
gdjs.evtsExt__Grid__Snap.GDTileObjects2= [];

gdjs.evtsExt__Grid__Snap.conditionTrue_0 = {val:false};
gdjs.evtsExt__Grid__Snap.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Grid__Snap.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Tile"), gdjs.evtsExt__Grid__Snap.GDTileObjects1);
{for(var i = 0, len = gdjs.evtsExt__Grid__Snap.GDTileObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Grid__Snap.GDTileObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("cell_width")) * Math.round((gdjs.evtsExt__Grid__Snap.GDTileObjects1[i].getX()) / gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("cell_width"))),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("cell_height")) * Math.round((gdjs.evtsExt__Grid__Snap.GDTileObjects1[i].getY()) / gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("cell_height"))));
}
}}

}


};

gdjs.evtsExt__Grid__Snap.func = function(runtimeScene, Tile, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Tile": Tile
},
  _objectArraysMap: {
"Tile": gdjs.objectsListsToArray(Tile)
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

gdjs.evtsExt__Grid__Snap.GDTileObjects1.length = 0;
gdjs.evtsExt__Grid__Snap.GDTileObjects2.length = 0;

gdjs.evtsExt__Grid__Snap.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

