import { useEffect } from 'react'
import Header from './shared/header/Header'
import Footer from './shared/footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('in-view', entry.isIntersecting)
      })
    }, { threshold: 0.1 })

    const observeElements = (root) => {
      if (root instanceof Element && root.matches('.observe-element')) {
        observer.observe(root)
      }

      root.querySelectorAll?.('.observe-element').forEach((element) => {
        observer.observe(element)
      })
    }

    observeElements(document)

    const mutations = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach(observeElements)
      })
    })
    mutations.observe(document.getElementById('root'), { childList: true, subtree: true })

    return () => {
      mutations.disconnect()
      observer.disconnect()
    }
  }, [])

  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout
