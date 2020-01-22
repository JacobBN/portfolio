'use strict'

import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Welcome from '@/components/Welcome.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue } from 'bootstrap-vue'

let wrapper
before(() => {
  const localVue = createLocalVue()
  localVue.component('font-awesome-icon', FontAwesomeIcon)
  localVue.use(BootstrapVue)
  wrapper = shallowMount(Welcome, { localVue })
})

describe('components/Welcome.vue', () => {
  it('DOM Smoke Tests', () => {
    expect(wrapper.contains('#welcome')).equals(true)
    expect(wrapper.contains('img')).equals(true)
    expect(wrapper.contains('h1')).equals(true)
  })
})
