import { shallowMount } from '@vue/test-utils'
import Scorecard from '@/components/Scorecard.vue'

describe('Scorecard.vue', () => {
  it('renders props.msg when passed', () => {
    const str = 'new message'
    const wrapper = shallowMount(Scorecard, {
      propsData: { str }
    })
    expect(wrapper.text()).toMatch(str)
  })
})