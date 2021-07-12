import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import Card from '../components/Card'

export default function Home() {
  return (
    <>
    <h1>Navigation</h1>
      <Navigation />
      <h1>Card</h1>
      <Card />
    </>
  )
}
