import React from 'react'
import NextHead from 'next/head'


interface HeadProps{
    title:string;
    description?:string;
}

export default function Head({title,description}:HeadProps):JSX.Element {
    return (
        <NextHead>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>
    )
}
