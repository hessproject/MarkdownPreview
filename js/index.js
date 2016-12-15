"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

marked.setOptions({
	breaks: true,
	sanitize: true
});

var Header = function Header() {
	return React.createElement(
		"div",
		{ className: "header", "text-align": "center" },
		React.createElement(
			"h1",
			null,
			"Markdown Preview"
		),
		React.createElement(
			"h4",
			null,
			"Markdown syntax cheatsheet can be found ",
			React.createElement(
				"a",
				{ href: "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet", target: "_blank" },
				"here"
			)
		)
	);
};

var MarkdownPreview = function MarkdownPreview(_ref) {
	var markdown = _ref.markdown;

	return React.createElement(
		"div",
		{ className: "col-md-6 well markdown" },
		React.createElement("div", { dangerouslySetInnerHTML: markdown })
	); //dangerouslySetInnerHTML can open your site to XSS, thus the wording + extra required __html step
};

var TextEntry = function (_React$Component) {
	_inherits(TextEntry, _React$Component);

	function TextEntry() {
		_classCallCheck(this, TextEntry);

		return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	}

	TextEntry.prototype.render = function render() {
		return React.createElement(
			"div",
			{ className: "col-md-6 well textEntry" },
			React.createElement("textarea", { rows: "6", onChange: this.props.onTextChange })
		);
	};

	return TextEntry;
}(React.Component);

var App = function (_React$Component2) {
	_inherits(App, _React$Component2);

	function App(props) {
		_classCallCheck(this, App);

		var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this, props));

		_this2.state = {
			text: ''
		};

		_this2.onTextChange = _this2.onTextChange.bind(_this2);
		return _this2;
	}

	App.prototype.onTextChange = function onTextChange(e) {
		var text = e.target.value;
		this.setState({
			text: text
		});
	};

	App.prototype.render = function render() {
		var text = this.state.text;
		var markdown = {
			__html: marked(text)
		};
		return React.createElement(
			"div",
			{ id: "innerContainer" },
			React.createElement(Header, null),
			React.createElement(TextEntry, { onTextChange: this.onTextChange }),
			React.createElement(MarkdownPreview, { markdown: markdown })
		);
	};

	return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
