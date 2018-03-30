console.log('App.js is running.')

// JSX - JavaScript XML 

const app = {
main: 'Indecision App',
sub: 'Put your life in the hands of a computer.',
options: []
}; 

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';

    renderFormSubmitApp();   
  }
};

const removeAll = () => {
    app.options = []; 

    renderFormSubmitApp();   
}; 


const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length); 
    const option = app.options[randomNum]; 
    alert(option);
}; 

const renderFormSubmitApp = () => {
    
    const template = (
        <div>
            <h1>{app.main}</h1>
            {app.sub && <p>{app.sub}</p>}
            <p>{app.options.length > 0 ? "You options are" : "No options"}</p>

            <button disabled={app.options.length === 0} onClick={onMakeDecision}>Make decision</button>

            <button onClick={removeAll}>Remove All</button>

            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>Item: {option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" /> 
                <button>Add Option</button>
            </form>
        </div>
    ); 

    const appRoot = document.getElementById('app'); 
    
    ReactDOM.render(template, appRoot); 

}; 

renderFormSubmitApp(); 