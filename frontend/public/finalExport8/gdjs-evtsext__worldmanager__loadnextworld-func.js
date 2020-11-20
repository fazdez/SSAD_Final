gdjs.evtsExt__WorldManager__LoadNextWorld = {};

gdjs.evtsExt__WorldManager__LoadNextWorld.conditionTrue_0 = {val:false};
gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__WorldManager__LoadNextWorld.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__WorldManager__LoadNextWorld.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__WorldManager__LoadNextWorld.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = false;
gdjs.evtsExt__WorldManager__LoadNextWorld.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastWorld")) == 2;
}if ( gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__WorldManager__LoadNextWorld.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastLevel")) == 3;
}}
if (gdjs.evtsExt__WorldManager__LoadNextWorld.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("lastLevel").setNumber(1);
}{runtimeScene.getGame().getVariables().get("lastWorld").setNumber(3);
}}

}


{


{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "World1Level2", false);
}}

}


};gdjs.evtsExt__WorldManager__LoadNextWorld.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = false;
gdjs.evtsExt__WorldManager__LoadNextWorld.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastWorld")) == 3;
}if ( gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__WorldManager__LoadNextWorld.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastLevel")) == 1;
}}
if (gdjs.evtsExt__WorldManager__LoadNextWorld.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("lastLevel").setNumber(2);
}}

}


{


{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "World1Level3", false);
}}

}


};gdjs.evtsExt__WorldManager__LoadNextWorld.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = false;
gdjs.evtsExt__WorldManager__LoadNextWorld.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastWorld")) == 3;
}if ( gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__WorldManager__LoadNextWorld.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastLevel")) == 2;
}}
if (gdjs.evtsExt__WorldManager__LoadNextWorld.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("lastLevel").setNumber(3);
}}

}


{


{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "World2LvSelector", false);
}}

}


};gdjs.evtsExt__WorldManager__LoadNextWorld.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("level")) == 1;
}if (gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__WorldManager__LoadNextWorld.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("level")) == 2;
}if (gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__WorldManager__LoadNextWorld.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("level")) == 3;
}if (gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__WorldManager__LoadNextWorld.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__WorldManager__LoadNextWorld.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = false;
gdjs.evtsExt__WorldManager__LoadNextWorld.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastWorld")) == 1;
}if ( gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__WorldManager__LoadNextWorld.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastLevel")) == 3;
}}
if (gdjs.evtsExt__WorldManager__LoadNextWorld.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("lastLevel").setNumber(1);
}{runtimeScene.getGame().getVariables().get("lastWorld").setNumber(2);
}}

}


{


{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "AnotherStageScene", false);
}}

}


};gdjs.evtsExt__WorldManager__LoadNextWorld.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = false;
gdjs.evtsExt__WorldManager__LoadNextWorld.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastWorld")) == 2;
}if ( gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__WorldManager__LoadNextWorld.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastLevel")) == 1;
}}
if (gdjs.evtsExt__WorldManager__LoadNextWorld.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("lastLevel").setNumber(2);
}}

}


{


{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "AnotherStageScene", false);
}}

}


};gdjs.evtsExt__WorldManager__LoadNextWorld.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = false;
gdjs.evtsExt__WorldManager__LoadNextWorld.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastWorld")) == 2;
}if ( gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__WorldManager__LoadNextWorld.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastLevel")) == 2;
}}
if (gdjs.evtsExt__WorldManager__LoadNextWorld.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("lastLevel").setNumber(3);
}}

}


{


{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "World3LvSelector", false);
}}

}


};gdjs.evtsExt__WorldManager__LoadNextWorld.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("level")) == 1;
}if (gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("stage").setNumber(2);
}
{ //Subevents
gdjs.evtsExt__WorldManager__LoadNextWorld.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("level")) == 2;
}if (gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("stage").setNumber(3);
}
{ //Subevents
gdjs.evtsExt__WorldManager__LoadNextWorld.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("level")) == 3;
}if (gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__WorldManager__LoadNextWorld.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__WorldManager__LoadNextWorld.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = false;
gdjs.evtsExt__WorldManager__LoadNextWorld.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastWorld")) == 1;
}if ( gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__WorldManager__LoadNextWorld.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastLevel")) == 1;
}}
if (gdjs.evtsExt__WorldManager__LoadNextWorld.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("lastLevel").setNumber(2);
}}

}


{


{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "DesertLevel3", false);
}}

}


};gdjs.evtsExt__WorldManager__LoadNextWorld.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = false;
gdjs.evtsExt__WorldManager__LoadNextWorld.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastWorld")) == 1;
}if ( gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__WorldManager__LoadNextWorld.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastLevel")) == 2;
}}
if (gdjs.evtsExt__WorldManager__LoadNextWorld.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("lastLevel").setNumber(3);
}}

}


{


{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "WorldSelectorScene", false);
}}

}


};gdjs.evtsExt__WorldManager__LoadNextWorld.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("level")) == 1;
}if (gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "DesertLevel2", false);
}}

}


{


gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("level")) == 2;
}if (gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__WorldManager__LoadNextWorld.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("level")) == 3;
}if (gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__WorldManager__LoadNextWorld.eventsList9(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__WorldManager__LoadNextWorld.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("world")) == 3;
}if (gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__WorldManager__LoadNextWorld.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("world")) == 2;
}if (gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__WorldManager__LoadNextWorld.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("world")) == 1;
}if (gdjs.evtsExt__WorldManager__LoadNextWorld.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__WorldManager__LoadNextWorld.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__WorldManager__LoadNextWorld.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__WorldManager__LoadNextWorld.eventsList11(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__WorldManager__LoadNextWorld.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__WorldManager__LoadNextWorld.eventsList12(runtimeScene, eventsFunctionContext);
return;
}

