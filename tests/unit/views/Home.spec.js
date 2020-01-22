'use strict'

import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import Welcome from '@/components/Welcome.vue'
import PortfolioOverview from '@/components/PortfolioOverview.vue'

let wrapper
before(() => {
  wrapper = shallowMount(Home, {})
})

describe('views/Home.vue', () => {
  it('DOM Smoke Tests', () => {
    expect(wrapper.contains(Welcome)).equals(true)
    expect(wrapper.contains(PortfolioOverview)).equals(true)
  })
})
