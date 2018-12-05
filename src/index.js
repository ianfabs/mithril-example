var m = require("mithril");

let JSXComponent = {
    oninit: function(vnode) {
        console.log("initialized")
    },
    oncreate: function(vnode) {
        console.log("DOM created")
    },
    onbeforeupdate: function(vnode, old) {
        return true
    },
    onupdate: function(vnode) {
        console.log("DOM updated")
    },
    onbeforeremove: function(vnode) {
        console.log("exit animation can start")
        return new Promise(function(resolve) {
            // call after animation completes
            resolve()
        })
    },
    onremove: function(vnode) {
        console.log("removing DOM element")
    },
    view: function(vnode) {
        return (
            <div>
                Hello {vnode.attrs.name}, I love you.
            </div>
        );
    }
}

let Example = {
    view: function (vnode) {
        return m("div", "Hello, " + vnode.attrs.name)
    }
}
m.route.prefix("")
m.route(document.querySelector("#app"), "/", {
    "/" : {
        view(){
            return (
                <div>
                    {m("a[href=/hi/Carl]", {oncreate: m.route.link}, "Hello Carl")}
                </div>
            )
        }
    },
    "/hi/:name": {
        view(){
            return (
                <div>
                    <JSXComponent name={m.route.param("name")}/>
                </div>
            );
        }
    },
    "/user": {
        view(){
            return m.route()
        }
    }
});