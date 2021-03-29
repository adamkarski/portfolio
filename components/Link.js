import React from 'react'
import Link from 'next/link'

import { useRouter } from 'next/router'

export default ({ href, children }) => {
  const router = useRouter()

  let className = children.props.className || ''
  
  console.log(className)
  if (router.pathname === href) {
    className = `${className} active`
    
  }
  console.log(router.pathname);
  console.log('href zgodny z linkiem ')
  return <Link href={href} >{React.cloneElement(children, { className })}</Link>
}