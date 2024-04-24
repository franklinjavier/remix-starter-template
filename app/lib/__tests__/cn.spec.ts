import { cn } from '../cn'

describe('cn', () => {
  it('returns empty string for no parameters', () => {
    expect(cn()).toBe('')
  })
  it('returns a string to be used as html classNames', () => {
    expect(cn('base', 'another', 'yet-another class')).toBe(
      'base another yet-another class',
    )
  })

  it('filters out nil values', () => {
    expect(cn('base', undefined, null, 'another')).toBe('base another')
  })

  it('merge classes', () => {
    expect(cn('w-full p-0', 'p-6')).toBe('w-full p-6')
  })

  it('filters out booleans accepting ternary, && and || operators', () => {
    const yup = true
    const no = false
    expect(
      cn(
        'base',
        yup ? 'valid' : 'invalid',
        yup && 'yes',
        yup || 'no',
        no || 'appear',
      ),
    ).toBe('base valid yes appear')
  })
})
