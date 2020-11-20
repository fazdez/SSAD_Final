gdjs.evtsExt__WorldManager__UnlockNextLevel = {};

gdjs.evtsExt__WorldManager__UnlockNextLevel.conditionTrue_0 = {val:false};
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__WorldManager__UnlockNextLevel.conditionTrue_1 = {val:false};
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__WorldManager__UnlockNextLevel.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = false;
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastWorld")) == 2;
}if ( gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastLevel")) == 3;
}}
if (gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("lastLevel").setNumber(1);
}{runtimeScene.getGame().getVariables().get("lastWorld").setNumber(3);
}}

}


{


{
}

}


};gdjs.evtsExt__WorldManager__UnlockNextLevel.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = false;
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastWorld")) == 3;
}if ( gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastLevel")) == 1;
}}
if (gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("lastLevel").setNumber(2);
}}

}


{


{
}

}


};gdjs.evtsExt__WorldManager__UnlockNextLevel.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = false;
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastWorld")) == 3;
}if ( gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastLevel")) == 2;
}}
if (gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("lastLevel").setNumber(3);
}}

}


{


{
}

}


};gdjs.evtsExt__WorldManager__UnlockNextLevel.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("level")) == 1;
}if (gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__WorldManager__UnlockNextLevel.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("level")) == 2;
}if (gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__WorldManager__UnlockNextLevel.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("level")) == 3;
}if (gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__WorldManager__UnlockNextLevel.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__WorldManager__UnlockNextLevel.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = false;
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastWorld")) == 1;
}if ( gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastLevel")) == 3;
}}
if (gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("lastLevel").setNumber(1);
}{runtimeScene.getGame().getVariables().get("lastWorld").setNumber(2);
}}

}


{


{
}

}


};gdjs.evtsExt__WorldManager__UnlockNextLevel.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = false;
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastWorld")) == 2;
}if ( gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastLevel")) == 1;
}}
if (gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("lastLevel").setNumber(2);
}}

}


{


{
}

}


};gdjs.evtsExt__WorldManager__UnlockNextLevel.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
}

}


};gdjs.evtsExt__WorldManager__UnlockNextLevel.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("level")) == 1;
}if (gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__WorldManager__UnlockNextLevel.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("level")) == 2;
}if (gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__WorldManager__UnlockNextLevel.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("level")) == 3;
}if (gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__WorldManager__UnlockNextLevel.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__WorldManager__UnlockNextLevel.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = false;
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastWorld")) == 1;
}if ( gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastLevel")) == 1;
}}
if (gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("lastLevel").setNumber(2);
}}

}


{


{
}

}


};gdjs.evtsExt__WorldManager__UnlockNextLevel.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = false;
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastWorld")) == 1;
}if ( gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("lastLevel")) == 2;
}}
if (gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("lastLevel").setNumber(3);
}}

}


{


{
}

}


};gdjs.evtsExt__WorldManager__UnlockNextLevel.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("level")) == 1;
}if (gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val) {
}

}


{


gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("level")) == 2;
}if (gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__WorldManager__UnlockNextLevel.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("level")) == 3;
}if (gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__WorldManager__UnlockNextLevel.eventsList9(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__WorldManager__UnlockNextLevel.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = false;
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("world")) == 3;
}if ( gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__WorldManager__UnlockNextLevel.conditionTrue_1 = gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0;
gdjs.evtsExt__WorldManager__UnlockNextLevel.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(7606044);
}
}}
if (gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__WorldManager__UnlockNextLevel.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = false;
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("world")) == 2;
}if ( gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__WorldManager__UnlockNextLevel.conditionTrue_1 = gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0;
gdjs.evtsExt__WorldManager__UnlockNextLevel.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(7606852);
}
}}
if (gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__WorldManager__UnlockNextLevel.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = false;
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("world")) == 1;
}if ( gdjs.evtsExt__WorldManager__UnlockNextLevel.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__WorldManager__UnlockNextLevel.conditionTrue_1 = gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0;
gdjs.evtsExt__WorldManager__UnlockNextLevel.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(7612476);
}
}}
if (gdjs.evtsExt__WorldManager__UnlockNextLevel.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__WorldManager__UnlockNextLevel.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__WorldManager__UnlockNextLevel.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WorldManager__UnlockNextLevel.eventsList11(runtimeScene, eventsFunctionContext);
}


{


{
}

}


};

gdjs.evtsExt__WorldManager__UnlockNextLevel.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__WorldManager__UnlockNextLevel.eventsList12(runtimeScene, eventsFunctionContext);
return;
}

