'use strict'

import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import ProjectsOverview from '@/components/ProjectsOverview.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue } from 'bootstrap-vue'

let wrapper
before(() => {
  const localVue = createLocalVue()
  localVue.component('font-awesome-icon', FontAwesomeIcon)
  localVue.use(BootstrapVue)
  wrapper = shallowMount(ProjectsOverview, { localVue })
})

describe('components/ProjectsOverview.vue', () => {
  it('DOM Smoke Tests', () => {
    expect(wrapper.contains('#projects-overview')).equals(true)
    expect(wrapper.contains('#lines')).equals(true)
    expect(wrapper.contains('#content')).equals(true)
  })
})
