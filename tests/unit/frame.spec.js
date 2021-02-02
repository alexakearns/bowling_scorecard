import { shallowMount } from '@vue/test-utils'
import Frame from '@/components/Frame.vue'

describe('Frame.vue', () => {
  it('renders props.msg when passed', () => {
    const str = 'new message'
    const wrapper = shallowMount(Frame, {
      propsData: { str }
    })
    expect(wrapper.text()).toMatch(str)
  })
})
