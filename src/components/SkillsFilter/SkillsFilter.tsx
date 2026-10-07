import { ActionIcon, Box, Pill, Text, TextInput } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSkills } from '../../store/jobsSlice'
import type { AppDispatch, RootState } from '../../store/store'
import './SkillsFilter.css'

function SkillsFilter() {
  const dispatch = useDispatch<AppDispatch>()

  const skills = useSelector(
    (state: RootState) => state.jobs.filters.skills,
  )

  const [newSkill, setNewSkill] = useState('')

  function addSkill() {
    const skill = newSkill.trim()

    if (!skill || skills.includes(skill)) {
      return
    }

    dispatch(setSkills([...skills, skill]))
    setNewSkill('')
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    addSkill()
  }

  function removeSkill(skillToRemove: string) {
    dispatch(
      setSkills(
        skills.filter((skill) => skill !== skillToRemove),
      ),
    )
  }

  return (
    <Box className="skills-filter">
      <Text className="skills-filter__title">
        Ключевые навыки
      </Text>

      <form
        className="skills-filter__form"
        onSubmit={handleSubmit}
      >
        <TextInput
          value={newSkill}
          onChange={(event) => setNewSkill(event.currentTarget.value)}
          placeholder="Навык"
          className="skills-filter__input"
        />

        <ActionIcon
          type="submit"
          className="skills-filter__add-button"
          aria-label="Добавить навык"
        >
          <IconPlus size={28} stroke={2} />
        </ActionIcon>
      </form>

      <Pill.Group className="skills-filter__pills">
        {skills.map((skill) => (
          <Pill
            key={skill}
            className="skills-filter__pill"
            withRemoveButton
            onRemove={() => removeSkill(skill)}
          >
            {skill}
          </Pill>
        ))}
      </Pill.Group>
    </Box>
  )
}

export default SkillsFilter