import { ActionIcon, Box, IconPlus, Pill, Text, TextInput } from '../../ui/mantine'
import { useState } from 'react'
import type { FormEvent } from 'react'
import './SkillsFilter.css'

type SkillsFilterProps = {
  skills: string[]
  onSkillsChange: (skills: string[]) => void
}

export function SkillsFilter({ skills, onSkillsChange }: SkillsFilterProps) {

  const [newSkill, setNewSkill] = useState('')

  function addSkill() {
    const skill = newSkill.trim()

    if (!skill || skills.includes(skill)) {
      return
    }

    onSkillsChange([...skills, skill])
    setNewSkill('')
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    addSkill()
  }

  function removeSkill(skillToRemove: string) {
    onSkillsChange(skills.filter((skill) => skill !== skillToRemove))
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