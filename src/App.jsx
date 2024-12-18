import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

export const App = () => {
  return (
    <div>
      <section><Navbar /></section>
      <section><Hero/></section>
      <section><AboutMe/></section>
      <section><Services/></section>
      <section><Portfolio/></section>
      <section><Contact/></section>
      <section><Footer/></section>
      
    </div>
  )
}
export default App
