import m from "mithril";

/**
 * A Mithril Component without jsx
 */
let Example = {
    view: function (vnode) {
        return m("div", "Hello, " + vnode.attrs.name)
    }
};
/**
 * A Mithril Component with jsx
 */
let JSXComponent = {
    oninit: function(vnode) {
        console.log("initialized")
    },
    oncreate: function(vnode) {
        console.log("DOM created")
    },
    onbeforeupdate: function(vnode, old) {
        return true;
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
};

const root = document.querySelector("#app");

m.route.prefix("");

m.route(root, "/", {
    "/" : {
        view(){
            return (
                <div>
                    {m("a[href=/hi/Ian]", {oncreate: m.route.link}, "Hello Ian")}
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