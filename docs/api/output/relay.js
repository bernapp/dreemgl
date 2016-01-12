Ext.data.JsonP.relay({"tagname":"class","name":"relay","autodetected":{},"files":[{"filename":"relay.js","href":"relay.html#relay"}],"extends":"service","members":[{"name":"beacon_data","tagname":"attribute","owner":"relay","id":"attribute-beacon_data","meta":{}},{"name":"beacons","tagname":"attribute","owner":"relay","id":"attribute-beacons","meta":{}},{"name":"changes","tagname":"attribute","owner":"relay","id":"attribute-changes","meta":{}},{"name":"device_data","tagname":"attribute","owner":"relay","id":"attribute-device_data","meta":{}},{"name":"_atConstructor","tagname":"method","owner":"node","id":"method-_atConstructor","meta":{}},{"name":"addListener","tagname":"method","owner":"node","id":"method-addListener","meta":{}},{"name":"animateAttribute","tagname":"method","owner":"node","id":"method-animateAttribute","meta":{}},{"name":"atStyleConstructor","tagname":"method","owner":"node","id":"method-atStyleConstructor","meta":{}},{"name":"checkMovement","tagname":"method","owner":"relay","id":"method-checkMovement","meta":{}},{"name":"connectWiredAttribute","tagname":"method","owner":"node","id":"method-connectWiredAttribute","meta":{}},{"name":"connectWires","tagname":"method","owner":"node","id":"method-connectWires","meta":{}},{"name":"createRpcProxy","tagname":"method","owner":"node","id":"method-createRpcProxy","meta":{}},{"name":"defineAttribute","tagname":"method","owner":"node","id":"method-defineAttribute","meta":{}},{"name":"definePersist","tagname":"method","owner":"node","id":"method-definePersist","meta":{}},{"name":"disconnectWires","tagname":"method","owner":"node","id":"method-disconnectWires","meta":{}},{"name":"emit","tagname":"method","owner":"node","id":"method-emit","meta":{}},{"name":"emitForward","tagname":"method","owner":"node","id":"method-emitForward","meta":{}},{"name":"emitRecursive","tagname":"method","owner":"node","id":"method-emitRecursive","meta":{}},{"name":"expire_beacon_data","tagname":"method","owner":"relay","id":"method-expire_beacon_data","meta":{}},{"name":"find","tagname":"method","owner":"node","id":"method-find","meta":{}},{"name":"findChanges","tagname":"method","owner":"relay","id":"method-findChanges","meta":{}},{"name":"findChild","tagname":"method","owner":"node","id":"method-findChild","meta":{}},{"name":"getAttributeConfig","tagname":"method","owner":"node","id":"method-getAttributeConfig","meta":{}},{"name":"hasListenerProp","tagname":"method","owner":"node","id":"method-hasListenerProp","meta":{}},{"name":"hasListeners","tagname":"method","owner":"node","id":"method-hasListeners","meta":{}},{"name":"hasWires","tagname":"method","owner":"node","id":"method-hasWires","meta":{}},{"name":"hideProperty","tagname":"method","owner":"node","id":"method-hideProperty","meta":{}},{"name":"init","tagname":"method","owner":"relay","id":"method-init","meta":{}},{"name":"initFromConstructorArgs","tagname":"method","owner":"node","id":"method-initFromConstructorArgs","meta":{}},{"name":"intersection","tagname":"method","owner":"relay","id":"method-intersection","meta":{}},{"name":"isAttribute","tagname":"method","owner":"node","id":"method-isAttribute","meta":{}},{"name":"mixin","tagname":"method","owner":"node","id":"method-mixin","meta":{}},{"name":"postBeacons","tagname":"method","owner":"relay","id":"method-postBeacons","meta":{}},{"name":"removeAllListeners","tagname":"method","owner":"node","id":"method-removeAllListeners","meta":{}},{"name":"removeListener","tagname":"method","owner":"node","id":"method-removeListener","meta":{}},{"name":"setWiredAttribute","tagname":"method","owner":"node","id":"method-setWiredAttribute","meta":{}},{"name":"startMotion","tagname":"method","owner":"node","id":"method-startMotion","meta":{}},{"name":"wiredCall","tagname":"method","owner":"node","id":"method-wiredCall","meta":{}},{"name":"destroy","tagname":"event","owner":"node","id":"event-destroy","meta":{}},{"name":"init","tagname":"event","owner":"node","id":"event-init","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-relay","component":false,"superclasses":["node","service"],"subclasses":["estimote"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/node' rel='node' class='docClass'>node</a><div class='subclass '><a href='#!/api/service' rel='service' class='docClass'>service</a><div class='subclass '><strong>relay</strong></div></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/estimote' rel='estimote' class='docClass'>estimote</a></div><h4>Files</h4><div class='dependency'><a href='source/relay.html#relay' target='_blank'>relay.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-attribute'>Attributes</h3><div class='subsection'><div id='attribute-beacon_data' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='relay'>relay</span><br/><a href='source/relay.html#relay-attribute-beacon_data' target='_blank' class='view-source'>view source</a></div><a href='#!/api/relay-attribute-beacon_data' class='name expandable'>beacon_data</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Keep track of usage by beacon id. ...</div><div class='long'><p>Keep track of usage by beacon id. The key is the beacon id and the value\nis a hash of device_uuid to the beacon data. Old data is removed\nfrom the structure.</p>\n<p>Defaults to: <code>&quot;[object Object]&quot;</code></p></div></div></div><div id='attribute-beacons' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='relay'>relay</span><br/><a href='source/relay.html#relay-attribute-beacons' target='_blank' class='view-source'>view source</a></div><a href='#!/api/relay-attribute-beacons' class='name expandable'>beacons</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Current list of beacons visible with the repeater\nClients will see the all the visible beacons regardless of when the...</div><div class='long'><p>Current list of beacons visible with the repeater\nClients will see the all the visible beacons regardless of when they joined.</p>\n<p>Defaults to: <code>&quot;[object Object]&quot;</code></p></div></div></div><div id='attribute-changes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='relay'>relay</span><br/><a href='source/relay.html#relay-attribute-changes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/relay-attribute-changes' class='name expandable'>changes</a> : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Most recent list of changes to the beacon attribute sent from the server\nClients will only see the latest changes add...</div><div class='long'><p>Most recent list of changes to the beacon attribute sent from the server\nClients will only see the latest changes added since they join.</p>\n<p>Defaults to: <code>&quot;&quot;</code></p></div></div></div><div id='attribute-device_data' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='relay'>relay</span><br/><a href='source/relay.html#relay-attribute-device_data' target='_blank' class='view-source'>view source</a></div><a href='#!/api/relay-attribute-device_data' class='name expandable'>device_data</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Keep track of usage by device. ...</div><div class='long'><p>Keep track of usage by device. The key is the device uuid and the\nvalue is a hash of beacon_uuid to the beacon data. Old data is removed\nfrom the structure.</p>\n<p>Defaults to: <code>&quot;[object Object]&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_atConstructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-_atConstructor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-_atConstructor' class='name expandable'>_atConstructor</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>internal, called by the constructor ...</div><div class='long'><p>internal, called by the constructor</p>\n</div></div></div><div id='method-addListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-addListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-addListener' class='name expandable'>addListener</a>( <span class='pre'>key, cb</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>add a listener to an attribute ...</div><div class='long'><p>add a listener to an attribute</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>cb</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-animateAttribute' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-animateAttribute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-animateAttribute' class='name expandable'>animateAttribute</a>( <span class='pre'>arg</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>internal, animate an attribute with an animation object see animate ...</div><div class='long'><p>internal, animate an attribute with an animation object see animate</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>arg</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-atStyleConstructor' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-atStyleConstructor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-atStyleConstructor' class='name expandable'>atStyleConstructor</a>( <span class='pre'>original, props, where</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>original</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>props</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>where</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-checkMovement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='relay'>relay</span><br/><a href='source/relay.html#relay-method-checkMovement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/relay-method-checkMovement' class='name expandable'>checkMovement</a>( <span class='pre'>distances</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>distances</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-connectWiredAttribute' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-connectWiredAttribute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-connectWiredAttribute' class='name expandable'>connectWiredAttribute</a>( <span class='pre'>key, initarray</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>internal, connect a wired attribute up to its listeners ...</div><div class='long'><p>internal, connect a wired attribute up to its listeners</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>initarray</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-connectWires' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-connectWires' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-connectWires' class='name expandable'>connectWires</a>( <span class='pre'>initarray, depth</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>internal, connect all wires using the initarray returned by connectWiredAttribute ...</div><div class='long'><p>internal, connect all wires using the initarray returned by connectWiredAttribute</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>initarray</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>depth</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createRpcProxy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-createRpcProxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-createRpcProxy' class='name expandable'>createRpcProxy</a>( <span class='pre'>parent</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>internal, create an rpc proxy ...</div><div class='long'><p>internal, create an rpc proxy</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parent</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-defineAttribute' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-defineAttribute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-defineAttribute' class='name expandable'>defineAttribute</a>( <span class='pre'>key, config, always_define</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>internal, define an attribute, use the attributes =  api ...</div><div class='long'><p>internal, define an attribute, use the attributes =  api</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>always_define</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-definePersist' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-definePersist' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-definePersist' class='name expandable'>definePersist</a>( <span class='pre'>arg</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>mark an attribute as persistent accross live reload / renders ...</div><div class='long'><p>mark an attribute as persistent accross live reload / renders</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>arg</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-disconnectWires' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-disconnectWires' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-disconnectWires' class='name expandable'>disconnectWires</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>internal, does nothing sofar ...</div><div class='long'><p>internal, does nothing sofar</p>\n</div></div></div><div id='method-emit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-emit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-emit' class='name expandable'>emit</a>( <span class='pre'>key, event</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>emit an event for an attribute key. ...</div><div class='long'><p>emit an event for an attribute key. the order</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>event</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-emitForward' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-emitForward' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-emitForward' class='name expandable'>emitForward</a>( <span class='pre'>key</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>return a function that can be assigned as a listener to any value, and then re-emit on this as attribute key ...</div><div class='long'><p>return a function that can be assigned as a listener to any value, and then re-emit on this as attribute key</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-emitRecursive' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-emitRecursive' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-emitRecursive' class='name expandable'>emitRecursive</a>( <span class='pre'>key, event, block</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>emits an event recursively on all children ...</div><div class='long'><p>emits an event recursively on all children</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>event</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>block</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-expire_beacon_data' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='relay'>relay</span><br/><a href='source/relay.html#relay-method-expire_beacon_data' target='_blank' class='view-source'>view source</a></div><a href='#!/api/relay-method-expire_beacon_data' class='name expandable'>expire_beacon_data</a>( <span class='pre'>age</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>age</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-find' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-find' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-find' class='name expandable'>find</a>( <span class='pre'>name, ignore</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>find node by name, they look up the .name property or the name of the constructor (class name) by default ...</div><div class='long'><p>find node by name, they look up the .name property or the name of the constructor (class name) by default</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>ignore</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-findChanges' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='relay'>relay</span><br/><a href='source/relay.html#relay-method-findChanges' target='_blank' class='view-source'>view source</a></div><a href='#!/api/relay-method-findChanges' class='name expandable'>findChanges</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-findChild' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-findChild' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-findChild' class='name expandable'>findChild</a>( <span class='pre'>name, ignore, nocache</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>internal, used by find ...</div><div class='long'><p>internal, used by find</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>ignore</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>nocache</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAttributeConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-getAttributeConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-getAttributeConfig' class='name expandable'>getAttributeConfig</a>( <span class='pre'>key</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>returns the attribute config object (the one passed into this.attributes={attr:{config}} ...</div><div class='long'><p>returns the attribute config object (the one passed into this.attributes={attr:{config}}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hasListenerProp' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-hasListenerProp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-hasListenerProp' class='name expandable'>hasListenerProp</a>( <span class='pre'>key, prop, value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>check if an attribute has a listener with a .name property set to fnname ...</div><div class='long'><p>check if an attribute has a listener with a .name property set to fnname</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>prop</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hasListeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-hasListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-hasListeners' class='name expandable'>hasListeners</a>( <span class='pre'>key</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>returns true if attribute has any listeners ...</div><div class='long'><p>returns true if attribute has any listeners</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hasWires' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-hasWires' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-hasWires' class='name expandable'>hasWires</a>( <span class='pre'>key</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>check if an attribute has wires connected ...</div><div class='long'><p>check if an attribute has wires connected</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hideProperty' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-hideProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-hideProperty' class='name expandable'>hideProperty</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>hide a property, pass in any set of strings ...</div><div class='long'><p>hide a property, pass in any set of strings</p>\n</div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='relay'>relay</span><br/><a href='source/relay.html#relay-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/relay-method-init' class='name expandable'>init</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-initFromConstructorArgs' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-initFromConstructorArgs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-initFromConstructorArgs' class='name expandable'>initFromConstructorArgs</a>( <span class='pre'>args</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>internal, called by the constructor ...</div><div class='long'><p>internal, called by the constructor</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-intersection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='relay'>relay</span><br/><a href='source/relay.html#relay-method-intersection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/relay-method-intersection' class='name expandable'>intersection</a>( <span class='pre'>a, b</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Find intersection of current and previous beacons. ...</div><div class='long'><p>Find intersection of current and previous beacons.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>a</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>b</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isAttribute' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-isAttribute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-isAttribute' class='name expandable'>isAttribute</a>( <span class='pre'>key</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>check if property is an attribute ...</div><div class='long'><p>check if property is an attribute</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-mixin' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-mixin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-mixin' class='name expandable'>mixin</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-postBeacons' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='relay'>relay</span><br/><a href='source/relay.html#relay-method-postBeacons' target='_blank' class='view-source'>view source</a></div><a href='#!/api/relay-method-postBeacons' class='name expandable'>postBeacons</a>( <span class='pre'>json</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Keep track of location by device and beacon. ...</div><div class='long'><p>Keep track of location by device and beacon.\nThe beacon_id is the concatenation of the uuid and major and minor number.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>json</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeAllListeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-removeAllListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-removeAllListeners' class='name expandable'>removeAllListeners</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>remove all listeners from a node ...</div><div class='long'><p>remove all listeners from a node</p>\n</div></div></div><div id='method-removeListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-removeListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-removeListener' class='name expandable'>removeListener</a>( <span class='pre'>key, cb</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>remove a listener from an attribute, uses the actual function reference to find it\nif you dont pass in a function ref...</div><div class='long'><p>remove a listener from an attribute, uses the actual function reference to find it\nif you dont pass in a function reference it removes all listeners</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>cb</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setWiredAttribute' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-setWiredAttribute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-setWiredAttribute' class='name expandable'>setWiredAttribute</a>( <span class='pre'>key, value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>set the wired function for an attribute ...</div><div class='long'><p>set the wired function for an attribute</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-startMotion' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-startMotion' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-startMotion' class='name expandable'>startMotion</a>( <span class='pre'>key, value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>internal, used by the attribute setter to start a 'motion' which is an auto-animated attribute ...</div><div class='long'><p>internal, used by the attribute setter to start a 'motion' which is an auto-animated attribute</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-wiredCall' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-wiredCall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-wiredCall' class='name expandable'>wiredCall</a>( <span class='pre'>key</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>internal, returns the wired-call for an attribute ...</div><div class='long'><p>internal, returns the wired-call for an attribute</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-destroy' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-event-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-event-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>always define an init and deinit ...</div><div class='long'><p>always define an init and deinit</p>\n</div></div></div><div id='event-init' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-event-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-event-init' class='name expandable'>init</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>always define an init and deinit ...</div><div class='long'><p>always define an init and deinit</p>\n</div></div></div></div></div></div></div>","meta":{}});