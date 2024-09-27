import { useState } from "react";
import AnswersList from "./AnswersList";

function Survey() {

  
  const starting = {
    timeSpend: [],
    color: 0,
    consistency: 0,
    logo: 0,
    username: "",
    review: "",
    email: "",
  };


  const [open, setOpen] = useState(false); //Ignore this state
  const [answersList, setAnswersList] = useState([]);
  const [surveryData, setSurveryData] = useState(starting);

  const RenderAnswers = () => {
    if(answersList.length > 0 ) {
      return <AnswersList answersList={answersList} />
    }
  }
  
  const submission = (e) => {
    answersList.push(surveryData)
    setAnswersList(answersList)
    setSurveryData(starting)
    e.preventDefault()
  }
  
  const onChange = (e) => {
    let arr = surveryData.timeSpend
    if(e.target.name === 'timeSpend') {
      if(e.target.checked) {
        arr.push(e.target.value)
      } else {
        arr.splice(arr.indexOf(e.target.value), 1)
      }
      console.log(arr)
      setSurveryData({...surveryData, [e.target.name]: arr})
    } else {
      setSurveryData({...surveryData, [e.target.name]: e.target.value})
    }
  }
  
  
  
  
  
  
  return (
    <main className="survey">
      <section className={`survey_list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <RenderAnswers />
      </section>
      <section className="survey_form">{
        <form onSubmission={submission} className='form'>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className = 'form__group'>
            <h3>Why do you like your rubber duck so much?</h3>
            <ul>
              <li>
                <label>
                  <input
                    id = '1'
                    type = 'checkbox'
                    value = 'blue'
                    name = 'timeSpend'
                    checked = {surveryData.timeSpend.includes('blue')}
                    onChange={(e) => onChange(e)}
                  />
                  It is Blue!
                </label>
              </li>
              <li>
                <label>
                  <input
                    id = '2'
                    type = 'checkbox'
                    value = 'quacks'
                    name = 'timeSpend'
                    checked = {surveryData.timeSpend.includes('quacks')}
                    onChange={(e) => onChange(e)}
                  />
                  It quacks!
                </label>
              </li>
              <li>
                <label>
                  <input
                    id = '3'
                    type = 'checkbox'
                    value = 'logo'
                    name = 'timeSpend'
                    checked = {surveryData.timeSpend.includes('logo')}
                    onChange={(e) => onChange(e)}
                  />
                  It has a logo!
                </label>
              </li>
              <li>
                <label>
                  <input
                    id = '4'
                    type = 'checkbox'
                    value = 'huge'
                    name = 'timeSpend'
                    checked = {surveryData.timeSpend.includes('huge')}
                    onChange={(e) => onChange(e)}
                  />
                  It is huge!
                </label>
              </li>
            </ul>
          </div>
          <div className = 'survey_list radio'>
            <h3>How do you rate your rubber duck color?</h3>
            <ul>
              <li>
                <input
                  id = 'color-one'
                  type = 'radio'
                  value = '1'
                  name = 'color'
                  checked = {surveryData.color === '1'}
                  onChange={(e) => onChange(e)}
                />
                <label htmlFor = 'color-one'>1</label>
              </li>
              <li>
                <input
                  id = 'color-two'
                  type = 'radio'
                  value = '2'
                  name = 'color'
                  checked = {surveryData.color === '2'}
                  onChange={(e) => onChange(e)}
                />
                <label htmlFor='color-two'>2</label>
              </li>
              <li>
                <input
                  id = 'color-three'
                  type = 'radio'
                  value = '3'
                  name = 'color'
                  checked = {surveryData.color === '3'}
                  onChange={(e) => onChange(e)}
                />
                <label htmlFor='color-three'>3</label>
              </li>
              <li>
                <input
                  id = 'color-four'
                  type = 'radio'
                  value = '4'
                  name = 'color'
                  checked = {surveryData.color === '4'}
                  onChange={(e) => onChange(e)}
                />
                <label htmlFor='color-four'>4</label>
              </li>
            </ul>
          </div>
          <div className = 'survey_list radio'>
            <h3>How do you rate your rubber duck consistency?</h3>
            <ul>
              <li>
                <input
                  id = 'consistency-one'
                  type = 'radio'
                  value = '1'
                  name = 'consistency'
                  checked = {surveryData.consistency === '1'}
                  onChange={(e) => onChange(e)}
                />
                <label htmlFor="consistency-one">1</label>
              </li>
              <li>
              <input
                  id = 'consistency-two'
                  type = 'radio'
                  value = '2'
                  name = 'consistency'
                  checked = {surveryData.consistency === '2'}
                  onChange={(e) => onChange(e)}
                />
                <label htmlFor="consistency-two">2</label>
              </li>
              <li>
                <input
                  id = 'consistency-three'
                  type = 'radio'
                  value = '3'
                  name = 'consistency'
                  checked = {surveryData.consistency === '3'}
                  onChange={(e) => onChange(e)}
                />
                <label htmlFor="consistency-three">3</label>
              </li>
              <li>
                <input
                  id = 'consistency-four'
                  type = 'radio'
                  value = '4'
                  name = 'consistency'
                  checked = {surveryData.consistency === '4'}
                  onChange={(e) => onChange(e)}
                />
                <label htmlFor="consistency-four">4</label>
              </li>
            </ul>
          </div>
          <div className = 'survey_list radio'>
            <h3>How do you rate your rubber duck logo?</h3>
            <ul>
              <li>
                <input
                  id = 'logo-one'
                  type = 'radio'
                  value = '1'
                  name = 'logo'
                  checked = {surveryData.logo === '1'}
                  onChange={(e) => onChange(e)}
                />
                <label htmlFor="logo-one">1</label>
              </li>
              <li>
                <input
                  id = 'logo-two'
                  type = 'radio'
                  value = '2'
                  name = 'logo'
                  checked = {surveryData.logo === '2'}
                  onChange={(e) => onChange(e)}
                />
                <label htmlFor="logo-two">2</label>
              </li>
              <li>
                <input
                  id = 'logo-three'
                  type = 'radio'
                  value = '3'
                  name = 'logo'
                  checked = {surveryData.logo === '3'}
                  onChange={(e) => onChange(e)}
                />
                <label htmlFor="logo-three">3</label>
              </li>
              <li>
                <input
                  id = 'logo-four'
                  type = 'radio'
                  value = '4'
                  name = 'logo'
                  checked = {surveryData.logo === '4'}
                  onChange={(e) => onChange(e)}
                />
                <label htmlFor="logo-four">4</label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name = 'review'
              cols = '25'
              rows = '12'
              value = {surveryData.review}
              onChange = {(e) => onChange(e)}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              name = 'username'
              type = 'text'
              value = {surveryData.username}
              onChange = {(e) => onChange(e)}
            ></input>
          </label>
          <label>
            Put your name email here pretty please??
            <input
              name = 'email'
              type = 'text'
              value = {surveryData.email}
              onChange = {(e) => onChange(e)}
            ></input>
          </label>
          <button onClick={submission}>Submit</button>
        </form>
      }
      </section>
    </main>
  );
}

function Input(id, label, type, value, name, onChange) {
  return (
    <label>
      <input 
        id = {id}
        type = {type}
        value = {value}
        name = {name}
        onChange = {onChange}
      /> 
      {label}
    </label>  
  )
}

export default Survey;
 