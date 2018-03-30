'use strict';

console.log('App.js is running.');

// JSX - JavaScript XML 

var app = {
    main: 'Indecision App',
    sub: 'Put your life in the hands of a computer.',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';

        renderFormSubmitApp();
    }
};

var removeAll = function removeAll() {
    app.options = [];

    renderFormSubmitApp();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

var renderFormSubmitApp = function renderFormSubmitApp() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.main
        ),
        app.sub && React.createElement(
            'p',
            null,
            app.sub
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? "You options are" : "No options"
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'Make decision'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    'Item: ',
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    var appRoot = document.getElementById('app');

    ReactDOM.render(template, appRoot);
};

renderFormSubmitApp();
