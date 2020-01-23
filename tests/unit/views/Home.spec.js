'use strict'

import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import Welcome from '@/components/Welcome.vue'
import ProjectsOverview from '@/components/ProjectsOverview.vue'
import About from '@/components/About.vue'

let wrapper
before(() => {
  wrapper = shallowMount(Home, {})
})

describe('views/Home.vue', () => {
  it('DOM Smoke Tests', () => {
    expect(wrapper.contains(Welcome)).equals(true)
    expect(wrapper.contains(ProjectsOverview)).equals(true)
    expect(wrapper.contains(About)).equals(true)
  })
})
