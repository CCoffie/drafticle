import * as React from 'react'
import useAppContext from '../../../../../hooks/useAppContext'
import { useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { Input, SIZE } from 'baseui/input'
import Icons from '../../../../../components/icons'
import { useEditor } from '../../../../../../../src'

function Templates() {
  const editor = useEditor()
  const { templates } = useAppContext()
  const [value, setValue] = useState('')
  return (
    <div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
      <div style={{ padding: '1rem 1rem', fontSize: '0.75rem' }}>
        <Input
          startEnhancer={() => <Icons.Search size={16} />}
          value={value}
          onChange={e => setValue((e.target).value)}
          size={SIZE.compact}
          placeholder="Search templates"
          clearOnEscape
        />
      </div>
      <div style={{ flex: 1 }}>
        <Scrollbars>
          <div
            style={{ display: 'grid', gap: '0.5rem', padding: '0 2rem 2rem', gridTemplateColumns: '1fr 1fr' }}
          >
            {templates.map(template => (
              <div
                key={template.id}
                dangerouslySetInnerHTML={{__html: template.preview}}
                style={{
                  alignItems: 'center',
                  cursor: 'pointer',
                  border: '1px solid rgba(0,0,0,0.2)',
                  padding: '5px',
                  maxWidth: '150px',
                }}
                onClick={() => editor.importFromJSON(template)}
              >
              </div>
            ))}
          </div>
        </Scrollbars>
      </div>
    </div>
  )
}

export default Templates
