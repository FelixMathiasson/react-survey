import { useState , useEffect} from "react"
import AnswersList from "./AnswersList"
import axios from "axios"

const API_URL = "http://localhost:3001/answersList"

function Survey() {

  
  const starting = {
    timeSpent: [],
    color: 0,
    consistency: 0,
    logo: 0,
    username: "",
    review: "",
    email: "",
  }


  const [open, setOpen] = useState(false) //Ignore this state
  const [answersList, setAnswersList] = useState([])
  const [surveyData, setSurveyData] = useState(starting)
  const [isEditing, setIsEditing] = useState(false)
  const [editIndex, setEditIndex] = useState(null)

  useEffect(() => {
    FindAnswers()
  }, [])


  const FindAnswers = async () => {
    try {
      const res = await axios.get(API_URL)
      setAnswersList(res.data)
    } catch (err) {
      console.error("ERROR! Could not find answers from server", err)
    }
  }

  const newId = () => {
    let id = 0
    let found = false
    while(!found) {
      found = true
      for(let i = 0; i < answersList.length; i++) {
        if (answersList[i].id === `${id}`) {
          found = false
          id++
          break
        }
      }
    }
    return `${id}`
  }


  const submission = async (e) => {
    e.preventDefault()
    if(isEditing) {
      try {
        const id = answersList[editIndex].id
        await axios.put(`${API_URL}/${id}`, surveyData)
        setAnswersList(answersList.map((answer, index) =>
          index === editIndex ? surveyData : answer))
        setIsEditing(false)
        setEditIndex(null)
      } catch (err) {
    console.error("ERROR! Could not update answer:", err)
    } 
  } else {
      try {
        surveyData.id = newId()
        const res = await axios.post(API_URL, surveyData)
        setAnswersList([...answersList, res.data]) 
      } catch (err) {
        console.error("ERROR! Could not save answer:", err)
      }
    }
  setSurveyData(starting) 
}
  
  const onChange = (e) => {
    let arr = surveyData.timeSpent
    if(e.target.name === 'timeSpent') {
      if(e.target.checked) {
        arr.push(e.target.value)
      } else {
        arr.splice(arr.indexOf(e.target.value), 1)
      }
      setSurveyData({...surveyData, [e.target.name]: arr})
    } else {
      setSurveyData({...surveyData, [e.target.name]: e.target.value})
    }
  }

  const onDelete = async (index) => {
    const answerId = answersList[index].id
    try {
      await axios.delete(`${API_URL}/${answerId}`)
      const updatedAnswers = answersList.filter((_, i) => i !== index)
      setAnswersList(updatedAnswers)
    } catch (err) {
      console.error("ERROR! could not delete answer:", err)
    }
  }
  
  const onEdit = (index) => {
    setSurveyData(answersList[index])
    setIsEditing(true)
    setEditIndex(index)
  }
  
  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList} onEdit={onEdit} onDelete={onDelete} />
      </section>
      <section className="survey__form">{
        // eslint-disable-next-line react/no-unknown-property
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
                    name = 'timeSpent'
                    checked = {surveyData.timeSpent.includes('blue')}
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
                    name = 'timeSpent'
                    checked = {surveyData.timeSpent.includes('quacks')}
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
                    name = 'timeSpent'
                    checked = {surveyData.timeSpent.includes('logo')}
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
                    name = 'timeSpent'
                    checked = {surveyData.timeSpent.includes('huge')}
                    onChange={(e) => onChange(e)}
                  />
                  It is huge!
                </label>
              </li>
            </ul>
          </div>
          <div className = 'form__group radio'>
            <h3>How do you rate your rubber duck color?</h3>
            <ul>
              <li>
                <input
                  id = 'color-one'
                  type = 'radio'
                  value = '1'
                  name = 'color'
                  checked = {surveyData.color === '1'}
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
                  checked = {surveyData.color === '2'}
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
                  checked = {surveyData.color === '3'}
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
                  checked = {surveyData.color === '4'}
                  onChange={(e) => onChange(e)}
                />
                <label htmlFor='color-four'>4</label>
              </li>
            </ul>
          </div>
          <div className = 'form__group radio'>
            <h3>How do you rate your rubber duck consistency?</h3>
            <ul>
              <li>
                <input
                  id = 'consistency-one'
                  type = 'radio'
                  value = '1'
                  name = 'consistency'
                  checked = {surveyData.consistency === '1'}
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
                  checked = {surveyData.consistency === '2'}
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
                  checked = {surveyData.consistency === '3'}
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
                  checked = {surveyData.consistency === '4'}
                  onChange={(e) => onChange(e)}
                />
                <label htmlFor="consistency-four">4</label>
              </li>
            </ul>
          </div>
          <div className = 'form__group radio'>
            <h3>How do you rate your rubber duck logo?</h3>
            <ul>
              <li>
                <input
                  id = 'logo-one'
                  type = 'radio'
                  value = '1'
                  name = 'logo'
                  checked = {surveyData.logo === '1'}
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
                  checked = {surveyData.logo === '2'}
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
                  checked = {surveyData.logo === '3'}
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
                  checked = {surveyData.logo === '4'}
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
              value = {surveyData.review}
              onChange = {(e) => onChange(e)}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              name = 'username'
              type = 'text'
              value = {surveyData.username}
              onChange = {(e) => onChange(e)}
            ></input>
          </label>
          <label>
            Put your name email here pretty please??
            <input
              name = 'email'
              type = 'text'
              value = {surveyData.email}
              onChange = {(e) => onChange(e)}
            ></input>
          </label>
          <button onClick={submission}>Submit</button>
        </form>
      }
      </section>
    </main>
  )
}


export default Survey
 