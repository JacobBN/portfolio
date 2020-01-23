'use strict'

import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import About from '@/components/About.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue } from 'bootstrap-vue'

let wrapper
before(() => {
  const localVue = createLocalVue()
  localVue.component('font-awesome-icon', FontAwesomeIcon)
  localVue.use(BootstrapVue)
  wrapper = shallowMount(About, {
    localVue,
    data: function () {
      return {
        activeTab: 'General'
      }
    }
  })
})

describe('components/About.vue', () => {
  it('DOM Smoke Tests', () => {
    expect(wrapper.contains('#about')).equals(true)
    expect(wrapper.contains('#about-card')).equals(true)
    expect(wrapper.contains('img')).equals(true)
  })
  it('Initializes data properly', () => {
    expect(wrapper.vm.activeTab).equals('General')
  })
  it('Updates activeTab properly', () => {
    expect(wrapper.vm.activeTab).equals('General')
    wrapper.vm.toggleActiveTab('Education')
    expect(wrapper.vm.activeTab).equals('Education')
  })
})
