'use strict'

import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import PortfolioOverview from '@/components/PortfolioOverview.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue } from 'bootstrap-vue'

let wrapper
before(() => {
  const localVue = createLocalVue()
  localVue.component('font-awesome-icon', FontAwesomeIcon)
  localVue.use(BootstrapVue)
  wrapper = shallowMount(PortfolioOverview, { localVue })
})

describe('components/PortfolioOverview.vue', () => {
  it('DOM Smoke Tests', () => {
    expect(wrapper.contains('#portfolio-overview')).equals(true)
    expect(wrapper.contains('#lines')).equals(true)
    expect(wrapper.contains('#content')).equals(true)
  })
})
