"use strict";
var Components;
(function (Components) {
    var SubComponents;
    (function (SubComponents) {
        var test = /** @class */ (function () {
            function test() {
                var elem = document.createElement('div');
                elem.innerText = 'This is test';
                document.body.appendChild(elem);
            }
            return test;
        }());
        SubComponents.test = test;
    })(SubComponents = Components.SubComponents || (Components.SubComponents = {}));
    var Header = /** @class */ (function () {
        function Header() {
            var elem = document.createElement('div');
            elem.innerText = 'This is Header';
            document.body.appendChild(elem);
            new SubComponents.test();
        }
        return Header;
    }());
    Components.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var elem = document.createElement('div');
            elem.innerText = 'This is Content';
            document.body.appendChild(elem);
        }
        return Content;
    }());
    Components.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement('div');
            elem.innerText = 'This is Footer';
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    Components.Footer = Footer;
})(Components || (Components = {}));
// 命名空间namespace
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        function Page() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
