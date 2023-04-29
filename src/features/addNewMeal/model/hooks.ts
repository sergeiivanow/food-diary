import {useState} from 'react'

export function useMealForm() {
  const [ate, setAte] = useState('')
  const [drank, setDrank] = useState('')
  const [contect, setContect] = useState('')
  const [evaluation, setEvaluation] = useState('')
  const [volume, setVolume] = useState('1 кул.')
  const saveActive = ate && drank && contect && evaluation

  return {
    ate,
    drank,
    contect,
    evaluation,
    volume,
    setAte,
    setDrank,
    setContect,
    setEvaluation,
    setVolume,
    saveActive,
  }
}
