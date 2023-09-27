import React from 'react'
import { useEffect } from 'react';

function Services() {

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const response = await fetch('https://api-s5hih6nmta-uc.a.run.app/services')
      const data = await response.json();
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="servicesContainer">
      services
    </div>
  )
}

export default Services